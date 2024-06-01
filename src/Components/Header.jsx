import { useEffect, useState } from "react";
import { useAuth } from "../hooks/useAuth";
import "./Header.css";
import { NavLink } from "react-router-dom";
import { useFetchCollection } from "../hooks/useFetchCollection";
import { useSelector } from "react-redux";
import carritoImg from "../assets/carritoCompra.png";

const Header = () => {
  const { token, logout } = useAuth();
  const { data, isPending, getData } = useFetchCollection();
  const [uniqueTitles, setUniqueTitles] = useState([]);
  const { totalItems } = useSelector((store) => store.cart);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    <nav className="navbar">
      <div className="navbar-content">
      <div className="navbar-toggle" onClick={toggleMenu}>
        ☰
      </div>
      <div className={`navbar-opcions-deskopt ${isMenuOpen ? "open" : ""}`}>
        <NavLink
          to="/home"
          className={`title-opc ${({ isActive }) =>
            isActive ? "active" : ""}`}
        >
          Home
        </NavLink>
        <NavLink
          to="/categorias"
          className={`title-opc ${({ isActive }) =>
            isActive ? "active" : ""}`}
        >
          Categories
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
          <div className="cont-cart">
            <img className="img-carrito" src={carritoImg} alt="" />
            {totalItems !== 0 ? <div className="circul">{totalItems}</div> : ""}
          </div>
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
      <div className={`navbar-opcions-mobile ${isMenuOpen ? "open" : ""}`}>
        <NavLink
        onClick={() => setIsMenuOpen(false)}
          to="/home"
          className={`title-opc ${({ isActive }) =>
            isActive ? "active" : ""}`}
        >
          Home
        </NavLink>
        <NavLink
        onClick={() => setIsMenuOpen(false)}
          to="/categorias"
          className={`title-opc ${({ isActive }) =>
            isActive ? "active" : ""}`}
        >
          Categories
        </NavLink>
        {uniqueTitles
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
          : ""}
      </div>
      
    </nav>
  );
};

export default Header;

// import { useEffect, useState } from "react";
// import { useAuth } from "../hooks/useAuth";
// import "./Header.css";
// import { NavLink } from "react-router-dom";
// import { useFetchCollection } from "../hooks/useFetchCollection";
// import { useSelector } from "react-redux";
// import carritoImg from "../assets/carritoCompra.png";

// const Header = () => {
//   const { token, logout } = useAuth();
//   const { data, isPending, getData } = useFetchCollection();
//   const [uniqueTitles, setUniqueTitles] = useState([]);
//   const { totalItems } = useSelector((store) => store.cart);
//   console.log(totalItems);

//   useEffect(() => {
//     getData();
//   }, []);

//   useEffect(() => {
//     if (!isPending) {
//       const titles = [...new Set(data.map((item) => item.title))];
//       setUniqueTitles(titles);
//     }
//   }, [data, isPending]);

//   return (
//     <nav className="navbar">
//       <div className="navbar-opcions">
//         <NavLink
//           to="/home"
//           className={`title-opc ${({ isActive }) =>
//             isActive ? "active" : ""}`}
//         >
//           Home
//         </NavLink>
//         <NavLink
//           to="/categorias"
//           className={`title-opc ${({ isActive }) =>
//             isActive ? "active" : ""}`}
//         >
//           Categories
//         </NavLink>
//         {uniqueTitles
//           ? uniqueTitles.map((element, index) => {
//               return (
//                 <NavLink
//                   key={index}
//                   to={`/categorias/${element}`}
//                   className={`title-opc ${({ isActive }) =>
//                     isActive ? "active" : ""}`}
//                 >
//                   {element}
//                 </NavLink>
//               );
//             })
//           : ""}
//       </div>
//       <div className="loginRegister">
//         <NavLink
//           to="/carrito"
//           className={`title-opc ${({ isActive }) =>
//             isActive ? "active" : ""}`}
//         >
//           <div className="cont-cart">
//             <img className="img-carrito" src={carritoImg} alt="" />
//             {totalItems !== 0 ? <div className="circul">{totalItems}</div> : ""}
//           </div>
//         </NavLink>
//         {token ? (
//           <NavLink
//             onClick={logout}
//             style={{
//               color: "red",
//             }}
//             to="/login"
//             className={`title-opc ${({ isActive }) =>
//               isActive ? "active" : ""}`}
//           >
//             Logout
//           </NavLink>
//         ) : (
//           <NavLink
//             to="/login"
//             className={`title-opc ${({ isActive }) =>
//               isActive ? "active" : ""}`}
//           >
//             Login
//           </NavLink>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Header;
