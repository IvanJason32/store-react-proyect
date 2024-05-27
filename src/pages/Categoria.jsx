import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useFetchCollection } from '../hooks/useFetchCollection';
import { useSelectedProducts } from '../context/ProductContext';
import CardProducts from '../Components/CardProducts';
import './Categoria.css';

const Categoria = () => {
  const params = useParams();
  const { data, isPending, getData } = useFetchCollection();
  const { clearSelectedProducts, addSelectedProduct } = useSelectedProducts();

  useEffect(() => {
    getData();
  }, []); 

  useEffect(() => {
    if (!isPending && data.length > 0) {
      clearSelectedProducts();
      
      const filteredProducts = data.filter(product => product.title === params.categoriaName);
      filteredProducts.forEach(product => addSelectedProduct(product));
    }
  }, [isPending, data, params.categoriaName]); 

  return (
    <div style={{ textAlign: "center", marginTop: "10px", color: "white" }}>
      <h1>{params.categoriaName}</h1>
      <div className="container-cards">
        {!isPending ? (
          data.filter(product => product.title === params.categoriaName).map((product) => (
            <CardProducts
              key={product.item_id}
              productId={product.item_id}
              name={product.name}
              price={product.price}
              img={product.imageurl}
              product={product}
              onAddToCart={() => addSelectedProduct(product)} // Agregar producto al contexto global al hacer clic en la tarjeta
            />
          ))
        ) : (
          <p>Cargando...</p>
        )}
      </div>
    </div>
  );
};

export default Categoria;
