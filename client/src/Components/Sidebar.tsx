import React from "react";
import { Box, Divider, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { AuthContext, DrawerAnchorEnum } from "../Store";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import Avatar from "@mui/material/Avatar";

const Sidebar = () => {
  const context = React.useContext(AuthContext);
  const { setOpenDrawer, setDrawerComp, setdrawerAnchor } = context;

  const closeDrawer = (value: boolean) => {
    setOpenDrawer(value);
  };

  const toggleDrawer = (
    value: boolean,
    comp: string,
    direction: DrawerAnchorEnum
  ) => {
    setOpenDrawer(value);
    setDrawerComp(comp);
    setdrawerAnchor(direction);
  };

  const onclickLogout = (value: boolean) => {
    closeDrawer(false);
  };

  const setting = (
    <Box sx={{ position: "absolute", bottom: "0", width: "100%" }}>
      <Divider />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "1rem 0",
          cursor: "pointer",
        }}
        onClick={() => {
          toggleDrawer(true, "settings", DrawerAnchorEnum.Bottom);
        }}
      >
        <SettingsOutlinedIcon />
        <Typography sx={{ marginLeft: "1rem" }}>Settings</Typography>
      </div>
    </Box>
  );

  return (
    <React.Fragment>
      <Box sx={{ padding: "0.5rem", display: "flex" }}>
        <Avatar
          alt="profile img"
          src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=740&t=st=1689324579~exp=1689325179~hmac=6fe260c6e879ea8a25412bcb248295f073e7f127fc680d5c2e853773f3463aa5"
        />
        <Box
          sx={{
            paddingLeft: "0.5rem",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Typography sx={{ fontWeight: "550" }}>Prakash Mishra</Typography>
          <Link
            to="/profile"
            style={{ textDecoration: "none", color: "inherit" }}
            onClick={() => closeDrawer(false)}
          >
            View Profile
          </Link>
        </Box>
      </Box>
      <Divider />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Typography sx={{ margin: "1rem 0" }}>
          <Link
            to="/"
            style={{ textDecoration: "none", color: "inherit" }}
            onClick={() => closeDrawer(false)}
          >
            Home
          </Link>
        </Typography>
        <Typography sx={{ margin: "1rem 0" }}>
          <Link
            to="/about"
            style={{ textDecoration: "none", color: "inherit" }}
            onClick={() => closeDrawer(false)}
          >
            About
          </Link>
        </Typography>

        <Typography
          sx={{ margin: "1rem 0", cursor: "pointer" }}
          style={{ textDecoration: "none", color: "inherit" }}
          onClick={() => onclickLogout(false)}
        >
          Logout
        </Typography>

        <Typography sx={{ margin: "1rem 0" }}>
          <Link to="/auth" style={{ textDecoration: "none", color: "inherit" }}>
            Login
          </Link>
        </Typography>
      </Box>
      {setting}
    </React.Fragment>
  );
};

export default Sidebar;
