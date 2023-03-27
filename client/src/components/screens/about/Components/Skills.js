import React from "react";
import {
  Avatar,
  Box,
  Grid,
  IconButton,
  Paper,
  Typography,
} from "@mui/material";
const Skills = () => {
  return (
    <Grid item xs={12}>
      <Paper elevation={3} style={{ padding: "1rem" }}>
        <Box>
          <Grid container spacing={3}>
            <Grid item xs={12} style={{ display: "flex" }}>
              <Typography sx={{ fontWeight: "700", fontSize: "1.5rem" }}>
                Skills
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography sx={{ paddingRight: "0.5rem" }}>
                <b># </b>Javascript
              </Typography>
              <Typography sx={{ paddingRight: "0.5rem" }}>
                <b># </b>Reactjs
              </Typography>
              <Typography sx={{ paddingRight: "0.5rem" }}>
                <b># </b>Nodejs
              </Typography>
              <Typography sx={{ paddingRight: "0.5rem" }}>
                <b># </b>Expressjs
              </Typography>
              <Typography sx={{ paddingRight: "0.5rem" }}>
                <b># </b>Mongodb
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography sx={{ paddingRight: "0.5rem" }}>
                <b># </b>SQL
              </Typography>
              <Typography sx={{ paddingRight: "0.5rem" }}>
                <b># </b>CSS
              </Typography>
              <Typography sx={{ paddingRight: "0.5rem" }}>
                <b># </b>Bootstrap
              </Typography>
              <Typography sx={{ paddingRight: "0.5rem" }}>
                <b># </b>HTML
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Grid>
  );
};

export default Skills;
