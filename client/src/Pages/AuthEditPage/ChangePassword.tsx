import { Box, Typography, Button } from "@mui/material";
import { Formik } from "formik";
import React from "react";
import { LoginInputs } from "../../Components/Styled/Components";
import { PasswordValidator } from "../../utils/helper";

const ChangePassword = () => {
  const onClickChangePassword = (values: {
    password: string;
    confirmPassword: string;
  }) => {};

  return (
    <React.Fragment>
      <Typography variant="h5">Change Password</Typography>

      <Formik
        initialValues={PasswordValidator.initials}
        validationSchema={PasswordValidator.validation}
        onSubmit={(values) => {
          onClickChangePassword(values);
        }}
      >
        {(props) => (
          <>
            <Box component="form" onSubmit={props.handleSubmit} sx={{ mt: 1 }}>
              <LoginInputs
                margin="normal"
                required
                variant="filled"
                fullWidth
                id="password"
                label="New Password"
                name="password"
                type="password"
                autoComplete="password"
                onChange={(event) => {
                  props.setFieldValue("password", event.target.value);
                }}
              />
              {props.errors.password && props.touched.password && (
                <span style={{ color: "red" }}>{props.errors.password}</span>
              )}
              <LoginInputs
                margin="normal"
                required
                variant="filled"
                fullWidth
                name="confirmPassword"
                label="Confirm New Password"
                type="password"
                id="confirmPassword"
                autoComplete="current-confirmPassword"
                onChange={(event) => {
                  props.setFieldValue("confirmPassword", event.target.value);
                }}
              />
              {props.errors.confirmPassword &&
                props.touched.confirmPassword && (
                  <span style={{ color: "red" }}>
                    {props.errors.confirmPassword}
                  </span>
                )}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3 }}
              >
                Change Password
              </Button>
            </Box>
          </>
        )}
      </Formik>
    </React.Fragment>
  );
};

export default ChangePassword;
