import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";


function Navbar(){
    
  const { cartItems } = useContext(CartContext);

  return (

    <nav className="navbar">

      <div className="container navbar-content">

        <h2 className="logo">
          ShopEase
        </h2>


        <div className="nav-links">

          <NavLink to="/">
            Home
          </NavLink>


          <NavLink to="/products">
            Products
          </NavLink>


          <NavLink to="/cart">
          Cart ({cartItems.length})
          </NavLink>


          <NavLink to="/login">
            Login
          </NavLink>

        </div>

      </div>

    </nav>

  );

}


export default Navbar;