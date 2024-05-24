import React from "react";
import { Link } from "react-router-dom";

const Carrito = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "10px", color: "white" }}>
      <h1>Carrito</h1>
      <Link to="/checkout" >Ir a pagar</Link>
    </div>
  );
};

export default Carrito;
