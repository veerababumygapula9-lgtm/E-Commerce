import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <div>
      <img
        src={product.image}
        alt={product.title}
        width="150"
        height="150"
      />

      <h3>{product.title}</h3>

      <p>{product.description.slice(0, 50)}...</p>

      <h4>${product.price}</h4>

      <Link to={'/products/${product.id}'}>
        <button>View Details</button>
      </Link>
    </div>
  );
}

export default ProductCard;