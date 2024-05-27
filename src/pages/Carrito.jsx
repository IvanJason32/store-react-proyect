import React from "react";
import { Link } from "react-router-dom";
import { useSelectedProducts } from '../context/ProductContext';

const Carrito = () => {
  const { selectedProducts } = useSelectedProducts();
  return (
    <div style={{ textAlign: "center", marginTop: "10px", color: "white" }}>
      <h1>Carrito</h1>
      <ul>
        {selectedProducts.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}
          </li>
        ))}
      </ul>
      <Link to="/checkout" >Ir a pagar</Link>
    </div>
  );
};

export default Carrito;
