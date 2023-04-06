import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import { Routeconstant } from "../routing/Routeconstant";
import { Link } from "react-router-dom";
import { AuthContext } from "../../store/store";

export default function Sidebar({ state, setState }) {
  const context = React.useContext(AuthContext);

  return (
    <React.Fragment>
      <SwipeableDrawer
        anchor={"left"}
        open={state}
        onClose={() => {
          setState(false);
        }}
        onOpen={() => {
          setState(true);
        }}
      >
        <Box
          sx={{
            width: 250,
          }}
          role="presentation"
          onClick={() => {
            setState(false);
          }}
          onKeyDown={() => {
            setState(false);
          }}
        >
          <List>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>NEWBLOG</ListItemIcon>
                <ListItemText />
              </ListItemButton>
            </ListItem>
          </List>
          <Divider />
          <List>
            <ListItem disablePadding>
              <ListItemButton>
                <Link
                  style={{
                    textDecoration: "none",
                    display: "flex",
                    margin: "0 1rem",
                  }}
                  to={Routeconstant.HOME}
                  onClick={() => {
                    setState(false);
                  }}
                >
                  <ListItemIcon>
                    <HomeOutlinedIcon />
                  </ListItemIcon>
                  <ListItemText primary={"Home"} />
                </Link>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <Link
                  style={{
                    textDecoration: "none",
                    display: "flex",
                    margin: "0 1rem",
                  }}
                  to={Routeconstant.ABOUT}
                  onClick={() => {
                    setState(false);
                  }}
                >
                  <ListItemIcon></ListItemIcon>
                  <ListItemText primary={"About"} />
                </Link>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <Link
                  style={{
                    textDecoration: "none",
                    display: "flex",
                    margin: "0 1rem",
                  }}
                  to={Routeconstant.CREATE}
                  onClick={() => {
                    setState(false);
                  }}
                >
                  <ListItemIcon></ListItemIcon>
                  <ListItemText primary={"Create"} />
                </Link>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <Link
                  style={{
                    textDecoration: "none",
                    display: "flex",
                    margin: "0 1rem",
                  }}
                  to={Routeconstant.DONATE}
                  onClick={() => {
                    setState(false);
                  }}
                >
                  <ListItemIcon></ListItemIcon>
                  <ListItemText primary={"Donate"} />
                </Link>
              </ListItemButton>
            </ListItem>
            {context.userData.role.includes("admin") ? (
              <ListItem disablePadding>
                <ListItemButton>
                  <Link
                    style={{
                      textDecoration: "none",
                      display: "flex",
                      margin: "0 1rem",
                    }}
                    to={Routeconstant.USER}
                    onClick={() => {
                      setState(false);
                    }}
                  >
                    <ListItemIcon></ListItemIcon>
                    <ListItemText primary={"Users"} />
                  </Link>
                </ListItemButton>
              </ListItem>
            ) : null}
            {context.isLogin ? null : (
              <>
                <ListItem disablePadding>
                  <ListItemButton>
                    <Link
                      style={{
                        textDecoration: "none",
                        display: "flex",
                        margin: "0 1rem",
                      }}
                      to={Routeconstant.LOGIN}
                      onClick={() => {
                        setState(false);
                      }}
                    >
                      <ListItemIcon></ListItemIcon>
                      <ListItemText primary={"Login"} />
                    </Link>
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <Link
                      style={{
                        textDecoration: "none",
                        display: "flex",
                        margin: "0 1rem",
                      }}
                      to={Routeconstant.SIGNUP}
                      onClick={() => {
                        setState(false);
                      }}
                    >
                      <ListItemIcon></ListItemIcon>
                      <ListItemText primary={"Sign up"} />
                    </Link>
                  </ListItemButton>
                </ListItem>
              </>
            )}
          </List>
        </Box>
      </SwipeableDrawer>
    </React.Fragment>
  );
}
