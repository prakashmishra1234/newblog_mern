import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";

const Layout = () => {
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
