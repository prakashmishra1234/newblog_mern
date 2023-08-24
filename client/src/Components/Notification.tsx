import React from "react";
import { Box, Divider, Typography } from "@mui/material";
import KeyboardBackspaceOutlinedIcon from "@mui/icons-material/KeyboardBackspaceOutlined";
import { AuthContext } from "../Store";

const Notification = () => {
  const context = React.useContext(AuthContext);
  const { setOpenDrawer } = context;

  const toggleDrawer = (value: boolean) => {
    setOpenDrawer(value);
  };

  return (
    <React.Fragment>
      <Box
        sx={{
          display: "flex",
        }}
      >
        <KeyboardBackspaceOutlinedIcon
          sx={{ cursor: "pointer", width: "2rem" }}
          onClick={() => toggleDrawer(false)}
        />
        <Typography
          sx={{
            display: "flex",
            width: "calc(100% - 2rem)",
            justifyContent: "center",
          }}
        >
          Notification
        </Typography>
      </Box>
      <Divider />
    </React.Fragment>
  );
};

export default Notification;
