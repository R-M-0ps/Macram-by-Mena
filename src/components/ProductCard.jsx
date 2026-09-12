import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

function ProductCard({ product }) {
  return (
    <div className="product-card">

      <Link
        to={`/product/${product.id}`}
        className="product-image-wrapper"
      >
        <img
          src={product.image}
          alt={product.name}
          className="product-image"
        />
      </Link>

      <div className="product-info">

        <span className="product-category">
          HANDMADE
        </span>

        <h3>{product.name}</h3>

        <p>
          {product.description}
        </p>

        <div className="product-bottom">

          <strong>
            {product.price} EGP
          </strong>

          <Link
            to={`/product/${product.id}`}
            className="view-product"
          >
            View
            <FaArrowRight />
          </Link>

        </div>

      </div>

    </div>
  );
}

export default ProductCard;