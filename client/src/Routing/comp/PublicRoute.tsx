import React from "react";
import { Navigate } from "react-router-dom";

const PublicRoute = (props: any) => {
  const temp = JSON.parse(localStorage.getItem("mycapacitorappLogin")!);

  if (!temp?.uid) return <React.Fragment>{props.children}</React.Fragment>;

  return <Navigate to="/" />;
};

export default PublicRoute;
