import {
BrowserRouter,
Routes,
Route
} from "react-router-dom";


import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Checkout from "./pages/Checkout";
import ProductDetails from "./pages/ProductDetails";


function App(){

return(

<BrowserRouter>

<Routes>


<Route 
path="/"
element={<Home/>}
/>


<Route
path="/products"
element={<Products/>}
/>


<Route
path="/products/:id"
element={<ProductDetails/>}
/>


<Route
path="/cart"
element={<Cart/>}
/>


<Route
path="/login"
element={<Login/>}
/>


<Route
path="/checkout"
element={<Checkout/>}
/>


</Routes>

</BrowserRouter>

)

}


export default App;