
import { useDispatch } from "react-redux";
import { cleanCart } from "../redux/slices/cartSlice";
import { Link } from "react-router-dom";

const Succes = () => {
  const dispatch = useDispatch();

  return (
    <div style={{ textAlign: "center", marginTop: "10px", color: "white" }}>
      <h1>Succes</h1>
      <Link to='/'>
        <button onClick={() => dispatch(cleanCart())}>Salir</button>
      </Link>
    </div>
  );
};

export default Succes;
