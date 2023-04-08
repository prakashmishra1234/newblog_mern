import { Avatar, Box, Grid, Paper, Skeleton, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { DateFormat } from "../../../services/moment";
import PostCard from "../../common/PostCard";
import { useSelector, useDispatch } from "react-redux";
import { getAllPost } from "../../../store/redux/actions/PostAction";

const Home = () => {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllPost(page));
  }, []);

  const { posts, loading, postCount, error } = useSelector(
    (state) => state.allPost
  );

  return (
    <>
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
          <>
            {posts.map((i, index) => {
              return (
                <Grid
                  item
                  key={index}
                  xs={12}
                  md={6}
                  sx={{
                    padding: { sm: "0", md: "1rem" },
                    minHeight: { xs: "0", md: "38.6rem" },
                  }}
                >
                  <PostCard data={i} />
                </Grid>
              );
            })}
          </>
          {console.log(postCount, posts.length)}

          {postCount === posts.length ? (
            <>
              <Grid item xs={12}>
                <Typography
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  No more post found!
                </Typography>
              </Grid>
            </>
          ) : null}
        </Grid>
      )}
    </>
  );
};

export default Home;
