import React, { useContext, useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { LOCAL_STORAGE_KEY } from "../../Config";
import { AuthContext } from "../../store/store";
import Layout from "../layout/Layout";
import Login from "../screens/auth/Login";
import SignUp from "../screens/auth/SignUp";
import CreatePost from "../screens/create/CreatePost";
import About from "../screens/about/about";
import Home from "../screens/home/Home";
import Profile from "../screens/profile/Profile";
import ProtectedRoute from "./components/ProtectedRoute";
import PublicRoute from "./components/PublicRoute.js";
import { Routeconstant } from "./Routeconstant";

const Navigation = () => {
  const context = useContext(AuthContext);
  useEffect(() => {
    const Auth = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (Auth && Auth.isLoggesIn) {
      context.setIslogin(true);
    }
  }, []);

  return (
    <Routes>
      <Route path={Routeconstant.HOME} element={<Layout />}>
        <Route path={Routeconstant.HOME} element={<Home />} />
        <Route
          path={Routeconstant.LOGIN}
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path={Routeconstant.SIGNUP}
          element={
            <PublicRoute>
              <SignUp />
            </PublicRoute>
          }
        />
        <Route
          path={Routeconstant.CREATE}
          element={
            <ProtectedRoute>
              <CreatePost />
            </ProtectedRoute>
          }
        />
        <Route
          path={Routeconstant.PROFILE}
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route
          path={Routeconstant.ABOUT}
          element={
            <ProtectedRoute>
              <About />
            </ProtectedRoute>
          }
        />
      </Route>
    </Routes>
  );
};

export default Navigation;
