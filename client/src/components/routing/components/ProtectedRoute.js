import React, { useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { LOCAL_STORAGE_KEY } from "../../../Config";
import { Routeconstant } from "../Routeconstant";
import useFetch from "../../../customHooks/useFetch";
import { AuthContext } from "../../../store/store";

const ProtectedRoute = (props) => {
  const Auth = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  const context = useContext(AuthContext);

  const { data, laoding, error } = useFetch({
    method: "get",
    url: "/api/v1/stripeapikey",
  });

  useEffect(() => {
    context.setStripeApiKey(data);
  }, [data]);

  if (Auth && Auth.isLoggesIn) {
    return props.children;
  }
  return <Navigate to={Routeconstant.LOGIN} />;
};

export default ProtectedRoute;
