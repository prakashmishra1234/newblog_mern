import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Button, Grid, Paper, Skeleton, Typography } from "@mui/material";
import { AuthContext } from "../../../store/store";
import { DateFormat } from "../../../services/moment";

const Users = () => {
  const [userList, setUserList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchText, setSearchText] = useState("");
  const context = useContext(AuthContext);
  const getUserList = () => {
    setLoading(true);
    axios
      .get("/api/v1/admin/users")
      .then((res) => {
        setUserList(res.data.users ?? []);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    getUserList();
  }, []);

  useEffect(() => {
    const temp = userList.filter((i) => {
      return i.email.includes(searchText);
    });
    setUserList([...temp]);
    if (searchText.length === 0) {
      getUserList();
    }
  }, [searchText]);

  return (
    <>
      {loading ? (
        <>
          {[1, 2, 3, 4, 5, 6].map((item, index) => {
            return (
              <Grid container key={index}>
                <Grid item xs={12} mb={2}>
                  <Skeleton height={100} />
                </Grid>
              </Grid>
            );
          })}
        </>
      ) : (
        <>
          <Paper
            elevation={3}
            style={{ width: "100%", marginBottom: "1rem", padding: "1rem" }}
          >
            <Grid container>
              <Grid items xs={12}>
                <input
                  style={{ width: "100%", height: "100%" }}
                  placeholder="Search for user by email"
                  value={searchText}
                  onChange={(e) => {
                    setSearchText(e.target.value);
                  }}
                />
              </Grid>
              {/* <Grid
                items
                xs={12}
                sm={6}
                sx={{
                  display: "flex",
                  marginTop: { xs: "1rem", sm: "0" },
                  justifyContent: { xs: "space-between", sm: "flex-end" },
                }}
              >
                <Button variant="outlined" style={{ margin: "0 1rem" }}>
                  Clear
                </Button>
                <Button variant="outlined" style={{ margin: "0 1rem" }}>
                  Search
                </Button>
              </Grid> */}
            </Grid>
          </Paper>

          {userList.map((item, index) => {
            return (
              <Paper
                key={index}
                elevation={3}
                style={{ width: "100%", marginBottom: "1rem" }}
              >
                <Grid container style={{ padding: "1rem" }}>
                  <Grid items xs={12} sm={4} md={3}>
                    <Typography style={{ color: "#827e7e" }}>Name</Typography>
                    <Typography>{item?.name ?? "N/A"}</Typography>
                  </Grid>
                  <Grid items xs={12} sm={4} md={3}>
                    <Typography
                      style={{ color: "#827e7e", wordWrap: "break-word" }}
                    >
                      Email
                    </Typography>
                    <Typography style={{ wordWrap: "break-word" }}>
                      {item?.email ?? "N/A"}
                    </Typography>
                  </Grid>
                  <Grid items xs={12} sm={4} md={3}>
                    <Typography
                      style={{ color: "#827e7e", wordWrap: "break-word" }}
                    >
                      Role
                    </Typography>
                    <Typography style={{ wordWrap: "break-word" }}>
                      {item?.role ?? "N/A"}
                    </Typography>
                  </Grid>
                  <Grid items xs={12} sm={4} md={3}>
                    <Typography
                      style={{ color: "#827e7e", wordWrap: "break-word" }}
                    >
                      Active since
                    </Typography>
                    <Typography style={{ wordWrap: "break-word" }}>
                      {DateFormat(context?.userData?.createdAt ?? null)}
                    </Typography>
                  </Grid>
                </Grid>
              </Paper>
            );
          })}
        </>
      )}
    </>
  );
};

export default Users;
