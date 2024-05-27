import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelectedProducts } from '../context/ProductContext';
import "./ProductoStyles.css";
import "../Components/CardProducts.css"; 

const Producto = () => {
  const { productId } = useParams();
  const { selectedProducts, addToCart } = useSelectedProducts();

  const initialProduct = selectedProducts.find((product) => String(product.item_id) === String(productId));

  const [mainProduct, setMainProduct] = useState(initialProduct);
  const [otherProducts, setOtherProducts] = useState(selectedProducts.filter((product) => String(product.item_id) !== String(productId)));

  useEffect(() => {
    setMainProduct(initialProduct);
    setOtherProducts(selectedProducts.filter((product) => String(product.item_id) !== String(productId)));
  }, [initialProduct, selectedProducts]);

  const handleProductClick = (clickedProduct) => {
    setOtherProducts((prevOtherProducts) => {
      const newOtherProducts = prevOtherProducts.filter((product) => product.item_id !== clickedProduct.item_id);
      newOtherProducts.push(mainProduct);
      return newOtherProducts;
    });
    setMainProduct(clickedProduct);
  };

  const handleAddToCart = () => {
    addToCart(mainProduct);
  };

  if (!mainProduct) {
    return <p>No se encontraron productos.</p>;
  }

  return (
    <section className="product-section">
      <div className="main-product-container">
        <div className="product-image-container">
          <img src={mainProduct.imageurl} alt={mainProduct.name} className="product-image" />
        </div>
        <div className="product-info-container">
          <p className='product-details-category'>{mainProduct.title}</p>
          <h2 className='product-info-name'>{mainProduct.name}</h2>
          <p className="product-price">Precio: ${mainProduct.price}</p>
          <p className="product-description">Descripción</p>
          <p className='product-description-content'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium possimus quae officia reiciendis voluptatum, ipsam veniam fugit aperiam sunt reprehenderit. Quos doloribus earum amet voluptatum ullam beatae reprehenderit saepe praesentium!
          </p>
          <button onClick={handleAddToCart} className="add-to-cart-button">Añadir al carrito</button>
        </div>
      </div>
      <section className="section-products-container">
        <h1 className='section-products-title'>Otros Productos</h1>
        <div className="container-cards">
          {otherProducts.map((product) => (
            <div key={product.item_id} className="card_product" onClick={() => handleProductClick(product)}>
              <img src={product.imageurl} alt={product.name} />
              <p>{product.name}</p>
              <p>{`$${product.price}.00`}</p>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
};

export default Producto;
