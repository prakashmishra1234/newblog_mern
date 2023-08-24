import React from "react";
import { AuthContext } from "../Store";
import { Box, IconButton, Avatar, Typography, Button } from "@mui/material";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import { ProfileBox } from "../Components/Styled/Components";
import ChangePassword from "./AuthEditPage/ChangePassword";
import EditName from "./AuthEditPage/EditName";

const Profile = () => {
  const context = React.useContext(AuthContext);
  const { userData, setDailogueopen, setDialoguecomp } = context;
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        padding: "0 1rem",
      }}
    >
      <IconButton sx={{ p: 0, my: "2rem" }}>
        <Avatar
          alt="Remy Sharp"
          sx={{ height: "10rem", width: "10rem" }}
          src={`https://ui-avatars.com/api/?name=${
            userData.FirstName.split("")[0]
          }`}
        />
      </IconButton>
      <Typography variant="h4" sx={{ mb: "2rem" }}>
        {userData.FullName ?? ""}
        <IconButton
          onClick={() => {
            setDailogueopen(true);
            setDialoguecomp(<EditName />);
          }}
        >
          <BorderColorOutlinedIcon />
        </IconButton>
      </Typography>
      <ProfileBox sx={{ width: { md: "30%", xs: "100%" } }}>
        <Typography>Email</Typography>
        <Typography>{userData.Email ?? ""}</Typography>
      </ProfileBox>
      <ProfileBox sx={{ width: { md: "30%", xs: "100%" } }}>
        <Typography>Mobile</Typography>
        <Typography>
          {userData.PhoneNumber ? userData?.PhoneNumber : "N/A"}
        </Typography>
      </ProfileBox>
      <ProfileBox sx={{ width: { md: "30%", xs: "100%" } }}>
        <Button
          variant="contained"
          onClick={() => {
            setDailogueopen(true);
            setDialoguecomp(<ChangePassword />);
          }}
        >
          Change Password
        </Button>
        <Button variant="contained">Edit Profile</Button>
      </ProfileBox>
    </Box>
  );
};

export default Profile;
