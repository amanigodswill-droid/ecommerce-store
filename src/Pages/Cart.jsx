import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Cart() {

  const { cartItems, removeFromCart } =
    useContext(CartContext);

  return (

    <div className="container">

      <h1 className="page-title">
        Shopping Cart
      </h1>

      {cartItems.length === 0 ? (

        <p>Your cart is empty.</p>

      ) : (

        cartItems.map((item) => (

          <div
            className="cart-item"
            key={item.id}
          >

            <img
              src={item.image}
              alt={item.title}
            />

            <div>

              <h3>{item.title}</h3>

              <p className="price">
                ${item.price}
              </p>

            </div>

            <button
              className="btn"
              onClick={() =>
                removeFromCart(item.id)
              }
            >
              Remove
            </button>

          </div>

        ))

      )}

    </div>

  );

}

export default Cart;