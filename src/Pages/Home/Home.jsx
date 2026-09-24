// import Navbar from "../../Components/Navbar";
// import {useNavigate} from "react-router-dom";
// import Hero from "../../Components/Hero";
// import CategoryShowcase from "../../Components/CategoryShowcase";
// import Footer from "../../Components/Footer";

// function Home() {
//     const navigate = useNavigate();
//     navigate("/home"); 

//   return (
//     <div>
//       <Navbar/>
//       <main>
//         <Hero />
//         <CategoryShowcase />
//       </main>
//       <Footer />
//     </ div>
//   );
// }

// export default Home;
import Navbar from "../../Components/Navbar";
import {useNavigate} from "react-router-dom";
import Hero from "../../Components/Hero";
import CategoryShowcase from "../../Components/CategoryShowcase";
import Footer from "../../Components/Footer";

function Home() {
    const navigate = useNavigate();
    navigate("/home"); 

  return (
    <div>
      <Navbar/>
      <main>
        <Hero />
        <CategoryShowcase />
      </main>
      {/* <Footer /> */}
    </div>
  );
}

export default Home;