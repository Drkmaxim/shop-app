import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import "./ProductCard.css";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    setAdded(true);
    setTimeout(() => setAdded(false), 1200);
  };

  return (
    <div className="product-card">
      <div className="product-card-image-wrap">
        <img
          src={product.image}
          alt={product.name}
          className="product-card-image"
        />
      </div>

      <div className="product-card-content">
        <h3 className="product-card-name">{product.name}</h3>
        <p className="product-card-price">₹{product.price.toLocaleString("en-IN")}</p>

        <button
          className={`product-card-add-btn ${added ? "added" : ""}`}
          onClick={handleAddToCart}
          disabled={product.stock === 0}
        >
          {product.stock === 0 ? "Out of Stock" : added ? "Added ✓" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
