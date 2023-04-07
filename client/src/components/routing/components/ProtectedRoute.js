import { Navigate } from "react-router-dom";
import { Routeconstant } from "../Routeconstant";
import { useSelector } from "react-redux";

const ProtectedRoute = (props) => {
  const { isAuthenticated } = useSelector((state) => state.userData);

  if (isAuthenticated) {
    return props.children;
  }
  return <Navigate to={Routeconstant.LOGIN} />;
};

export default ProtectedRoute;
