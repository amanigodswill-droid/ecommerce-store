import { createContext, useState } from "react";

export const CartContext = createContext();

function CartProvider({ children }) {

  const [cartItems, setCartItems] = useState([]);

  function addToCart(product) {

    setCartItems((previousItems) => {

      const existingProduct = previousItems.find(
        (item) => item.id === product.id
      );

      if (existingProduct) {
        return previousItems;
      }

      return [...previousItems, product];
    });

  }

  function removeFromCart(id) {

    setCartItems((previousItems) =>
      previousItems.filter((item) => item.id !== id)
    );

  }

  return (

    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
      }}
    >

      {children}

    </CartContext.Provider>

  );

}

export default CartProvider;