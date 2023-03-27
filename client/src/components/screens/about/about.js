import {
  Avatar,
  Box,
  Grid,
  IconButton,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";
import { baseName } from "../../../Config";
import Edu from "./Components/Edu";
import Personal from "./Components/Personal";
import Skills from "./Components/Skills.js";
import Work from "./Components/Work";

const about = () => {
  return (
    <Box>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper elevation={3} style={{ padding: "1rem" }}>
            <Box>
              <Grid container spacing={3}>
                <Grid
                  item
                  xs={12}
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <IconButton style={{ height: "15rem", width: "15rem" }}>
                    <Avatar
                      style={{ height: "15rem", width: "15rem" }}
                      alt="user"
                      //   src={`https://ui-avatars.com/api/?name=P`}
                      src={`${baseName}myimage.jpeg`}
                    />
                  </IconButton>
                </Grid>
                <Grid
                  item
                  xs={12}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography sx={{ fontWeight: "700", fontSize: "2rem" }}>
                    PRAKASH MISHRA
                  </Typography>
                  <Typography sx={{ fontWeight: "600", fontSize: "1.5rem" }}>
                    Software Engineer
                  </Typography>
                  <Typography sx={{ fontWeight: "", fontSize: "1.5rem" }}>
                    at
                  </Typography>
                  <Typography sx={{ fontWeight: "600", fontSize: "1.5rem" }}>
                    SFLHUB TECHNOLOGY
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Paper>
        </Grid>
        <Personal />
        <Work />
        <Skills />
        <Edu />
      </Grid>
    </Box>
  );
};

export default about;
