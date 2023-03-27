import React from "react";
import {
  Avatar,
  Box,
  Grid,
  IconButton,
  Paper,
  Typography,
} from "@mui/material";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
const Personal = () => {
  return (
    <Grid item xs={12}>
      <Paper elevation={3} style={{ padding: "1rem" }}>
        <Box>
          <Grid container spacing={3}>
            <Grid item xs={12} style={{ display: "flex" }}>
              <Typography sx={{ fontWeight: "700", fontSize: "1.5rem" }}>
                Personal Details
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
                <b>Email : </b>pm9507041@gmail.com
              </Typography>
              <Typography sx={{ paddingRight: "0.5rem" }}>
                <b>DOB : </b>19/08/2001
              </Typography>
              <Typography sx={{ paddingRight: "0.5rem" }}>
                <b>Address : </b>Gaur City 1, Greater Noida West, Gautam Budha
                Nagar, Uttar Pradesh, 201301
              </Typography>
              <Typography sx={{ paddingRight: "0.5rem" }}>
                <b>Linkedin : </b>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/prakashmishra1234/"
                >
                  https://www.linkedin.com/in/prakashmishra1234/
                </a>
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
                <b>Mobile : </b>9507041006
              </Typography>
              <Typography sx={{ paddingRight: "0.5rem" }}>
                <b>Nationality : </b>Indian
              </Typography>
              <Typography sx={{ paddingRight: "0.5rem" }}>
                <b>Github : </b>
                <a target="_blank" href="https://github.com/prakashmishra1234">
                  https://github.com/prakashmishra1234
                </a>
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Grid>
  );
};

export default Personal;
