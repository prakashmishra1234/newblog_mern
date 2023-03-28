import { Avatar, Grid, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import { Formik } from "formik";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import instance from "../../../api/Interceptor";
import { LOCAL_STORAGE_KEY } from "../../../Config";
import { SignupValidator } from "../../../helper/helper";
import { AuthContext } from "../../../store/store";
import { Routeconstant } from "../../routing/Routeconstant";
import AuthBackdrop from "./AuthBackdrop";

const SignUp = () => {
  const context = useContext(AuthContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const onClickSignUp = (value) => {
    setLoading(true);
    const body = {
      name: value.name,
      email: value.email,
      password: value.password,
      avatar: value.avatar,
    };
    axios
      .post("/api/v1/register", body)
      .then((res) => {
        localStorage.setItem(
          LOCAL_STORAGE_KEY,
          JSON.stringify({ isLoggesIn: true })
        );
        context.setIslogin(true);
        navigate(Routeconstant.HOME);
      })
      .catch((err) => {
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
        <div className="container-form d-flex justify-content-center h-100 align-items-center">
          <Formik
            initialValues={SignupValidator.initials}
            validationSchema={SignupValidator.validation}
            onSubmit={(values, actions) => {
              onClickSignUp(values, actions);
            }}
          >
            {(props) => (
              <form onSubmit={props.handleSubmit} className="formSignup">
                <Typography
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    fontSize: { xs: "1rem", md: "2rem" },
                    fontWeight: "700",
                  }}
                >
                  Welcome
                </Typography>
                <div className="d-flex mt-3 " id="avatar">
                  <Avatar
                    style={{
                      height: "2.5rem",
                      width: "2.5rem",
                      marginRight: "1rem",
                    }}
                    alt="user"
                    src={props.values.avatar}
                  />
                  <input
                    className="form-control"
                    type="file"
                    id="formFile"
                    accept="image/*"
                    onChange={(e) => {
                      const reader = new FileReader();
                      reader.onload = () => {
                        if (reader.readyState === 2) {
                          props.setFieldValue("avatar", reader.result);
                        }
                      };
                      reader.readAsDataURL(e.target.files[0]);
                    }}
                  />

                  {props.errors.avatar && (
                    <span className="span-error">{props.errors.avatar}</span>
                  )}
                </div>
                <div className="d-flex flex-column " id="name">
                  <TextField
                    fullWidth
                    label="Full Name"
                    value={props.values.name}
                    variant="standard"
                    onChange={(event) => {
                      props.setFieldValue("name", event.target.value);
                    }}
                  />
                  {props.errors.name && (
                    <span className="span-error">{props.errors.email}</span>
                  )}
                </div>
                <div className="d-flex flex-column" id="email">
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
                <div className="d-flex flex-column" id="password">
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
                    SignUp
                  </button>
                  {/* <a
                className="pointer"
                // onClick={() => navigate(routeConstant.FORGETPASSWORD)}
              >
                &gt; Forgot password?
              </a> */}
                </div>
              </form>
            )}
          </Formik>
        </div>
      )}
    </>
  );
};

export default SignUp;
