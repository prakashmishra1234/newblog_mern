import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Main from "../Pages/Main";
import Profile from "../Pages/Profile";
import About from "../Pages/About";
import ProtectedRoute from "./comp/ProtectedRoute";
import PublicRoute from "./comp/PublicRoute";
import { AuthContext } from "../Store";
import Auth from "../Pages/Auth";

const Navigation = () => {
  const context = React.useContext(AuthContext);
  const { setTheme } = context;

  React.useEffect(() => {
    const mode = JSON.parse(localStorage.getItem("mycapacitorapptheme")!);
    const loginData = JSON.parse(localStorage.getItem("mycapacitorappLogin")!);
    setTheme(mode?.theme ?? "light");
  }, []);

  return (
    <Routes>
      <Route
        path="/auth"
        element={
          <PublicRoute>
            <Auth />
          </PublicRoute>
        }
      />
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Main />
          </ProtectedRoute>
        }
      >
        <Route path="" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
      </Route>
    </Routes>
  );
};

export default Navigation;
