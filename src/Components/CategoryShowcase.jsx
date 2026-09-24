// import CategoryCard from "./CategoryCard";
// import { categories } from "../data/categories";
// import "./CategoryShowcase.css";

// const CategoryShowcase = () => {
//   return (
//     <section className="category-showcase">
//       <div className="category-showcase-header">
//         <h2>Shop by Category</h2>
//         <p>
//           Explore our collections designed for every style, occasion and
//           lifestyle.
//         </p>
//       </div>

//       <div className="category-grid">
//         {categories.map((category) => (
//           <CategoryCard key={category.id} category={category} />
//         ))}
//       </div>
//     </section>
//   );
// };

// export default CategoryShowcase;

import CategoryCard from "./CategoryCard";
import { categories } from "../data/categories";
import "./CategoryShowcase.css";

const CategoryShowcase = () => {
  return (
    <section className="category-showcase">
      <div className="category-showcase-header">
        <h2>Shop by Category</h2>
        <p>
          Explore our collections designed for every style, occasion and
          lifestyle.
        </p>
      </div>

      <div className="category-grid">
        {categories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
    </section>
  );
};

export default CategoryShowcase;