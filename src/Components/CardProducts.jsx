import "./CardProducts.css";
import { useNavigate } from "react-router-dom";

const CardProducts = ({ product }) => {
  const navigate = useNavigate();

  return (
    <div
      className="card_product"
      onClick={() =>
        navigate(`/product/${product.item_id}`, { state: { product } })
      }
    >
      <img className="img-product" src={product.imageurl} alt={product.name} />
      <p className="name-product">{product.name}</p>
      <p className="price-product">{`$${product.price}.00`}</p>
    </div>
  );
};

export default CardProducts;
