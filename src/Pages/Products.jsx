import { useEffect, useState } from "react";
import axios from "axios";

import ProductCard from "../components/ProductCard";

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch(() => {
        setError("Unable to load products.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <h2 className="message">Loading products...</h2>;
  }

  if (error) {
    return <h2 className="message">{error}</h2>;
  }

  return (
    <div className="container">
      <h1 className="page-title">Products</h1>

      <div className="product-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </div>
  );
}

export default Products;