import React from "react";
import {
  Avatar,
  Box,
  Grid,
  IconButton,
  Paper,
  Typography,
} from "@mui/material";

const Edu = () => {
  return (
    <Grid item xs={12}>
      <Paper elevation={3} style={{ padding: "1rem" }}>
        <Box>
          <Grid container spacing={3}>
            <Grid item xs={12} style={{ display: "flex" }}>
              <Typography sx={{ fontWeight: "700", fontSize: "1.5rem" }}>
                Education
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
                Bachelor of Engineering (Mechanical Engineering) from{" "}
                <b>Sant Longowal Institute of Engineering and Technology</b>{" "}
                (July 2019 to June 2022)
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
                Diploma (Mechanical Engineering) from{" "}
                <b>Sant Longowal Institute of Engineering and Technology</b>{" "}
                (July 2016 to June 2019)
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
                Matriculation from <b>Darbhanga Public School</b> (2016)
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Grid>
  );
};

export default Edu;
