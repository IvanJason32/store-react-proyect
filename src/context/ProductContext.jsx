import { createContext, useState, useContext } from 'react';

const SelectedProductsContext = createContext();

export const SelectedProductsProvider = ({ children }) => {
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [cart, setCart] = useState([]);

  const addSelectedProduct = (product) => {
    setSelectedProducts((prevProducts) => [...prevProducts, product]);
  };

  const addToCart = (product) => {
    setCart((prevCart) => {
      const updatedCart = [...prevCart, product];
      console.log('Producto añadido al carrito:', product);
      console.log('Carrito actualizado:', updatedCart);
      return updatedCart;
    });
  };

  const removeSelectedProduct = (productId) => {
    setSelectedProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== productId)
    );
  };

  const clearSelectedProducts = () => {
    setSelectedProducts([]);
  };

  return (
    <SelectedProductsContext.Provider
      value={{
        selectedProducts,
        addSelectedProduct,
        addToCart,
        removeSelectedProduct,
        clearSelectedProducts,
        cart,
      }}
    >
      {children}
    </SelectedProductsContext.Provider>
  );
};

export const useSelectedProducts = () => useContext(SelectedProductsContext);
