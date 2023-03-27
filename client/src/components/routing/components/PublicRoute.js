import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../../store/store";
import { Routeconstant } from "../Routeconstant";

function PublicRoute(props) {
  const Auth = useContext(AuthContext);

  if (!Auth.isLogin) {
    return props.children;
  }
  return <Navigate to={Routeconstant.HOME} replace={true} />;
}

export default PublicRoute;
