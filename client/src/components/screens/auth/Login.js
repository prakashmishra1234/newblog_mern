import { Grid, Paper, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Formik } from "formik";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import instance from "../../../api/Interceptor";
import { LoginValidator } from "../../../helper/helper";
import { AuthContext } from "../../../store/store";
import { Routeconstant } from "../../routing/Routeconstant";
import { LOCAL_STORAGE_KEY } from "../../../Config";
import { toast } from "react-hot-toast";
import axios from "axios";
import AuthBackdrop from "./AuthBackdrop";
const Login = () => {
  const context = useContext(AuthContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const onClickLogin = (value) => {
    setLoading(true);
    const body = {
      email: value.email,
      password: value.password,
    };
    axios
      .post("/api/v1/login", body)
      .then((res) => {
        localStorage.setItem(
          LOCAL_STORAGE_KEY,
          JSON.stringify({ isLoggesIn: true })
        );
        context.setIslogin(true);
        navigate(Routeconstant.HOME);
      })
      .catch((err) => {
        toast.error(err.response.data.message ?? "Something went wrong");
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <>
      {loading ? (
        <AuthBackdrop loading={loading} setLoading={setLoading} />
      ) : (
        <Formik
          initialValues={LoginValidator.initials}
          validationSchema={LoginValidator.validation}
          onSubmit={(values, actions) => {
            onClickLogin(values, actions);
          }}
        >
          {(props) => (
            <form onSubmit={props.handleSubmit} className="formSignup">
              <Paper
                elevation={3}
                sx={{
                  padding: "1rem",
                  height: "100%",
                  width: { xs: "100%", md: "50%" },
                }}
              >
                <Typography
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    fontSize: { xs: "1rem", md: "2rem" },
                    fontWeight: "700",
                  }}
                >
                  Welcome Back
                </Typography>
                <div className="d-flex flex-column widthAuth" id="email">
                  <TextField
                    fullWidth
                    label="email"
                    type="email"
                    value={props.values.email}
                    variant="standard"
                    onChange={(event) => {
                      props.setFieldValue("email", event.target.value);
                    }}
                  />
                  {props.errors.email && (
                    <span className="span-error">{props.errors.email}</span>
                  )}
                </div>
                <div className="d-flex flex-column widthAuth" id="password">
                  <TextField
                    fullWidth
                    label="Password"
                    type="password"
                    value={props.values.password}
                    variant="standard"
                    onChange={(event) => {
                      props.setFieldValue("password", event.target.value);
                    }}
                  />
                  {props.errors.password && (
                    <span className="span-error">{props.errors.password}</span>
                  )}
                </div>
                <div className="submit mt-3 d-flex justify-content-between">
                  <button type="submit" className="btn btn-primary">
                    Login
                  </button>
                  {/* <a
                className="pointer"
                // onClick={() => navigate(routeConstant.FORGETPASSWORD)}
              >
                &gt; Forgot password?
              </a> */}
                </div>
              </Paper>
            </form>
          )}
        </Formik>
      )}
    </>
  );
};

export default Login;
