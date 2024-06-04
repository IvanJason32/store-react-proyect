// import React, { useState, useEffect } from 'react';
import { useLocation, useParams } from "react-router-dom";
// import { useSelectedProducts } from '../context/ProductContext';
import "./Producto.css";
// import "../Components/CardProducts.css";
import { useEffect, useState } from "react";
import { useFetchCollection } from "../hooks/useFetchCollection";
import CardProducts from "../Components/CardProducts";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/cartSlice";

const Producto = () => {
  const { data, isPending, getData } = useFetchCollection();
  const { productId } = useParams();
  const location = useLocation();
  const { product } = location.state || {};
  const [otherData, setOtherData] = useState([]);
  const [isP, setIsP] = useState(true);
  const dispatch = useDispatch();
  
  useEffect(() => {
    getData();

  }, []);

  useEffect(() => {
    if (!isPending) {
      setIsP(true);
      // console.log(data);
      const otherProducts = data.filter((item) => {
        if (item.title === product.title && item.item_id !== product.item_id) {
          return item;
        }
      });
      console.log(otherProducts)
      setOtherData(otherProducts);
      setIsP(false)
    }
  }, [isPending, productId]);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <section className="product-section">
      <div className="main-product-container">
        <div className="product-image-container">
          <img
            src={product.imageurl}
            alt={product.name}
            className="product-image"
          />
        </div>
        <div className="product-info-container">
          <p className="product-details-category">{product.title}</p>
          <h2 className="product-info-name">{product.name}</h2>
          <p className="product-price">Price: ${product.price}.00</p>
          <p className="product-description">Description</p>
          <p className="product-description-content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            possimus quae officia reiciendis voluptatum, ipsam veniam fugit
            aperiam sunt reprehenderit. Quos doloribus earum amet voluptatum
            ullam beatae reprehenderit saepe praesentium!
          </p>
          <button className="add-to-cart-button" onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
        </div>
      </div>
      <section className="section-products-container">
        <h1 className="section-products-title">More Products!</h1>
        <div className="container-cards">
        {!isP ? (
          otherData.map(product => {
            return <CardProducts
                  key={product.item_id}
                  product={product}
                />
          })
        ) : (
          <p>Cargando...</p>
        )}
        </div>
      </section>
    </section>
  );
};

export default Producto;
