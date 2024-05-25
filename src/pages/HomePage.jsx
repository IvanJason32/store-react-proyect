import "./HomePage.css";
import Womens from "../assets/women.jpg";
import Mens from "../assets/men.jpg";
import Hats from "../assets/hats.jpg";
import Sneakers from "../assets/sneakers.jpg";
import Jackets from "../assets/jackets.jpg";
import { Link } from "react-router-dom";
import { useFetchCollection } from "../hooks/useFetchCollection";
import { useEffect, useState } from "react";

const HomePage = () => {
  const { data, isPending, getData } = useFetchCollection();
  const [uniqueTitles, setUniqueTitles] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (!isPending) {
      const titles = [...new Set(data.map((item) => item.title))];
      setUniqueTitles(titles);
    }
  }, [data, isPending]);

  const images = {
    Hats: Hats,
    Jackets: Jackets,
    Mens: Mens,
    Sneakers: Sneakers,
    Womens: Womens
  };

  return (
    <div style={{ textAlign: "center", marginTop: "10px", color: "white" }}>
      <h1>HomePage</h1>
      <div className="container-categorias">
        {uniqueTitles.length === 5
          ? uniqueTitles.map((element, index) => {
                return( 
                  <Link key={index} className="card-categoria" to={`/categorias/${element}`}>
                    <img className="img-categoria" src={images[element]} alt="" />
                    <p className="name-categoria">{element}</p>
                  </Link>
                );
            })
          : <div className="modal-loading">
            <p>Cargando...</p></div>}
      </div>
    </div>
  );
};

export default HomePage;
