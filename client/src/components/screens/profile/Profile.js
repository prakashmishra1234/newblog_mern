import {
  Avatar,
  Box,
  Button,
  Divider,
  Grid,
  IconButton,
  Paper,
  Skeleton,
  Typography,
} from "@mui/material";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import instance from "../../../api/Interceptor";
import { LOCAL_STORAGE_KEY } from "../../../Config";
import { DateFormat } from "../../../services/moment";
import { AuthContext } from "../../../store/store";
import PostCard from "../../common/PostCard";
import { Routeconstant } from "../../routing/Routeconstant";
import ProfileDailogue from "./ProfileDailogue";
import { toast } from "react-hot-toast";
const Profile = () => {
  const context = useContext(AuthContext);
  const [postByUser, setPostByUser] = useState([]);
  const [loading, setLoading] = useState(false);
  const [openDailog, setOpenDailog] = useState(false);
  const navigate = useNavigate();

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

  const deleteAccount = () => {
    axios
      .post(`/api/v1/delete-request`)
      .then((res) => {
        toast.success(res.data.message);
        localStorage.removeItem(LOCAL_STORAGE_KEY);
        context.setIslogin(false);
        navigate(Routeconstant.LOGIN);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setOpenDailog(false);
      });
  };

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
        {openDailog ? (
          <ProfileDailogue
            openDailog={openDailog}
            setOpenDailog={setOpenDailog}
            deleteAccount={deleteAccount}
          />
        ) : null}
        <>
          <Grid item xs={12}>
            <Paper elevation={3}>
              <Box
                style={{ display: "flex" }}
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", md: "row" },
                }}
              >
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
                      justifyContent: { xs: "center", md: "left" },
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
                      justifyContent: { xs: "center", md: "left" },
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
                      justifyContent: { xs: "center", md: "left" },
                      padding: "1rem",
                    }}
                  >
                    <Typography>{`You are active since : ${DateFormat(
                      context?.userData?.createdAt ?? null
                    )}`}</Typography>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "1rem",
                      flexDirection: { xs: "column", md: "row" },
                    }}
                  >
                    <Button
                      variant="outlined"
                      sx={{
                        marginBottom: { xs: "1rem", md: "0" },
                      }}
                    >
                      Edit Account
                    </Button>
                    <Button
                      variant="outlined"
                      color="error"
                      onClick={() => {
                        setOpenDailog(true);
                      }}
                    >
                      Delete Account
                    </Button>
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
        </>
      </Grid>
    </Box>
  );
};

export default Profile;
