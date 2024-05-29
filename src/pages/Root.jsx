import Header from "../Components/Header";
import { Outlet } from "react-router-dom";
import "./Root.css";
import { SelectedProductsProvider } from "../context/ProductContext";

const Root = () => {
  return (
    <>
      <SelectedProductsProvider>
        <Header />
        <Outlet />
      </SelectedProductsProvider>
    </>
  );
};

export default Root;
