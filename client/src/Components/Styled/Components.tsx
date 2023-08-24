import { Box } from "@mui/material";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/system";

export const MainBox = styled(Box)(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? theme.palette.primary.main
      : theme.palette.primary.light,
  color:
    theme.palette.mode === "dark"
      ? theme.palette.primary.light
      : theme.palette.primary.main,
}));

export const LoginInputs = styled(TextField)(({ theme }) => ({
  "& label.Mui-focused": {
    color:
      theme.palette.mode === "dark"
        ? theme.palette.primary.light
        : theme.palette.primary.main,
  },
}));

export const ProfileBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  marginBottom: "2rem",
}));
