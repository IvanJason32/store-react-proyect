import { useEffect, useState, createContext, useContext } from "react";
import { useAuth } from "../hooks/useAuth";
import "./Header.css";
import { NavLink } from "react-router-dom";
import { useFetchCollection } from "../hooks/useFetchCollection";
import { useSelector } from "react-redux";
import carritoImg from "../assets/carritoCompra.png";

export const NavbarContext = createContext();

const Header = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { token, logout } = useAuth();
  const { data, isPending, getData } = useFetchCollection();
  const [uniqueTitles, setUniqueTitles] = useState([]);
  const { totalItems } = useSelector((store) => store.cart);

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (!isPending) {
      const titles = [...new Set(data.map((item) => item.title))];
      setUniqueTitles(titles);
    }
  }, [data, isPending]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <NavbarContext.Provider
      value={{
        isMenuOpen,
        toggleMenu,
        token,
        logout,
        uniqueTitles,
        totalItems,
        setIsMenuOpen,
      }}
    >
      <nav className="navbar">{children}</nav>
    </NavbarContext.Provider>
  );
};

const Content = ({ children }) => {
  return <div className="navbar-content">{children}</div>;
};

const Toggle = () => {
  const { toggleMenu } = useContext(NavbarContext);
  return (
    <div className="navbar-toggle" onClick={toggleMenu}>
      ☰
    </div>
  );
};

const DesktopOptions = ({ children }) => {
  return <div className="navbar-opcions-deskopt">{children}</div>;
};

const MobileOptions = ({ children }) => {
  const { isMenuOpen } = useContext(NavbarContext);
  return (
    <div className={`navbar-opcions-mobile ${isMenuOpen ? "open" : ""}`}>
      {children}
    </div>
  );
};

const NavBarOpctions = ({ to, children, onClick }) => {
  return (
    <NavLink
      to={to}
      onClick={onClick}
      className={`title-opc ${({ isActive }) => (isActive ? "active" : "")}`}
    >
      {children}
    </NavLink>
  );
};

const NavBarOpctionsMobile = ({ to, children, onClick }) => {
  const { setIsMenuOpen } = useContext(NavbarContext);
  return (
    <NavLink
      to={to}
      onClick={() => setIsMenuOpen(false)}
      className={`title-opc ${({ isActive }) => (isActive ? "active" : "")}`}
    >
      {children}
    </NavLink>
  );
};

const NavBarOpcCategorys = () => {
  const { uniqueTitles } = useContext(NavbarContext);
  return uniqueTitles
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
    : "";
};

const NavBarOpcCategorysMobile = () => {
  const { uniqueTitles, setIsMenuOpen } = useContext(NavbarContext);
  return uniqueTitles
    ? uniqueTitles.map((element, index) => {
        return (
          <NavLink
            onClick={() => setIsMenuOpen(false)}
            key={index}
            to={`/categorias/${element}`}
            className={`title-opc ${({ isActive }) =>
              isActive ? "active" : ""}`}
          >
            {element}
          </NavLink>
        );
      })
    : "";
};

const Cart = () => {
  const { totalItems } = useContext(NavbarContext);
  return (
    <NavLink
      to="/carrito"
      className={`title-opc ${({ isActive }) => (isActive ? "active" : "")}`}
    >
      <div className="cont-cart">
        <img className="img-carrito" src={carritoImg} alt="" />
        {totalItems !== 0 ? <div className="circul">{totalItems}</div> : ""}
      </div>
    </NavLink>
  );
};

const AuthLink = () => {
  const { token, logout } = useContext(NavbarContext);
  return token ? (
    <NavLink
      onClick={logout}
      style={{
        color: "red",
      }}
      to="/login"
      className={`title-opc ${({ isActive }) => (isActive ? "active" : "")}`}
    >
      Logout
    </NavLink>
  ) : (
    <NavLink
      to="/login"
      className={`title-opc ${({ isActive }) => (isActive ? "active" : "")}`}
    >
      Login
    </NavLink>
  );
};

const NavLoginSeccion = ({ children }) => {
  return <div className="loginRegister">{children}</div>;
};

Header.Content = Content;
Header.Toggle = Toggle;
Header.DesktopOptions = DesktopOptions;
Header.MobileOptions = MobileOptions;
Header.NavBarOpctions = NavBarOpctions;
Header.NavBarOpcCategorys = NavBarOpcCategorys;
Header.Cart = Cart;
Header.AuthLink = AuthLink;
Header.NavLoginSeccion = NavLoginSeccion;
Header.NavBarOpcCategorysMobile = NavBarOpcCategorysMobile;
Header.NavBarOpctionsMobile = NavBarOpctionsMobile;

export default Header;
