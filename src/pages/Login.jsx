import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import useLoginPost from "../hooks/useLoginPost";
import { useAuth } from "../hooks/useAuth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { loginDo, loading, error } = useLoginPost();
  const [redirect, setRedirect] = useState(false); 
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await loginDo(email, password);
    if (data) {
      const userData = {
        token: data,
        email
      }
      login(userData);
      setRedirect(true);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "10px", color: "white" }}>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="email-form">
          <label htmlFor="email">Correo electronico:</label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="password-form">
          <label htmlFor="password">Constraseña:</label>
          <input
            type="text"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="btn-login" disabled={loading ? true : false}>
          {loading ? "Iniciando sesión..." : "Iniciar sesión"}
        </button>
      </form>
      {error && <p style={{ color: "red" }}>Usuario no encontrado</p>}
      <p>
        ¿No estas registrado?{" "}
        <Link style={{ color: "white" }} to="/register">
          Registrate
        </Link>
      </p>

      {redirect && <Navigate to="/home" replace={true} />}
    </div>
  );
};

export default Login;
