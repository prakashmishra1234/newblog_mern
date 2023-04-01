import React, { useContext, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { Link, useNavigate } from "react-router-dom";
import { Routeconstant } from "../routing/Routeconstant";
import { AuthContext } from "../../store/store";
import instance from "../../api/Interceptor";
import { LOCAL_STORAGE_KEY } from "../../Config";
import axios from "axios";

const Header = () => {
  const context = useContext(AuthContext);
  const navigate = useNavigate(AuthContext);
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const onClickLogout = () => {
    axios
      .get("/api/v1/logout")
      .then((res) => {
        localStorage.removeItem(LOCAL_STORAGE_KEY);
        context.setIslogin(false);
        context.setUserData({});
        navigate(Routeconstant.LOGIN);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            NEWBLOG
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <Link to={Routeconstant.HOME}>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Home</Typography>
                </MenuItem>
              </Link>
              <Link to={Routeconstant.ABOUT}>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">About</Typography>
                </MenuItem>
              </Link>
              <Link to={Routeconstant.CREATE}>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Create</Typography>
                </MenuItem>
              </Link>
              {context.userData.role && context.userData.role === "admin" ? (
                <Link to={Routeconstant.USER}>
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">Users</Typography>
                  </MenuItem>
                </Link>
              ) : null}

              {context.isLogin ? null : (
                <Box
                  sx={{
                    mr: 2,
                    display: { xs: "block", md: "none" },
                  }}
                >
                  <Link to={Routeconstant.LOGIN}>
                    <MenuItem onClick={handleCloseNavMenu}>
                      <Typography textAlign="center">Login</Typography>
                    </MenuItem>
                  </Link>
                  <Link to={Routeconstant.SIGNUP}>
                    <MenuItem onClick={handleCloseNavMenu}>
                      <Typography textAlign="center">SignUp</Typography>
                    </MenuItem>
                  </Link>
                </Box>
              )}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: {
                xs: "none",
                md: "flex",
                alignItems: "center",
              },
            }}
          >
            <Link
              style={{
                color: "white",
                textDecoration: "none",
                display: "block",
                margin: "0 1rem",
              }}
              to={Routeconstant.HOME}
              onClick={handleCloseNavMenu}
            >
              Home
            </Link>
            <Link
              to={Routeconstant.ABOUT}
              style={{
                color: "white",
                textDecoration: "none",
                display: "block",
                margin: "0 1rem",
              }}
              onClick={handleCloseNavMenu}
            >
              About
            </Link>
            <Link
              style={{
                color: "white",
                textDecoration: "none",
                display: "block",
                margin: "0 1rem",
              }}
              to={Routeconstant.CREATE}
              onClick={handleCloseNavMenu}
            >
              Create
            </Link>
            {context.userData.role && context.userData.role === "admin" ? (
              <Link
                style={{
                  color: "white",
                  textDecoration: "none",
                  display: "block",
                  margin: "0 1rem",
                }}
                to={Routeconstant.USER}
                onClick={handleCloseNavMenu}
              >
                Users
              </Link>
            ) : null}
          </Box>

          {context.isLogin ? (
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar
                    alt="Remy Sharp"
                    src={
                      context.userData.avatar && context.userData.avatar.url
                        ? context.userData.avatar.url
                        : `https://ui-avatars.com/api/?name=${
                            context.userData.name
                              ? context?.userData?.name.split("")[0] ?? ""
                              : ""
                          }`
                    }
                  />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography
                    textAlign="center"
                    onClick={() => {
                      navigate(Routeconstant.PROFILE);
                      handleCloseNavMenu();
                      handleCloseUserMenu();
                    }}
                  >
                    My Profile
                  </Typography>
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    handleCloseNavMenu();
                    handleCloseUserMenu();
                    onClickLogout();
                  }}
                >
                  <Typography textAlign="center">Logout</Typography>
                </MenuItem>
              </Menu>
            </Box>
          ) : (
            <Box
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
              }}
            >
              <Link to={Routeconstant.LOGIN}>
                <Button sx={{ my: 2, color: "white", display: "block" }}>
                  Login
                </Button>
              </Link>
              <Link to={Routeconstant.SIGNUP}>
                <Button sx={{ my: 2, color: "white", display: "block" }}>
                  Signup
                </Button>
              </Link>
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
