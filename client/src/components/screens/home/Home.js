import {
  Avatar,
  Box,
  Button,
  CircularProgress,
  Grid,
  Paper,
  Skeleton,
  Typography,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { DateFormat } from "../../../services/moment";
import PostCard from "../../common/PostCard";

const Home = () => {
  const [allPost, setAllPost] = useState([]);
  const [totalPost, setTotalPost] = useState();
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);

  useEffect(() => {
    getAllPost(page);
  }, []);

  const getAllPost = (pageNumber) => {
    if (pageNumber === 1) {
      setLoading(true);
    } else {
      setLoadingMore(true);
    }
    axios
      .get(`/api/v1/posts?page=${pageNumber}`)
      .then((res) => {
        setTotalPost(res.data?.postCount);
        if (pageNumber === 1) {
          setAllPost(res.data.posts ?? []);
        } else {
          setAllPost([...allPost, ...res.data?.posts]);
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
        setLoadingMore(false);
      });
  };

  return (
    <Paper
      elevation={3}
      sx={{
        marginTop: { sm: "0", md: "1rem" },
        padding: { sm: "0", md: "1rem" },
        display: "flex",
        flexDirection: { md: "row", xs: "column" },
      }}
    >
      {loading ? (
        <>
          <Grid container>
            {[1, 2, 3, 4, 5].map((i, index) => {
              return (
                <Grid
                  item
                  key={index}
                  xs={12}
                  md={6}
                  sx={{ padding: { sm: "0", md: "1rem" }, height: "25rem" }}
                >
                  <Skeleton sx={{ height: "100%", width: "100%" }} />
                </Grid>
              );
            })}
          </Grid>
        </>
      ) : (
        <Grid container>
          {allPost.map((i, index) => {
            return (
              <Grid
                item
                key={index}
                xs={12}
                md={6}
                sx={{ padding: { sm: "0", md: "1rem" } }}
              >
                <Paper
                  elevation={3}
                  sx={{
                    marginBottom: { xs: "1rem", md: "0" },
                    minHeight: { xs: "0", md: "38.6rem" },
                  }}
                >
                  <Box style={{ padding: "4px", display: "flex" }}>
                    <Avatar
                      style={{ height: "4rem", width: "4rem" }}
                      alt="user"
                      src={i?.postedBy?.avatar?.url ?? ""}
                    />
                    <div
                      style={{ paddingLeft: "0.5rem", paddingTop: "0.3rem" }}
                    >
                      <Typography sx={{ fontWeight: "700" }}>
                        {i?.postedBy?.name ?? ""}
                      </Typography>
                      <Typography>
                        Posted on : {DateFormat(i?.date ?? null)}
                      </Typography>
                    </div>
                  </Box>
                  <PostCard data={i} />
                </Paper>
              </Grid>
            );
          })}
        </Grid>
      )}
    </Paper>
  );
};

export default Home;
