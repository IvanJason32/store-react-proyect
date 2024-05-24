// import React from 'react'

import { Link } from "react-router-dom";

const Checkout = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "10px", color: "white" }}>
      <h1>Checkout</h1>
      <Link to="/succes">Realizar Compra</Link>
    </div>
  );
};

export default Checkout;
