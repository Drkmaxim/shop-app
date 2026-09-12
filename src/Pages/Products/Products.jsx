import { useParams, Link } from "react-router-dom";
import {useState, useEffect} from "react";
import Navbar from "../../Components/Navbar";
import ProductCard from "../../Components/ProductCard";
import { products, getProductsByCategory } from "../../data/products";
import { categories } from "../../data/categories";
import "./Products.css";

const Products = () => {

  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);
  //const [loading, setLoading] = useState(true);
  //const [error, setError] = useState("");

  /* useEffect(() => {
    const fetchProduct = async () => {
      try {
        const url = 'http://localhost:3001/view/product';
        let response = fetch(url);
        let data = await response.json();
        setProducts(data);
      }
     catch(err) {
      console.error(err);
    }
  }
    fetchProduct();
  }, []);
*/
useEffect(() => {
    const fetchProducts = async () => {
      try {
        //setLoading(true);
        //setError("");

        const url = 'http://localhost:3001/view/products';

        const response = await fetch(url);

        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }

        const data = await response.json();

        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
        //setError("Unable to load products.");
      } 
    };

    fetchProducts();
  }, []);

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

        {products.length === 0 ? (
          <p className="products-empty">No products found in this category.</p>
        ) : (
          <div className="products-grid">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default Products;
