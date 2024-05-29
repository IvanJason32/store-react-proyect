// import React from 'react'
import { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import useRegisterPost from "../hooks/useRegisterPost";
import { Navigate } from "react-router-dom";
import './Register.css'

const Register = () => {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [warning, setWarning] = useState("");
  const { registerUser, loading, error } = useRegisterPost();
  const [redirect, setRedirect] = useState(false);
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email === "" || password === "" || displayName === "") {
      setWarning("Todos los campos son obligatorios");
    } else {
      const data = await registerUser(displayName, email, password);
      if (data) {
        const userData = {
          token: data,
          email,
        };
        login(userData);
        setRedirect(true);
      }
    }
  };

  return (
    <div className="contRegister" style={{ textAlign: "center", marginTop: "10px", color: "white" }}>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <div className="username-form">
          <label htmlFor="display-name">DisplayName: </label>
          <input
            type="text"
            id="display-name"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
          />
        </div>
        <div className="email-form">
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="password-form">
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="btn-register" disabled={loading ? true : false}>
          {loading ? "Registrando usuario..." : "Registrar usuarios"}
        </button>
      </form>
      {error && <p style={{ color: "red" }}>Ocurrio un error</p>}
      {redirect && <Navigate to="/home" replace={true} />}
      {warning && <p style={{ color: "red" }}>{warning}</p>}
    </div>
  );
};

export default Register;
