import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} />

      <h3>{product.title}</h3>

      <p className="price">${product.price}</p>

      <Link className="btn" to={`/products/${product.id}`}>
        View Details
      </Link>
    </div>
  );
}

export default ProductCard;