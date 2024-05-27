import React from 'react';
import './CardProducts.css';
import { Link } from 'react-router-dom';
import { useSelectedProducts } from '../context/ProductContext';

const CardProducts = ({ img, name, price, productId, product }) => {
  const { addSelectedProduct } = useSelectedProducts();
  console.log(product)

  const handleAddToCart = () => {
    addSelectedProduct(product);
  };

  return (
    <div className='card_product' onClick={handleAddToCart}>
      <Link className="card-categoria" to={`/products/${productId}`}>
        <img src={img} alt={name} />
        <p>{name}</p>
        <p>{`$${price}.00`}</p>
        {/* <button onClick={handleAddToCart}>Add to Cart</button>  */}
      </Link>
    </div>
  );
};

export default CardProducts;
