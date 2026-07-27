import { NavLink } from "react-router-dom";


function Navbar(){

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
            Cart
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