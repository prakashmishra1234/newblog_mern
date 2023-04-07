import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { LOCAL_STORAGE_KEY } from "../../../Config";
import { Routeconstant } from "../Routeconstant";
import { useSelector } from "react-redux";
const CheckAdmin = (props) => {
  const { data, isAuthenticated, loading, error } = useSelector(
    (state) => state.userData
  );

  if (isAuthenticated && data.role && data.role === "admin") {
    return props.children;
  }
  return <Navigate to={Routeconstant.HOME} />;
};

export default CheckAdmin;
