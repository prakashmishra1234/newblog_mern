import { Paper, TextField, Typography } from "@mui/material";
import { Formik } from "formik";
import { Link } from "react-router-dom";
import { LoginValidator } from "../../../helper/helper";
import { Routeconstant } from "../../routing/Routeconstant";
import { useDispatch, useSelector } from "react-redux";
import CustomBackdrop from "../../common/CustomBackdrop";
import { userLogin } from "../../../store/redux/actions/UserAction";

const Login = () => {
  const dispatch = useDispatch();

  const onClickLogin = (value) => {
    const body = {
      email: value.email,
      password: value.password,
    };
    dispatch(userLogin(body));
  };

  const { loading } = useSelector((state) => state.userData);

  return (
    <>
      {loading ? (
        <CustomBackdrop loading={loading} />
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
                  <Typography style={{ display: "flex", alignItems: "center" }}>
                    Dont have account?{" "}
                    <Link to={Routeconstant.SIGNUP}> Sign Up</Link>
                  </Typography>
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
