import Header from "../Components/Header";
import { Outlet } from "react-router-dom";
import "./Root.css";
import { SelectedProductsProvider } from "../context/ProductContext";
// import { useContext } from "react";

const Root = () => {
  // const { uniqueTitles, setIsMenuOpen } = useContext(NavbarContext);

  return (
    <div className="principal-structure">
      <SelectedProductsProvider>
        <div className="container-header">
          <Header>
            <Header.Content>
              <Header.Toggle />
              <Header.DesktopOptions>
                <Header.NavBarOpctions to="/home">Home</Header.NavBarOpctions>
                <Header.NavBarOpctions to="/categorias">
                  Categories
                </Header.NavBarOpctions>
                <Header.NavBarOpcCategorys />
              </Header.DesktopOptions>
              <Header.NavLoginSeccion>
                <Header.Cart />
                <Header.AuthLink />
              </Header.NavLoginSeccion>
            </Header.Content>
            <Header.MobileOptions>
              <Header.NavBarOpctionsMobile to="/home">
                Home
              </Header.NavBarOpctionsMobile>
              <Header.NavBarOpctionsMobile to="/categorias">
                Categories
              </Header.NavBarOpctionsMobile>
              <Header.NavBarOpcCategorysMobile />
            </Header.MobileOptions>
          </Header>
        </div>
        <div className="container-body">
          <Outlet />
        </div>
      </SelectedProductsProvider>
    </div>
  );
};

export default Root;
