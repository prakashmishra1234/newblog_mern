import {
  Avatar,
  Box,
  Divider,
  Grid,
  IconButton,
  Paper,
  Skeleton,
  Typography,
} from "@mui/material";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import instance from "../../../api/Interceptor";
import { DateFormat } from "../../../services/moment";
import { AuthContext } from "../../../store/store";
import PostCard from "../../common/PostCard";

const Profile = () => {
  const context = useContext(AuthContext);
  const [postByUser, setPostByUser] = useState([]);
  const [loading, setLoading] = useState(false);
  console.log(context.userData);
  const getPostByUser = () => {
    setLoading(true);
    axios
      .post("/api/v1/me/post")
      .then((res) => {
        setPostByUser(res.data?.posts);
      })
      .catch((err) => {
        setPostByUser([]);
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  useEffect(() => {
    getPostByUser();
  }, []);

  return (
    <Box>
      <Grid
        container
        spacing={3}
        sx={{
          xs: { flexDirection: "column-reverse" },
          md: { flexDirection: "row" },
        }}
      >
        <Grid item xs={12}>
          <Paper elevation={3}>
            <Box style={{ display: "flex" }}>
              <Grid container>
                <Grid
                  item
                  xs={12}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "1rem",
                  }}
                >
                  <IconButton style={{ height: "10rem", width: "10rem" }}>
                    <Avatar
                      style={{ height: "10rem", width: "10rem" }}
                      alt="user"
                      src={`https://ui-avatars.com/api/?name=${
                        context.userData.name
                          ? context?.userData?.name.split("")[0] ?? ""
                          : ""
                      }`}
                    />
                  </IconButton>
                </Grid>
              </Grid>
              <Grid container>
                <Grid
                  item
                  xs={12}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    padding: "1rem",
                  }}
                >
                  <Typography>{`Name : ${
                    context?.userData?.name ?? "NA"
                  }`}</Typography>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    padding: "1rem",
                  }}
                >
                  <Typography>{`Email : ${
                    context?.userData?.email ?? "NA"
                  }`}</Typography>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    padding: "1rem",
                  }}
                >
                  <Typography>{`You are active since : ${DateFormat(
                    context?.userData?.createdAt ?? null
                  )}`}</Typography>
                </Grid>
              </Grid>
            </Box>
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper
            elevation={3}
            style={{ marginBottom: "1rem", padding: "1rem" }}
          >
            <Typography
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              Your posts
            </Typography>
          </Paper>
          {postByUser.length ? (
            <>
              {postByUser.map((item, index) => {
                return <PostCard data={item} key={index} />;
              })}
            </>
          ) : (
            <Paper
              elevation={3}
              style={{ marginBottom: "1rem", padding: "1rem" }}
            >
              <Typography
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "red",
                }}
              >
                No post found! Please write something to view
              </Typography>
            </Paper>
          )}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Profile;
