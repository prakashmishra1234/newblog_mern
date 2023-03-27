import {
  Box,
  Button,
  CircularProgress,
  Grid,
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
    <Box>
      <Grid container spacing={3}>
        {loading ? (
          <>
            {[1, 2, 3, 4, 5].map((item, index) => {
              return (
                <Grid item xs={12} key={index}>
                  <Skeleton height={200} />
                </Grid>
              );
            })}
          </>
        ) : (
          <>
            <Grid item xs={12}>
              {allPost.map((item, index) => {
                return <PostCard data={item} key={index} />;
              })}
            </Grid>
            {totalPost === allPost.length ? (
              <Grid
                item
                xs={12}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography>No more post!</Typography>
              </Grid>
            ) : (
              <Grid
                item
                xs={12}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Button
                  variant="outlined"
                  style={{ minWidth: "7rem" }}
                  onClick={() => {
                    let temp = page;
                    temp = temp + 1;
                    getAllPost(temp);
                    setPage(temp);
                  }}
                >
                  {loadingMore ? <CircularProgress size={24} /> : "Show More"}
                </Button>
              </Grid>
            )}
          </>
        )}
      </Grid>
    </Box>
  );
};

export default Home;
