import { useEffect, useState } from "react";
import "./Categorias.css";
import { useFetchCollection } from "../hooks/useFetchCollection";
import CardProducts from "../Components/CardProducts";
import { useNavigate } from "react-router-dom";

const Categorias = () => {
  const { data, isPending, getData } = useFetchCollection();
  const [uniqueTitles, setUniqueTitles] = useState([]);
  const [limitedData, setLimitedData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (!isPending) {
      const titles = [...new Set(data.map((item) => item.title))];
      setUniqueTitles(titles);

      const limitedData = Object.values(
        data.reduce((acc, item) => {
          if (!acc[item.title]) {
            acc[item.title] = [];
          }
          if (acc[item.title].length < 3) {
            acc[item.title].push(item);
          }
          return acc;
        }, {})
      ).flat();
      setLimitedData(limitedData);
    }
  }, [data, isPending]);

  return (
    <div className="container-categorias">
      <h1>Categories</h1>
      {!isPending ? (
        uniqueTitles.map((item, index) => {
          return (
            <div className="container_class" key={index}>
              <h1 className="title-category" onClick={() => navigate(`/categorias/${item}`)}>{item}</h1>
              <p>Top 3</p>
              <div className="container_products_class">
                {limitedData.map((product) => {
                  if (product.title === item) {
                    return (
                      <CardProducts key={product.item_id} product={product} />
                    );
                  }
                })}
              </div>
            </div>
          );
        })
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
};

export default Categorias;
