import { createTheme, responsiveFontSizes } from "@mui/material/styles";

const primary = {
  main: "#3b3a37",
  dark: "",
  light: "#fff",
};

const secondary = {
  main: "#fff",
  dark: "",
  light: "",
};

const mode = JSON.parse(localStorage.getItem("mycapacitorapptheme")!);

const theme = createTheme({
  palette: {
    mode: mode?.theme ?? "light",
    primary: primary,
    secondary: secondary,
  },
  components: {
    MuiSwitch: {
      styleOverrides: {
        switchBase: (theme) => ({
          color:
            theme.theme.palette.mode === "dark"
              ? theme.theme.palette.primary.light
              : theme.theme.palette.primary.main,
        }),
        colorPrimary: (theme) => ({
          "&.Mui-checked": {
            color:
              theme.theme.palette.mode === "dark"
                ? theme.theme.palette.primary.light
                : theme.theme.palette.primary.main,
          },
        }),
        track: (theme) => ({
          opacity: 0.2,
          backgroundColor:
            theme.theme.palette.mode === "dark"
              ? theme.theme.palette.primary.light
              : theme.theme.palette.primary.dark,
          ".Mui-checked.Mui-checked + &": {
            opacity: 0.7,
          },
        }),
      },
    },
    MuiMenu: {
      styleOverrides: {
        paper: (theme) => ({
          backgroundColor:
            theme.theme.palette.mode === "dark"
              ? theme.theme.palette.primary.main
              : theme.theme.palette.primary.light,
        }),
      },
    },
    MuiButton: {
      styleOverrides: {
        containedPrimary: (theme) => ({
          color:
            theme.theme.palette.mode === "dark"
              ? theme.theme.palette.primary.main
              : theme.theme.palette.primary.light,
          backgroundColor:
            theme.theme.palette.mode === "dark"
              ? theme.theme.palette.primary.light
              : theme.theme.palette.primary.main,
          "&:hover": {
            color:
              theme.theme.palette.mode === "dark"
                ? theme.theme.palette.primary.light
                : theme.theme.palette.primary.main,
            backgroundColor:
              theme.theme.palette.mode === "dark"
                ? theme.theme.palette.primary.main
                : theme.theme.palette.primary.light,
          },
        }),
      },
    },
    MuiTab: {
      styleOverrides: {
        root: (theme) => ({
          "&.MuiTab-root": {
            "&:hover": {},
          },
          "&.Mui-selected": {
            fontSize: "1rem",
          },
        }),
      },
    },
    MuiTabs: {
      styleOverrides: {
        root: (theme) => ({
          "& .MuiTabs-indicator": {
            backgroundColor:
              theme.theme.palette.mode === "dark"
                ? theme.theme.palette.primary.light
                : theme.theme.palette.primary.main,
          },
        }),
      },
    },
    MuiTextField: {
      styleOverrides: {},
    },
  },
});

export default responsiveFontSizes(theme);
