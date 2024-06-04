// import React from 'react'
import { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import useRegisterPost from "../hooks/useRegisterPost";
import { Navigate } from "react-router-dom";
import "./Register.css";
import imgCorreo from "../assets/correo.png";
import imgPassword from "../assets/contrasena.png";
import imgUsuario from "../assets/avatar.png";

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
    <div className="contRegister">
      <div className="element-register">
        <div className="cover-elements-register">
          <h1 className="title-register">Register</h1>
          <form className="form-register" onSubmit={handleSubmit}>
            <div className="username-form-register">
              <div className="cont-img-register">
                <img className="ico-input-register" src={imgUsuario} alt="" />
              </div>
              <input
                className="username-input-register"
                type="text"
                placeholder="Username..."
                id="display-name"
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
              />
            </div>

            <div className="email-form-register">
              <div className="cont-img-register">
                <img className="ico-input-register" src={imgCorreo} alt="" />
              </div>
              <input
                className="email-input-register"
                type="email"
                placeholder="Email..."
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="password-form-register">
              <div className="cont-img-register">
                <img className="ico-input-register" src={imgPassword} alt="" />
              </div>
              <input
                className="password-input-register"
                type="password"
                placeholder="Password..."
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button className="btn-register" disabled={loading ? true : false}>
              {loading ? "Registering user..." : "Sign Up"}
            </button>
          </form>
        </div>
      </div> 
      
      {error && <p style={{ color: "red" }}>There is an error</p>}
      {redirect && <Navigate to="/home" replace={true} />}
      {warning && <p style={{ color: "red" }}>{warning}</p>}
    </div>
  );
};

export default Register;
