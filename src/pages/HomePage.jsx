import "./HomePage.css"
import womenImg from "../assets/women.jpg"
import menImg from "../assets/men.jpg"
import hatsImg from "../assets/hats.jpg"
import sneakersImg from "../assets/sneakers.jpg"
import jacketsImg from "../assets/jackets.jpg"
import { Link } from "react-router-dom"

const HomePage = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "10px", color:"white" }}>
      <h1>HomePage</h1>
      <div className="container-categorias">
        <Link className="card-categoria" to="/women">
            <img className="img-categoria" src={womenImg} alt="" />
            <p className="name-categoria">Women</p>
        </Link>
        <Link className="card-categoria" to="/men">
            <img className="img-categoria" src={menImg} alt="" />
            <p className="name-categoria">Men</p>
        </Link>
        <Link className="card-categoria" to="/hats">
            <img className="img-categoria" src={hatsImg} alt="" />
            <p className="name-categoria">Hats</p>
        </Link>
        <Link className="card-categoria" to="/sneakers">
            <img className="img-categoria" src={sneakersImg} alt="" />
            <p className="name-categoria">Sneakers</p>
        </Link>
        <Link className="card-categoria" to="/jackets">
            <img className="img-categoria" src={jacketsImg} alt="" />
            <p className="name-categoria">Jackets</p>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
