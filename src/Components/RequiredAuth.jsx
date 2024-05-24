// import React from 'react'
import { Navigate, redirect } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const RequiredAuth = ({ children }) => {
  const { token } = useAuth();
  if (!token) {
    return <Navigate to="/login" replace={true} />;
  }
  return <>{children}</>;
};

export default RequiredAuth;
