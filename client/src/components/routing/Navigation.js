import React, { useContext, useEffect, useState } from "react";
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
import FreeRoute from "./components/FreeRoute";
import { Routeconstant } from "./Routeconstant";
import CheckAdmin from "./components/CheckAdmin";
import PostDetails from "../screens/postDetails/PostDetails";
import Payment from "../screens/payment/Payment";
import { Elements } from "@stripe/react-stripe-js";
import axios from "axios";
import { loadStripe } from "@stripe/stripe-js/pure";
loadStripe.setLoadParameters({ advancedFraudSignals: false });

const Navigation = () => {
  const context = useContext(AuthContext);

  return (
    <>
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
          {context.stripeApiKey ? (
            <Route
              path={Routeconstant.DONATE}
              element={
                <ProtectedRoute>
                  <Elements stripe={loadStripe(context.stripeApiKey)}>
                    <Payment />
                  </Elements>
                </ProtectedRoute>
              }
            />
          ) : null}
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
            path={Routeconstant.POST_DETAILS}
            element={
              <ProtectedRoute>
                <PostDetails />
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
          <Route
            path={Routeconstant.HOME}
            element={
              <FreeRoute>
                <Home />
              </FreeRoute>
            }
          />
        </Route>
      </Routes>
    </>
  );
};

export default Navigation;
