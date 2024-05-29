import { useDispatch } from "react-redux";
import { addToCart, decreseToCart } from "../redux/slices/cartSlice";
import './CardCart.css'

const CardCart = ({product}) => {
    const dispatch = useDispatch();

  return (
    <div className="product-content">
      <div className="section-1">
        <img className="img-card-product" src={product.imageurl} alt="" />
      </div>
      <div className="section-2">
        <p>{product.name}</p>
        <p>{`Precio por unidad: $${product.price}.00`}</p>
        <div className="section-cantidad">
          <p>Cantidad: </p>
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
