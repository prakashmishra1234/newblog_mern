import React from "react";
import { Box } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { AuthContext } from "../Store";
import { setLocalStorageData } from "../utils/helper";

const Settings = () => {
  const context = React.useContext(AuthContext);
  const { theme, setTheme } = context;

  const themeChange = (theme: string): void => {
    setTheme(theme);
    setLocalStorageData("mycapacitorapptheme", { theme: theme });
    window.location.reload();
  };

  return (
    <Box sx={{ padding: "1rem", width: "100%" }}>
      <FormControlLabel
        control={
          <Switch
            size="small"
            checked={theme === "dark" ? true : false}
            onChange={(e) => {
              if (theme === "dark") {
                themeChange("light");
              } else {
                themeChange("dark");
              }
            }}
          />
        }
        label="Dark theme"
      />
    </Box>
  );
};

export default Settings;
