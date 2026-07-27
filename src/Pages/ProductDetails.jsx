import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function ProductDetails() {

  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const { addToCart } = useContext(CartContext);

  useEffect(() => {

    axios
      .get(`https://fakestoreapi.com/products/${id}`)

      .then((response) => {

        setProduct(response.data);

      })

      .catch(() => {

        setError("Unable to load product.");

      })

      .finally(() => {

        setLoading(false);

      });

  }, [id]);

  if (loading) {

    return <h2 className="message">Loading...</h2>;

  }

  if (error) {

    return <h2 className="message">{error}</h2>;

  }

  return (

    <div className="container details-container">

      <img
        src={product.image}
        alt={product.title}
      />

      <div className="details-text">

        <h1>{product.title}</h1>

        <p className="price">
          ${product.price}
        </p>

        <p>
          {product.description}
        </p>

        <button
  className="btn"
  onClick={() => addToCart(product)}
>
  Add To Cart
</button>

      </div>

    </div>

  );

}

export default ProductDetails;