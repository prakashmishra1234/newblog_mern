import { Avatar, Paper, TextField, Typography } from "@mui/material";
import { Formik } from "formik";
import { Link } from "react-router-dom";
import { SignupValidator } from "../../../helper/helper";
import { Routeconstant } from "../../routing/Routeconstant";
import CustomBackdrop from "../../common/CustomBackdrop";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../../store/redux/actions/UserAction";

const SignUp = () => {
  const dispatch = useDispatch();
  const onClickSignUp = (value) => {
    const body = {
      name: value.name,
      email: value.email,
      password: value.password,
      avatar: value.avatar,
    };
    dispatch(registerUser(body));
  };

  const { loading } = useSelector((state) => state.userData);

  return (
    <>
      {loading ? (
        <CustomBackdrop loading={loading} />
      ) : (
        <Formik
          initialValues={SignupValidator.initials}
          validationSchema={SignupValidator.validation}
          onSubmit={(values, actions) => {
            onClickSignUp(values, actions);
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
                  Welcome
                </Typography>
                <div className="d-flex flex-column mt-3 widthAuth" id="avatar">
                  <div className="d-flex">
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
                  </div>
                  <div>
                    {props.errors.avatar && (
                      <span className="span-error">{props.errors.avatar}</span>
                    )}
                  </div>
                </div>
                <div className="d-flex flex-column widthAuth" id="name">
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
                    SignUp
                  </button>
                  <Typography style={{ display: "flex", alignItems: "center" }}>
                    Already registered?{" "}
                    <Link to={Routeconstant.LOGIN}>Login</Link>
                  </Typography>
                </div>
                {/* <a
                className="pointer"
                // onClick={() => navigate(routeConstant.FORGETPASSWORD)}
              >
                &gt; Forgot password?
              </a> */}
              </Paper>
            </form>
          )}
        </Formik>
      )}
    </>
  );
};

export default SignUp;
