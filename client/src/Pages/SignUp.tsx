import React from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Formik } from "formik";
import { LoginForm, SignupValidator } from "../utils/helper";
import { LoginInputs } from "../Components/Styled/Components";

const SignUp = () => {
  const onclickSignup = (value: LoginForm) => {};

  return (
    <Formik
      initialValues={SignupValidator.initials}
      validationSchema={SignupValidator.validation}
      onSubmit={(values) => {
        onclickSignup(values);
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
              id="name"
              label="Full name"
              name="name"
              autoComplete="name"
              onChange={(event) => {
                props.setFieldValue("name", event.target.value);
              }}
            />
            {props.errors.email && props.touched.email && (
              <span style={{ color: "red" }}>{props.errors.name}</span>
            )}
            <LoginInputs
              margin="normal"
              required
              variant="filled"
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              onChange={(event) => {
                props.setFieldValue("email", event.target.value);
              }}
            />
            {props.errors.email && props.touched.email && (
              <span style={{ color: "red" }}>{props.errors.email}</span>
            )}
            <LoginInputs
              margin="normal"
              required
              variant="filled"
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={(event) => {
                props.setFieldValue("password", event.target.value);
              }}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
          </Box>
          <Grid container>
            <Grid item xs>
              <Link style={{ color: "inherit" }} to="">
                Forgot password?
              </Link>
            </Grid>
          </Grid>
        </>
      )}
    </Formik>
  );
};

export default SignUp;
