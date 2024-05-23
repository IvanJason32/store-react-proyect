import React from "react";
import "./Header.css";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="navbar">
      <div className="navbar-opcions">
        <NavLink
          to="/home"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Home
        </NavLink>
        <NavLink
          to="/women"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Women
        </NavLink>
        <NavLink
          to="/men"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Men
        </NavLink>
        <NavLink
          to="/sneakers"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Sneakers
        </NavLink>
        <NavLink
          to="/jackets"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Jackets
        </NavLink>
      </div>
      <div className="loginRegister">
        <NavLink
          to="/carrito"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Carrito
        </NavLink>
        <NavLink
          to="/login"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Login
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
