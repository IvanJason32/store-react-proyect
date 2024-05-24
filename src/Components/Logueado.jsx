// import React from 'react'
import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const Logueado = ({ children }) => {
  const { token } = useAuth();
  if (token) {
    return <Navigate to="/home" replace={true} />;
  }
  return <>{children}</>;
};

export default Logueado;
