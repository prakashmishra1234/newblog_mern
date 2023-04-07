import React, { useState, createContext } from "react";
const AuthContext = createContext();

function AuthProvider(props) {
  const [isLogin, setIslogin] = useState(false);
  const [userData, setUserData] = useState({});
  const [stripeApiKey, setStripeApiKey] = useState("");

  return (
    <AuthContext.Provider
      value={{
        isLogin,
        userData,
        stripeApiKey,
        setStripeApiKey,
        setUserData,
        setIslogin,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

export { AuthProvider, AuthContext };
