import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useFetchCollection } from "../hooks/useFetchCollection";
import CardProducts from "../Components/CardProducts";
import './Categoria.css'

const Categoria = () => {
  const params = useParams();
  const { data, isPending, getData } = useFetchCollection();

  useEffect(() => {
    getData();
  }, []);

  // console.log(params);
  return (
    <div style={{ textAlign: "center", marginTop: "10px", color: "white" }}>
      <h1>{params.categoriaName}</h1>
      <div className="container-cards">
        {!isPending
          ? data.map((element) => {
              if (element.title === params.categoriaName) {
                return (
                  <CardProducts
                    key={element.item_id}
                    name={element.name}
                    price={element.price}
                    img={element.imageurl}
                  />
                )
              } else {
                return
              }
            })
          : `Cargando...`}
      </div>
    </div>
  );
};

export default Categoria;
