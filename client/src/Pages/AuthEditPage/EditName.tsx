import React from "react";
import { Typography, Box, Button } from "@mui/material";
import { LoginInputs } from "../../Components/Styled/Components";
import { AuthContext } from "../../Store";

const EditName = () => {
  const context = React.useContext(AuthContext);
  const { userData, setUserData } = context;
  const [name, setName] = React.useState<string>("");

  React.useEffect(() => {
    setName(userData.FullName);
  }, []);

  const onchangeName = (name: string) => {};

  return (
    <React.Fragment>
      <Typography variant="h5">Edit Name</Typography>
      <Box component="form" sx={{ mt: 1 }} onSubmit={() => onchangeName(name)}>
        <LoginInputs
          margin="normal"
          required
          variant="filled"
          fullWidth
          id="name"
          label="Full name"
          name="name"
          autoComplete="name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <Button
          fullWidth
          variant="contained"
          type="submit"
          sx={{ mt: 3 }}
          onClick={() => onchangeName(name)}
        >
          Save
        </Button>
      </Box>
    </React.Fragment>
  );
};

export default EditName;
