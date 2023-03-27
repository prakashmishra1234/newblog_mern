import React, { useState, createContext } from "react";
const AuthContext = createContext();

function AuthProvider(props) {
  const [isLogin, setIslogin] = useState(false);
  const [userData, setUserData] = useState({});

  return (
    <AuthContext.Provider
      value={{
        isLogin,
        userData,
        setUserData,
        setIslogin,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

export { AuthProvider, AuthContext };
