import { Navigate } from "react-router-dom";
import { Routeconstant } from "../Routeconstant";
import { useSelector } from "react-redux";

const PublicRoute = (props) => {
  const { data, isAuthenticated, loading, error } = useSelector(
    (state) => state.userData
  );

  if (isAuthenticated) {
    return <Navigate to={Routeconstant.HOME} />;
  }
  return props.children;
};

export default PublicRoute;
