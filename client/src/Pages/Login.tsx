import React from "react";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Formik } from "formik";
import { LoginForm, LoginValidator } from "../utils/helper";
import { AuthContext } from "../Store";
import { LoginInputs } from "../Components/Styled/Components";
import axios from "axios";

const Login = () => {
  const context = React.useContext(AuthContext);

  const onclickLogin = (value: LoginForm) => {
    axios
      .post("api/v1/login", value)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Formik
      initialValues={LoginValidator.initials}
      validationSchema={LoginValidator.validation}
      onSubmit={(values) => {
        onclickLogin(values);
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
              Login
            </Button>
            <Grid container>
              <Grid item xs>
                <Link style={{ color: "inherit" }} to="">
                  Forgot password?
                </Link>
              </Grid>
            </Grid>
          </Box>
        </>
      )}
    </Formik>
  );
};

export default Login;
