import "./CategoryCard.css";
import { useNavigate } from "react-router-dom";

const CategoryCard = ({ category }) => {
  const navigate = useNavigate();

  const { name, description, image, id, _id } = category;

  const categoryId = id || _id || name.toLowerCase();

  const handleClick = () => {
    navigate(`/view/products/${categoryId}`);
  };

  return (
    <div
      className="category-card"
      onClick={handleClick}
      role="button"
      tabIndex={0}
    >
      <div className="category-card-image-wrap">
        <img
          src={image}
          alt={name}
          className="category-card-image"
        />

        <div className="category-card-overlay" />
      </div>

      <div className="category-card-content">
        <h3 className="category-card-name">{name}</h3>

        <p className="category-card-description">
          {description}
        </p>

        <span className="category-card-cta">
          Explore Collection →
        </span>
      </div>
    </div>
  );
};

export default CategoryCard;