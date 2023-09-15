import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRouting = ({ children }) => {
  const isAuthenticated = useSelector((state) => state.auth.isLoggedIn);

  return isAuthenticated ? <>{children} </> : <Navigate to="/login" />;
};

export default PrivateRouting;
