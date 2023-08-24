import { Box, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <React.Fragment>
      <Box sx={{ display: "flex" }}>
        <Typography sx={{ margin: "0 1rem" }}>
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            Home
          </Link>
        </Typography>
        <Typography sx={{ margin: "0 1rem" }}>
          <Link
            to="/about"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            About
          </Link>
        </Typography>
      </Box>
    </React.Fragment>
  );
};

export default Header;
