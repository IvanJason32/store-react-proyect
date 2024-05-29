// import React from 'react';
import './CardProducts.css';
// import { Link } from 'react-router-dom';
// import { useSelectedProducts } from '../context/ProductContext';
import { useNavigate } from 'react-router-dom';


const CardProducts = ( {product} ) => {
  const navigate = useNavigate();
  // const { addSelectedProduct } = useSelectedProducts();
  // console.log(product)

  // const handleAddToCart = () => {
  //   addSelectedProduct(product);
  // };

  return (
    <div className='card_product' onClick={() => navigate(`/product/${product.item_id}`, { state: { product } })}>
        <img src={product.imageurl} alt={product.name} />
        <p>{product.name}</p>
        <p className='price-t'>{`$${product.price}.00`}</p>
    </div>
  );
};

export default CardProducts;
