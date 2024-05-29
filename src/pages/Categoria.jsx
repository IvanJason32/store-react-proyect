import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useFetchCollection } from "../hooks/useFetchCollection";
import CardProducts from "../Components/CardProducts";
import "./Categoria.css";

const Categoria = () => {
  const params = useParams();
  const { data, isPending, getData } = useFetchCollection();

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container">
      <h1>{params.categoriaName}</h1>
      <div className="container-cards">
        {!isPending ? (
          data
            .filter((product) => product.title === params.categoriaName)
            .map((product) => (
                <CardProducts
                  key={product.item_id}
                  product={product}
                />
            ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default Categoria;
