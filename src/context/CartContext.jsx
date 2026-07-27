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

      return previousItems.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );

    }

    return [
      ...previousItems,
      {
        ...product,
        quantity: 1,
      },
    ];

  });

}
  function removeFromCart(id) {

    setCartItems((previousItems) =>
      previousItems.filter((item) => item.id !== id)
    );

  }
  function increaseQuantity(id) {

  setCartItems((previousItems) =>
    previousItems.map((item) =>
      item.id === id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    )
  );

}

function decreaseQuantity(id) {

  setCartItems((previousItems) =>
    previousItems
      .map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
      .filter((item) => item.quantity > 0)
  );

}
  return (

    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
      }}
    >

      {children}

    </CartContext.Provider>

  );

}

export default CartProvider;