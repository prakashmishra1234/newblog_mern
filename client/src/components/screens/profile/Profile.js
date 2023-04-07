import {
  Avatar,
  Box,
  Button,
  Grid,
  IconButton,
  Paper,
  Skeleton,
  Typography,
} from "@mui/material";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LOCAL_STORAGE_KEY } from "../../../Config";
import { DateFormat } from "../../../services/moment";
import { AuthContext } from "../../../store/store";
import PostCard from "../../common/PostCard";
import { Routeconstant } from "../../routing/Routeconstant";
import ProfileDailogue from "./ProfileDailogue";
import { toast } from "react-hot-toast";
import MetaData from "../../common/Metadata";
import { useSelector } from "react-redux";
const Profile = () => {
  const context = useContext(AuthContext);
  const [postByUser, setPostByUser] = useState([]);
  const [openDailog, setOpenDailog] = useState(false);
  const navigate = useNavigate();

  const { data, loading, error } = useSelector((state) => state.userData);

  const getPostByUser = () => {
    axios
      .post("/api/v1/me/post")
      .then((res) => {
        setPostByUser(res.data?.posts);
      })
      .catch((err) => {
        setPostByUser([]);
        console.log(err);
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
    <>
      <MetaData title="Profile" />
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
                          src={
                            data.avatar && data.avatar.url
                              ? data.avatar.url
                              : `https://ui-avatars.com/api/?name=${
                                  data.name ? data.name.split("")[0] ?? "" : ""
                                }`
                          }
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
                      <Typography>{`Name : ${data.name ?? "NA"}`}</Typography>
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
                      <Typography>{`Email : ${data.email ?? "NA"}`}</Typography>
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
                        data.createdAt ?? null
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
                  <Grid container>
                    {postByUser.map((i, index) => {
                      return (
                        <Grid
                          item
                          xs={12}
                          md={6}
                          sx={{ padding: { sm: "0", md: "1rem" } }}
                        >
                          <PostCard data={i} key={index} />
                        </Grid>
                      );
                    })}
                  </Grid>
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
    </>
  );
};

export default Profile;
