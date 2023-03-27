import React from "react";
import {
  Avatar,
  Box,
  Grid,
  IconButton,
  Paper,
  Typography,
} from "@mui/material";

const Work = () => {
  return (
    <Grid item xs={12}>
      <Paper elevation={3} style={{ padding: "1rem" }}>
        <Box>
          <Grid container spacing={3}>
            <Grid item xs={12} style={{ display: "flex" }}>
              <Typography sx={{ fontWeight: "700", fontSize: "1.5rem" }}>
                Work Experience
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              style={{
                display: "flex",
              }}
            >
              <Typography sx={{ paddingRight: "0.5rem" }}>
                Software Engineer
              </Typography>
              <Typography sx={{ paddingRight: "0.5rem" }}>at</Typography>
              <Typography sx={{ paddingRight: "0.5rem" }}>
                SFLHUB TECHNOLOGY
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              style={{
                display: "flex",
                paddingTop: "0",
              }}
            >
              <Typography sx={{ paddingRight: "0.5rem" }}>
                (July 2022
              </Typography>
              <Typography sx={{ paddingRight: "0.5rem" }}>to</Typography>
              <Typography sx={{ paddingRight: "0.5rem" }}>Current)</Typography>
            </Grid>
            <Grid
              item
              xs={12}
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                // alignItems: "center",
              }}
            >
              <Typography sx={{ paddingBottom: "0.4rem" }}>
                <b># </b>Manage frontend development projects from initial
                design through completion, optimizing all cross-browser and
                multi-platform compatibility.
              </Typography>
              <Typography sx={{ paddingBottom: "0.4rem" }}>
                <b># </b>Collaborated with 3 different backend development team
                on 5 new projects designs and feature improvement.
              </Typography>
              <Typography sx={{ paddingBottom: "0.4rem" }}>
                <b># </b>Produced multiple visual elements of web applications
                by translating UI/UX design wireframes into code.
              </Typography>
              <Typography sx={{ paddingBottom: "0.4rem" }}>
                <b># </b>Responsible for developing a responsive framework that
                work on smartphone as well as tablet and desktop.
              </Typography>
              <Typography sx={{ paddingBottom: "0.4rem" }}>
                <b># </b>Responsible for maintaining websites including content
                updates, debugging, feature enhancement and regular updates.
              </Typography>
              <Typography sx={{ fontWeight: "bold" }}>
                <b># </b>Technology used : Javascript, ReactJs, Redux,
                Bootstrap, Material UI, HTML, CSS.
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              style={{
                display: "flex",
              }}
            >
              <Typography sx={{ paddingRight: "0.5rem" }}>
                Software Engineer Intern
              </Typography>
              <Typography sx={{ paddingRight: "0.5rem" }}>at</Typography>
              <Typography sx={{ paddingRight: "0.5rem" }}>
                SFLHUB TECHNOLOGY
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              style={{
                display: "flex",
                paddingTop: "0",
              }}
            >
              <Typography sx={{ paddingRight: "0.5rem" }}>(Jan 2022</Typography>
              <Typography sx={{ paddingRight: "0.5rem" }}>to</Typography>
              <Typography sx={{ paddingRight: "0.5rem" }}>
                June 2022)
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                // alignItems: "center",
              }}
            >
              <Typography sx={{ paddingBottom: "0.4rem" }}>
                <b># </b>Analyzed source code to identify functionality issues.
              </Typography>
              <Typography sx={{ paddingBottom: "0.4rem" }}>
                <b># </b>Shadowed team members to learn new tasks and how to
                appropriately handle technical issues.
              </Typography>
              <Typography sx={{ paddingBottom: "0.4rem" }}>
                <b># </b>Worked with developers to identify and remove software
                bugs.
              </Typography>
              <Typography sx={{ paddingBottom: "0.4rem" }}>
                <b># </b>Partnered with team members to learn best practices in
                software design.
              </Typography>
              <Typography sx={{ paddingBottom: "0.4rem" }}>
                <b># </b>Prepared and submitted reports and other documentation
                to assist development team members.
              </Typography>
              <Typography sx={{ fontWeight: "bold" }}>
                <b># </b>Technology used : Javascript, ReactJs, Redux,
                Bootstrap, Material UI, HTML, CSS.
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Grid>
  );
};

export default Work;
