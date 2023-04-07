import { useContext, useEffect } from "react";

import useFetch from "../../../customHooks/useFetch";
import { AuthContext } from "../../../store/store";

const ProtectedRoute = (props) => {
  const context = useContext(AuthContext);

  const { data, laoding, error } = useFetch({
    method: "get",
    url: "/api/v1/stripeapikey",
  });

  useEffect(() => {
    context.setStripeApiKey(data);
  }, [data]);

  return props.children;
};

export default ProtectedRoute;
