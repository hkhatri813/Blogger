import React from "react";
import { useAuth } from "./authContext";
import { Navigate } from "react-router-dom";

function AuthRoute({ children }) {
  const { currentUser } = useAuth();
  return currentUser ? children : <Navigate to="/" />;
}

export default AuthRoute;
