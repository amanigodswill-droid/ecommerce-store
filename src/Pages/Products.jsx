import { useEffect, useState } from "react";
import axios from "axios";

import ProductCard from "../components/ProductCard";
import SearchBar from "../components/SearchBar";

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");

  
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

  
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );


  if (loading) {
    return <h2 className="message">Loading products...</h2>;
  }

  
  if (error) {
    return <h2 className="message">{error}</h2>;
  }

  return (
    <div className="container">

      <h1 className="page-title">
        Products
      </h1>

      <SearchBar
        search={search}
        setSearch={setSearch}
      />

      <div className="product-grid">

        {filteredProducts.map((product) => (
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