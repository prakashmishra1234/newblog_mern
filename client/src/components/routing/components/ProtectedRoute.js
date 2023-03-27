import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../../store/store";
import { Routeconstant } from "../Routeconstant";

const ProtectedRoute = (props) => {
  const Auth = useContext(AuthContext);

  if (!Auth.isLogin) {
    return <Navigate to={Routeconstant.LOGIN} replace={true} />;
  }
  return props.children;
};

export default ProtectedRoute;
