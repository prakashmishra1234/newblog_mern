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
import { Link, useNavigate } from "react-router-dom";
import { Routeconstant } from "../routing/Routeconstant";
import Sidebar from "./Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { userLogout } from "../../store/redux/actions/UserAction";
import CustomBackdrop from "../common/CustomBackdrop";
import { useState } from "react";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [state, setState] = useState(false);

  const { data, isAuthenticated, loading } = useSelector(
    (state) => state.userData
  );

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
    dispatch(userLogout());
  };

  return (
    <>
      {loading ? <CustomBackdrop loading={loading} /> : null}
      <AppBar position="static" color="transparent">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
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
                onClick={() => setState(true)}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Sidebar state={state} setState={setState} />
            </Box>

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
              NEWBLOG
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
                  textDecoration: "none",
                  display: "block",
                  margin: "0 1rem",
                }}
                to={Routeconstant.CREATE}
                onClick={handleCloseNavMenu}
              >
                Create
              </Link>
              {/* {context.stripeApiKey ? (
              <Link
                style={{
                  textDecoration: "none",
                  display: "block",
                  margin: "0 1rem",
                }}
                to={Routeconstant.DONATE}
                onClick={handleCloseNavMenu}
              >
                Donate
              </Link>
            ) : null} */}

              {data.role && data.role === "admin" ? (
                <Link
                  style={{
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
            {isAuthenticated ? (
              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar
                      alt="Remy Sharp"
                      src={
                        data.avatar && data.avatar.url
                          ? data.avatar.url
                          : `https://ui-avatars.com/api/?name=${
                              data.name ? data.name.split("")[0] ?? "" : ""
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
                <Link
                  to={Routeconstant.LOGIN}
                  style={{ textDecoration: "none" }}
                >
                  <Button sx={{ my: 2, display: "block" }}>Login</Button>
                </Link>
                <Link
                  to={Routeconstant.SIGNUP}
                  style={{ textDecoration: "none" }}
                >
                  <Button sx={{ my: 2, display: "block" }}>Signup</Button>
                </Link>
              </Box>
            )}
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default Header;
