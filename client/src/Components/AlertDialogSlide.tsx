import * as React from "react";
import Dialog from "@mui/material/Dialog";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import { AuthContext } from "../Store";
import { Box, Button } from "@mui/material";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const AlertDialogSlide: React.FC = () => {
  const context = React.useContext(AuthContext);
  const { dailogueopen, setDailogueopen, dialoguecomp } = context;

  const handleClose = () => {
    setDailogueopen(false);
  };

  return (
    <Dialog
      open={dailogueopen}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
    >
      <Box sx={{ padding: "1rem" }}>
        {dialoguecomp}
        <Button
          variant="contained"
          fullWidth
          sx={{ mt: 3 }}
          onClick={handleClose}
        >
          Cancel
        </Button>
      </Box>
    </Dialog>
  );
};

export default AlertDialogSlide;
