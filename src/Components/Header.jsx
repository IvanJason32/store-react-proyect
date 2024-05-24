// import { useLoginContext } from "../hooks/useLoginContext";
import { useAuth } from "../hooks/useAuth";
import "./Header.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  const { token, login, logout } = useAuth();
  console.log(token);

  return (
    <div className="navbar">
      <div className="navbar-opcions">
        <NavLink
          to="/home"
          className={`title-opc ${({ isActive }) =>
            isActive ? "active" : ""}`}
        >
          Home
        </NavLink>
        <NavLink
          to="/women"
          className={`title-opc ${({ isActive }) =>
            isActive ? "active" : ""}`}
        >
          Women
        </NavLink>
        <NavLink
          to="/men"
          className={`title-opc ${({ isActive }) =>
            isActive ? "active" : ""}`}
        >
          Men
        </NavLink>
        <NavLink
          to="/hats"
          className={`title-opc ${({ isActive }) =>
            isActive ? "active" : ""}`}
        >
          Hats
        </NavLink>
        <NavLink
          to="/sneakers"
          className={`title-opc ${({ isActive }) =>
            isActive ? "active" : ""}`}
        >
          Sneakers
        </NavLink>
        <NavLink
          to="/jackets"
          className={`title-opc ${({ isActive }) =>
            isActive ? "active" : ""}`}
        >
          Jackets
        </NavLink>
      </div>
      <div className="loginRegister">
        <NavLink
          to="/carrito"
          className={`title-opc ${({ isActive }) =>
            isActive ? "active" : ""}`}
        >
          Carrito
        </NavLink>
        {token ? (
          <NavLink
            onClick={logout}
            style={{
              color: "red"
            }}
            to="/login"
            className={`title-opc ${({ isActive }) =>
              isActive ? "active" : ""}`}
          >
            Logout
          </NavLink>
        ) : (
          <NavLink
            to="/login"
            className={`title-opc ${({ isActive }) =>
              isActive ? "active" : ""}`}
          >
            Login
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Header;