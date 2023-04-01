import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { LOCAL_STORAGE_KEY } from "../../../Config";
import { Routeconstant } from "../Routeconstant";

const CheckAdmin = (props) => {
  const Auth = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));

  if (Auth && Auth.isLoggesIn && Auth.role === "admin") {
    return props.children;
  }
  return <Navigate to={Routeconstant.HOME} />;
};

export default CheckAdmin;
