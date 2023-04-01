import React, { useContext, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import { AuthContext } from "../../store/store";
import axios from "axios";
import { LOCAL_STORAGE_KEY } from "../../Config";

const Layout = () => {
  const context = useContext(AuthContext);
  const Auth = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));

  useEffect(() => {
    if (Auth && Auth.isLoggesIn) {
      context.setIslogin(true);
      getUserData();
    }
  }, []);

  const getUserData = () => {
    axios
      .get("/api/v1/me")
      .then((res) => {
        context.setUserData(res.data?.user ?? {});
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div style={{ height: "100%" }}>
      <div style={{ height: "4rem" }}>
        <Header />
      </div>

      <div
        style={{
          height: "calc(100% - 4rem)",
          padding: "1rem",
          overflowY: "auto",
        }}
      >
        <div className="container">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
