import { useParams, Link } from "react-router-dom";
import Navbar from "../../Components/Navbar";
import ProductCard from "../../Components/ProductCard";
import { products, getProductsByCategory } from "../../data/products";
import { categories } from "../../data/categories";
import "./Products.css";

const Products = () => {
  const { categoryId } = useParams();

  const displayedProducts = categoryId
    ? getProductsByCategory(categoryId)
    : products;

  const categoryInfo = categories.find((c) => c.id === categoryId);
  const heading = categoryId ? `${categoryInfo?.name || categoryId}'s Collection` : "All Products";

  return (
    <div>
      <Navbar />
      <main className="products-page">
        <div className="products-header">
          <h1>{heading}</h1>
          {categoryId && (
            <Link to="/products" className="products-clear-filter">
              View all products 
            </Link>
          )}
        </div>

        {displayedProducts.length === 0 ? (
          <p className="products-empty">No products found in this category.</p>
        ) : (
          <div className="products-grid">
            {displayedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default Products;
