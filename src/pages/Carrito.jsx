// import { useSelectedProducts } from "../context/ProductContext";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./Carrito.css";
import CardCart from "../Components/CardCart";

const Carrito = () => {
  const navigate = useNavigate();
  // const { selectedProducts } = useSelectedProducts();
  const { items, totalItems, totalPrice } = useSelector((store) => store.cart);
  
  console.log(items);

  return (
    <section>
      <div className="cart-container">
        <h1 className="cart-title">Carrito</h1>
        {totalItems === 0 ? (
          <p style={{ color: "white" }}>El carrito esta vacio </p>
        ) : (
          <>
            <div className="cart-content">
              {items.map((product) => {
                return (
                  <CardCart key={product.item_id}
                  product={product} />
                );
              })}
            </div>
            <div className="botton-section">
            <button className="btnPagar" onClick={() => navigate("/checkout")}>
              Pagar
            </button>
            <p className="total-price">{`Precio total: $${totalPrice}.00`}</p>
            </div>
            
          </>
        )}
      </div>
    </section>
  );
};

export default Carrito;
