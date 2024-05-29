import React from "react";
import { useSelector } from "react-redux";
import "./PurchaseSummary.css"; // Importa el archivo CSS

const PurchaseSummary = () => {
  const { items, totalItems, totalPrice } = useSelector((store) => store.cart);

  return (
    <div className="purchase-summary">
      <h3 style={{fontSize:"30px"}}>Purchase Resume</h3>
      <p className="summary-detail"><strong style={{fontSize:"20px"}}>Total:</strong> ${totalPrice}</p>
      <p className="summary-detail"><strong style={{fontSize:"20px"}}>Store:</strong> Ecommerce</p>
      <div className="product-description">
        <p><strong style={{fontSize:"20px"}}>Product Description:</strong></p>
        {items.map((p, i) => (
          <span key={p.item_id} className="product-item">
            {p.quantity} x {p.name}{i < totalItems - 1 ? ", " : ""}
          </span>
        ))}
      </div>
    </div>
  );
}

export default PurchaseSummary;

