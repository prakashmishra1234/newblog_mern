import {
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
import instance from "../../../api/Interceptor";
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
            {[1, 2, 3, 4, , 5].map((i, index) => {
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
                <PostCard data={i} />
              </Grid>
            );
          })}
        </Grid>
      )}
    </Paper>
  );
};

export default Home;
