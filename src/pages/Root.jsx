import Header from "../Components/Header";
import { Outlet } from "react-router-dom";
import "./Root.css";
import { SelectedProductsProvider } from "../context/ProductContext";
// import { AuthProvider } from "../context/AuthContext";
// import { LoginContextProvider } from '../context/loginContext'
// import { useLoginContext } from '../hooks/useLoginContext'

const Root = () => {
  // const [isLogin, handleLogin] = useLoginContext();
  return (
    <>
       <SelectedProductsProvider>
      <Header />
      <Outlet />
    </SelectedProductsProvider>
    </>
      // <AuthProvider>
    
      // </AuthProvider>
  );
};

export default Root;
