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
  
  // console.log(id)
  // const { selectedProducts, addToCart } = useSelectedProducts();

  // const initialProduct = selectedProducts.find((product) => String(product.item_id) === String(productId));

  // const [mainProduct, setMainProduct] = useState(initialProduct);
  // const [otherProducts, setOtherProducts] = useState(selectedProducts.filter((product) => String(product.item_id) !== String(productId)));

  useEffect(() => {
    getData();
    // setMainProduct(initialProduct);
    // setOtherProducts(selectedProducts.filter((product) => String(product.item_id) !== String(productId)));
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

  // const handleProductClick = (clickedProduct) => {
  //   setOtherProducts((prevOtherProducts) => {
  //     const newOtherProducts = prevOtherProducts.filter((product) => product.item_id !== clickedProduct.item_id);
  //     newOtherProducts.push(mainProduct);
  //     return newOtherProducts;
  //   });
  //   setMainProduct(clickedProduct);
  // };

  // const handleAddToCart = () => {
  //   addToCart(mainProduct);
  // };

  // if (!mainProduct) {
  //   return <p>No se encontraron productos.</p>;
  // }
  if (!product) {
    return <div>Producto no encontrado</div>;
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
          <p className="product-price">Precio: ${product.price}.00</p>
          <p className="product-description">Descripción</p>
          <p className="product-description-content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            possimus quae officia reiciendis voluptatum, ipsam veniam fugit
            aperiam sunt reprehenderit. Quos doloribus earum amet voluptatum
            ullam beatae reprehenderit saepe praesentium!
          </p>
          <button className="add-to-cart-button" onClick={() => dispatch(addToCart(product))}>Añadir al carrito</button>
        </div>
      </div>
      <section className="section-products-container">
        <h1 className="section-products-title">Otros Productos</h1>
        <div className="container-cards">
        {!isP ? (
          otherData.map(product => {
            return <CardProducts
                  key={product.item_id}
                  // productId={product.item_id}
                  // name={product.name}
                  // price={product.price}
                  // img={product.imageurl}
                  product={product}
                  // onAddToCart={() => addSelectedProduct(product)} // Agregar producto al contexto global al hacer clic en la tarjeta
                />
          })
            // .filter((product) => product.title === params.categoriaName)
            // .map((product) => (
                
            // ))
        ) : (
          <p>Cargando...</p>
        )}
        </div>
      </section>
    </section>
  );
};

export default Producto;
