import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import useLoginPost from "../hooks/useLoginPost";
import { useAuth } from "../hooks/useAuth";
import "./Login.css";
import imgAvatar from "../assets/avatar.png";
import imgPassword from "../assets/contrasena.png";

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
        email,
      };
      login(userData);
      setRedirect(true);
    }
  };

  return (
    <div className="contLogin">
      <div className="element-login">
        <div className="cover-elements">
          <h1 className="title-login">Login</h1>
          <form className="form-login" onSubmit={handleSubmit}>
            <div className="email-form">
              <img className="ico-input" src={imgAvatar} alt="" />
              <input
                className="email-input"
                type="text"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="password-form">
              <img className="ico-input" src={imgPassword} alt="" />
              <input
                className="pass-input"
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <p className="text-sing-up">
              ¿You're not registered?{" "}
              <Link style={{ color: "white" }} to="/register">
                Sign Up
              </Link>
            </p>
            <button className="btn-login" disabled={loading ? true : false}>
              {loading ? "LOADING..." : "LOGIN"}
            </button>
          </form>

          {error && <p className="text-error">User not Found</p>}
        </div>
      </div>
      {/* 
      

      {redirect && <Navigate to="/home" replace={true} />} */}
    </div>
  );
};

export default Login;
