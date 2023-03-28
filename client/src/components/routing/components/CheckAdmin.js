import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../../store/store";
import { Routeconstant } from "../Routeconstant";

const CheckAdmin = (props) => {
  const Auth = useContext(AuthContext);
  console.log(Auth.userData);
  if (Auth.isLogin && Auth.userData.role === "admin") {
    return props.children;
  }
  return <Navigate to={Routeconstant.HOME} />;
};

export default CheckAdmin;
