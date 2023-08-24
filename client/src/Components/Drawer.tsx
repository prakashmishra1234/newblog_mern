import * as React from "react";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import { AuthContext } from "../Store";
import { Box, colors } from "@mui/material";
import Notification from "./Notification";
import Sidebar from "./Sidebar";
import Settings from "./Settings";

export default function CustomDrawer(props: any) {
  const context = React.useContext(AuthContext);
  const { drawerComp, drawerAnchor, setOpenDrawer } = context;

  const toggleDrawer = (value: boolean) => () => {
    setOpenDrawer(value);
  };

  const comp = (
    <React.Fragment>
      {drawerComp === "notification" ? (
        <Notification />
      ) : drawerComp === "sidebar" ? (
        <Sidebar />
      ) : drawerComp === "settings" ? (
        <Settings />
      ) : null}
    </React.Fragment>
  );

  return (
    <React.Fragment>
      <SwipeableDrawer
        disableSwipeToOpen
        anchor={drawerAnchor}
        open={context.openDrawer}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        <Box
          sx={{
            width:
              drawerComp === "notification"
                ? "100%"
                : { xs: "15rem", md: "30rem" },
            padding: "1rem 0",
          }}
        >
          {comp}
        </Box>
      </SwipeableDrawer>
    </React.Fragment>
  );
}
