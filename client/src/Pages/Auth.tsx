import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import React from "react";
import { MainBox } from "../Components/Styled/Components";
import SwipeableViews from "react-swipeable-views";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Login from "./Login";
import AppBar from "@mui/material/AppBar/AppBar";
import SignUp from "./SignUp";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
}

const Auth = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index: number) => {
    setValue(index);
  };

  return (
    <MainBox
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        height: "100%",
        width: "100%",
      }}
    >
      <Typography
        variant="h6"
        style={{ fontFamily: "monospace", marginBottom: "3rem" }}
      >
        My Application
      </Typography>
      <Box
        sx={{
          width: { md: "40%" },
          margin: { md: "1rem", xs: "0.5rem" },
          padding: "1rem",
          border: "1px solid grey",
          borderRadius: "2rem",
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Login" />
          <Tab label="Sign Up" />
        </Tabs>
        <SwipeableViews
          axis="x-reverse"
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          <TabPanel value={value} index={0}>
            <Login />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <SignUp />
          </TabPanel>
        </SwipeableViews>
      </Box>
    </MainBox>
  );
};

export default Auth;
