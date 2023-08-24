import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { AuthContext, DrawerAnchorEnum } from "../Store";
import { Box, Typography, Avatar, IconButton, Menu } from "@mui/material";
import Header from "../Components/Header";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import CustomDrawer from "../Components/Drawer";
import NightlightOutlinedIcon from "@mui/icons-material/NightlightOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { setLocalStorageData } from "../utils/helper";
import { MainBox } from "../Components/Styled/Components";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";

const Main = () => {
  const context = React.useContext(AuthContext);
  const navigate = useNavigate();
  const [anchorElUser, setAnchorElUser] = React.useState(false);
  const {
    theme,
    userData,
    backdropOpen,
    setTheme,
    setOpenDrawer,
    setDrawerComp,
    setdrawerAnchor,
  } = context;

  const getUserData = () => {};

  React.useEffect(() => {
    getUserData();
  }, []);

  const toggleDrawer = (
    value: boolean,
    comp: string,
    direction: DrawerAnchorEnum
  ): void => {
    setOpenDrawer(value);
    setDrawerComp(comp);
    setdrawerAnchor(direction);
  };

  const onThemeChange = (theme: string): void => {
    setLocalStorageData("mycapacitorapptheme", { theme: theme });
    setTheme(theme);
    window.location.reload();
  };

  const onMenuChange = (value: boolean): void => {
    setAnchorElUser(value);
  };

  const onclickLogout = (value: boolean) => {};

  const themebutton = (
    <>
      {theme === "dark" ? (
        <MenuItem
          sx={{ display: "flex" }}
          onClick={() => onThemeChange("light")}
        >
          <WbSunnyOutlinedIcon />
          <Typography sx={{ marginLeft: "1rem" }} textAlign="center">
            {"Enable light mode"}
          </Typography>
        </MenuItem>
      ) : (
        <MenuItem
          sx={{ display: "flex" }}
          onClick={() => {
            onThemeChange("dark");
            onMenuChange(false);
          }}
        >
          <NightlightOutlinedIcon />
          <Typography sx={{ marginLeft: "1rem" }} textAlign="center">
            {"Enable dark mode"}
          </Typography>
        </MenuItem>
      )}
    </>
  );

  const profile = (
    <Box sx={{ flexGrow: 0, display: { md: "block", xs: "flex" } }}>
      <Tooltip title="click to open">
        <IconButton onClick={() => onMenuChange(true)} sx={{ p: 0 }}>
          <Avatar
            alt="Remy Sharp"
            src={`https://ui-avatars.com/api/?name=${
              userData.FirstName.split("")[0]
            }`}
          />
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: "45px" }}
        id="menu-appbar"
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={anchorElUser}
        onClose={() => onMenuChange(false)}
      >
        <MenuItem
          sx={{ display: "flex" }}
          onClick={() => {
            navigate("/profile");
            onMenuChange(false);
          }}
        >
          <AccountCircleOutlinedIcon />
          <Typography textAlign="center" sx={{ marginLeft: "1rem" }}>
            View Profile
          </Typography>
        </MenuItem>
        {themebutton}
        <MenuItem
          sx={{ display: "flex" }}
          onClick={() => {
            onclickLogout(false);
          }}
        >
          <LogoutOutlinedIcon />
          <Typography textAlign="center" sx={{ marginLeft: "1rem" }}>
            Logout
          </Typography>
        </MenuItem>
      </Menu>
    </Box>
  );

  const Navbar = (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 0.5rem",
        height: "7vh",
      }}
    >
      <Box sx={{ display: { md: "none", xs: "flex" } }}>
        <ListOutlinedIcon
          sx={{ cursor: "pointer" }}
          onClick={() => toggleDrawer(true, "sidebar", DrawerAnchorEnum.Left)}
        />
      </Box>
      <Typography variant="h6" style={{ fontFamily: "monospace" }}>
        My Application
      </Typography>
      <Box sx={{ display: { md: "flex", xs: "none" }, alignItems: "center" }}>
        <Header />
        {profile}
      </Box>
    </Box>
  );

  return (
    <React.Fragment>
      {backdropOpen ? null : (
        <MainBox>
          <CustomDrawer />
          {Navbar}
          <Box
            sx={{
              height: { xs: "93vh" },
              overflowY: "auto",
            }}
          >
            <Outlet />
          </Box>
        </MainBox>
      )}
    </React.Fragment>
  );
};

export default Main;
