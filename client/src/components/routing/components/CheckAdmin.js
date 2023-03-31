import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { LOCAL_STORAGE_KEY } from "../../../Config";
import { AuthContext } from "../../../store/store";
import { Routeconstant } from "../Routeconstant";

const CheckAdmin = (props) => {
  const context = useContext(AuthContext);
  console.log(context);
  if (context.userData.role === "admin") {
    return props.children;
  }
  return <Navigate to={Routeconstant.HOME} />;
};

export default CheckAdmin;
