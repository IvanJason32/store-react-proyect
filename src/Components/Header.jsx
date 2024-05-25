// import { useLoginContext } from "../hooks/useLoginContext";
import { useEffect, useState } from "react";
import { useAuth } from "../hooks/useAuth";
import "./Header.css";
import { NavLink } from "react-router-dom";
import { useFetchCollection } from "../hooks/useFetchCollection";

const Header = () => {
  const { token, login, logout } = useAuth();
  const { data, isPending, error, getData } = useFetchCollection();
  const [uniqueTitles, setUniqueTitles] = useState([]);
  // console.log(token);

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (!isPending) {
      const titles = [...new Set(data.map((item) => item.title))];
      setUniqueTitles(titles);
    }
  }, [data, isPending]);

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
        {uniqueTitles
          ? uniqueTitles.map((element, index) => {
              return (
                  <NavLink
                  key={index}
                    to={`/categorias/${element}`}
                    className={`title-opc ${({ isActive }) =>
                      isActive ? "active" : ""}`}
                  >
                    {element}
                  </NavLink>
              );
            })
          : ""}
        
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
              color: "red",
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
