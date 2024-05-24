import Header from "../Components/Header";
import { Outlet } from "react-router-dom";
import "./Root.css";
// import { AuthProvider } from "../context/AuthContext";
// import { LoginContextProvider } from '../context/loginContext'
// import { useLoginContext } from '../hooks/useLoginContext'

const Root = () => {
  // const [isLogin, handleLogin] = useLoginContext();
  return (
    <>
        <Header />
        <Outlet />
    </>
      // <AuthProvider>
    
      // </AuthProvider>
  );
};

export default Root;
