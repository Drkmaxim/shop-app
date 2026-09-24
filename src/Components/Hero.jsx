// import { useState, useEffect } from "react";
// import "./Hero.css";

// const heroSlides = [
//   {
//     id: 1,
//     image: "/images/hero/women-collection.jpg",
//     title: "Discover Your Style",
//     subtitle: "Explore the latest women's fashion designed for every occasion.",
//     buttonText: "Shop Women",
//     buttonLink: "/category/women",
//   },
//   {
//     id: 2,
//     image: "/images/hero/men-collection.jpg",
//     title: "Modern Style for Every Man",
//     subtitle: "Discover timeless essentials and contemporary fashion.",
//     buttonText: "Shop Men",
//     buttonLink: "/category/men",
//   },
//   {
//     id: 3,
//     image: "/images/hero/kids-collection.jpg",
//     title: "Little Styles, Big Smiles",
//     subtitle: "Comfortable and stylish fashion made for every adventure.",
//     buttonText: "Shop Kids",
//     buttonLink: "/category/kids",
//   },
//   {
//     id: 4,
//     image: "/images/hero/sports-collection.jpg",
//     title: "Move. Perform. Repeat.",
//     subtitle: "Performance-focused sportswear designed for an active lifestyle.",
//     buttonText: "Shop Sports",
//     buttonLink: "/category/sports",
//   },
//   {
//     id: 5,
//     image: "/images/hero/bridal-collection.jpg",
//     title: "Make Every Moment Beautiful",
//     subtitle: "Discover elegant bridal styles for your special day.",
//     buttonText: "Explore Bridal",
//     buttonLink: "/category/bridal",
//   },
// ];

// const AUTO_SLIDE_INTERVAL = 2000; //ms

// const Hero = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const goToSlide = (index) => {
//     setCurrentSlide(index);
//   };

//   const goToNext = () => {
//     setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
//   };

//   const goToPrevious = () => {
//     setCurrentSlide((prev) =>
//       prev === 0 ? heroSlides.length - 1 : prev - 1
//     );
//   };

//   useEffect(() => {
//     const timer = setInterval(() => {
//       goToNext();
//     }, AUTO_SLIDE_INTERVAL);

//     return () => clearInterval(timer);
//   }, [currentSlide]);

//   return (
//     <section className="hero">
//       <div className="hero-slider">
//         {heroSlides.map((slide, index) => (
//           <div
//             key={slide.id}
//             className={`hero-slide ${index === currentSlide ? "active" : ""}`}
//             style={{ backgroundImage: `url(${slide.image})` }}
//           >
//             <div className="hero-overlay" />
//             <div className="hero-content">
//               <h1 className="hero-title">{slide.title}</h1>
//               <p className="hero-subtitle">{slide.subtitle}</p>
//               <a href={slide.buttonLink} className="hero-cta">
//                 {slide.buttonText}
//               </a>
//             </div>
//           </div>
//         ))}
//       </div>

//       <button
//         className="hero-arrow hero-arrow-left"
//         onClick={goToPrevious}
//         aria-label="Previous slide"
//       >
//         ‹
//       </button>
//       <button
//         className="hero-arrow hero-arrow-right"
//         onClick={goToNext}
//         aria-label="Next slide"
//       >
//         ›
//       </button>

//       <div className="hero-dots">
//         {heroSlides.map((slide, index) => (
//           <button
//             key={slide.id}
//             className={`hero-dot ${index === currentSlide ? "active" : ""}`}
//             onClick={() => goToSlide(index)}
//             aria-label={`Go to slide ${index + 1}`}
//           />
//         ))}
//       </div>
//     </section>
    
//   );
// };

// export default Hero;

import { useState, useEffect } from "react";
import "./Hero.css";

const heroSlides = [
  {
    id: 1,
    image: "/images/hero/women-collection.jpg",
    title: "Discover Your Style",
    subtitle: "Explore the latest women's fashion designed for every occasion.",
    buttonText: "Shop Women",
    buttonLink: "/category/women",
  },
  {
    id: 2,
    image: "/images/hero/men-collection.jpg",
    title: "Modern Style for Every Man",
    subtitle: "Discover timeless essentials and contemporary fashion.",
    buttonText: "Shop Men",
    buttonLink: "/category/men",
  },
  {
    id: 3,
    image: "/images/hero/kids-collection.jpg",
    title: "Little Styles, Big Smiles",
    subtitle: "Comfortable and stylish fashion made for every adventure.",
    buttonText: "Shop Kids",
    buttonLink: "/category/kids",
  },
  {
    id: 4,
    image: "/images/hero/sports-collection.jpg",
    title: "Move. Perform. Repeat.",
    subtitle: "Performance-focused sportswear designed for an active lifestyle.",
    buttonText: "Shop Sports",
    buttonLink: "/category/sports",
  },
  {
    id: 5,
    image: "/images/hero/bridal-collection.jpg",
    title: "Make Every Moment Beautiful",
    subtitle: "Discover elegant bridal styles for your special day.",
    buttonText: "Explore Bridal",
    buttonLink: "/category/bridal",
  },
];

const AUTO_SLIDE_INTERVAL = 2000; //ms

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? heroSlides.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    const timer = setInterval(() => {
      goToNext();
    }, AUTO_SLIDE_INTERVAL);

    return () => clearInterval(timer);
  }, [currentSlide]);

  return (
    <section className="hero">
      <div className="hero-slider">
        {heroSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`hero-slide ${index === currentSlide ? "active" : ""}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="hero-overlay" />
            <div className="hero-content">
              <h1 className="hero-title">{slide.title}</h1>
              <p className="hero-subtitle">{slide.subtitle}</p>
              <a href={slide.buttonLink} className="hero-cta">
                {slide.buttonText}
              </a>
            </div>
          </div>
        ))}
      </div>

      <button
        className="hero-arrow hero-arrow-left"
        onClick={goToPrevious}
        aria-label="Previous slide"
      >
        ‹
      </button>
      <button
        className="hero-arrow hero-arrow-right"
        onClick={goToNext}
        aria-label="Next slide"
      >
        ›
      </button>

      <div className="hero-dots">
        {heroSlides.map((slide, index) => (
          <button
            key={slide.id}
            className={`hero-dot ${index === currentSlide ? "active" : ""}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
    
  );
};

export default Hero;