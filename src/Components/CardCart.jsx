import { useDispatch } from "react-redux";
import { addToCart, decreseToCart } from "../redux/slices/cartSlice";
import "./CardCart.css";

const CardCart = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div className="product-content">
      <div className="section-start">
        <div className="section-1">
          <img className="img-card-product" src={product.imageurl} alt="" />
        </div>
        <div className="section-2">
          <p className="t-nombre">{product.name}</p>
          <p className="t-precio">{`Unit Price: $${product.price}.00`}</p>
        </div>
      </div>

      <div className="section-3">
        <div className="section-cantidad">
          {/* <p className="t-cantidad">Quantity: </p> */}
          <button
            className="btn-cart"
            onClick={() => dispatch(decreseToCart(product.item_id))}
          >
            -
          </button>
          <p className="cantidad">{product.quantity}</p>
          <button
            className="btn-cart"
            onClick={() => dispatch(addToCart(product))}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardCart;
