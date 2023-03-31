import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { LOCAL_STORAGE_KEY } from "../../../Config";
import { AuthContext } from "../../../store/store";
import { Routeconstant } from "../Routeconstant";

const ProtectedRoute = (props) => {
  const context = useContext(AuthContext);
  const Auth = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));

  if (Auth && Auth.isLoggesIn) {
    context.setIslogin(true);
  }
  if (Auth && Auth.isLoggesIn) {
    return props.children;
  }
  return <Navigate to={Routeconstant.LOGIN} />;
};

export default ProtectedRoute;
