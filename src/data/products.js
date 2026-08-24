export const products = [
  // Women
  {
    id: "w1",
    name: "Floral Wrap Dress",
    category: "women",
    price: 1499,
    image: "/images/products/women/floral-wrap-dress.jpg",
    description: "A lightweight wrap dress with a floral print, perfect for daywear.",
    stock: 12,
  },
  {
    id: "w2",
    name: "Tailored Blazer",
    category: "women",
    price: 2999,
    image: "/images/products/women/tailored-blazer.jpg",
    description: "A structured blazer that pairs well with both casual and formal outfits.",
    stock: 8,
  },
  {
    id: "w3",
    name: "High-Waist Jeans",
    category: "women",
    price: 1799,
    image: "/images/products/women/high-waist-jeans.jpg",
    description: "Classic high-waist denim with a comfortable stretch fit.",
    stock: 20,
  },

  // Men
  {
    id: "m1",
    name: "Classic Oxford Shirt",
    category: "men",
    price: 1299,
    image: "/images/products/men/oxford-shirt.jpg",
    description: "A crisp cotton oxford shirt for everyday formal wear.",
    stock: 15,
  },
  {
    id: "m2",
    name: "Slim Fit Chinos",
    category: "men",
    price: 1599,
    image: "/images/products/men/slim-chinos.jpg",
    description: "Versatile slim-fit chinos suitable for work and weekends.",
    stock: 18,
  },
  {
    id: "m3",
    name: "Leather Jacket",
    category: "men",
    price: 4999,
    image: "/images/products/men/leather-jacket.jpg",
    description: "A premium leather jacket with a timeless silhouette.",
    stock: 5,
  },

  // Kids
  {
    id: "k1",
    name: "Dino Print T-Shirt",
    category: "kids",
    price: 499,
    image: "/images/products/kids/dino-tshirt.jpg",
    description: "A fun, soft cotton t-shirt with a playful dinosaur print.",
    stock: 25,
  },
  {
    id: "k2",
    name: "Denim Dungarees",
    category: "kids",
    price: 899,
    image: "/images/products/kids/denim-dungarees.jpg",
    description: "Durable and comfortable dungarees built for active play.",
    stock: 14,
  },

  // Sports
  {
    id: "s1",
    name: "Performance Running Tee",
    category: "sports",
    price: 799,
    image: "/images/products/sports/running-tee.jpg",
    description: "Moisture-wicking fabric keeps you cool during workouts.",
    stock: 30,
  },
  {
    id: "s2",
    name: "Training Joggers",
    category: "sports",
    price: 1399,
    image: "/images/products/sports/training-joggers.jpg",
    description: "Flexible joggers designed for high-intensity training.",
    stock: 22,
  },

  // Bridal
  {
    id: "b1",
    name: "Embroidered Bridal Lehenga",
    category: "bridal",
    price: 15999,
    image: "/images/products/bridal/bridal-lehenga.jpg",
    description: "An intricately embroidered lehenga for your special day.",
    stock: 3,
  },
  {
    id: "b2",
    name: "Silk Bridal Saree",
    category: "bridal",
    price: 8999,
    image: "/images/products/bridal/bridal-saree.jpg",
    description: "A rich silk saree with traditional zari work.",
    stock: 6,
  },
];

export const getProductsByCategory = (categoryId) =>
  products.filter((product) => product.category === categoryId);

export const getProductById = (productId) =>
  products.find((product) => product.id === productId);
