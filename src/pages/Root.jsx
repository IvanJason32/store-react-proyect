import Header from "../Components/Header";
import { Outlet } from "react-router-dom";
import "./Root.css";
import { SelectedProductsProvider } from "../context/ProductContext";

const Root = () => {
  return (
    <div className="principal-structure">
      <SelectedProductsProvider>
        <div className="container-header">
          <Header />
        </div>
        <div className="container-body">
          <Outlet />
        </div>
      </SelectedProductsProvider>
    </div>
  );
};

export default Root;
