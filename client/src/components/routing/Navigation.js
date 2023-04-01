import React, { useContext, useEffect } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { LOCAL_STORAGE_KEY } from "../../Config";
import { AuthContext } from "../../store/store";
import Layout from "../layout/Layout";
import Login from "../screens/auth/Login";
import SignUp from "../screens/auth/SignUp";
import CreatePost from "../screens/create/CreatePost";
import About from "../screens/about/about";
import Home from "../screens/home/Home";
import Users from "../screens/users/Users.js";
import Profile from "../screens/profile/Profile";
import ProtectedRoute from "./components/ProtectedRoute";
import PublicRoute from "./components/PublicRoute.js";
import { Routeconstant } from "./Routeconstant";
import CheckAdmin from "./components/CheckAdmin";

const Navigation = () => {
  return (
    <Routes>
      <Route path={Routeconstant.HOME} element={<Layout />}>
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
        <Route
          path={Routeconstant.USER}
          element={
            <CheckAdmin>
              <Users />
            </CheckAdmin>
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
          path={Routeconstant.LOGIN}
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route path={Routeconstant.HOME} element={<Home />} />
      </Route>
    </Routes>
  );
};

export default Navigation;
