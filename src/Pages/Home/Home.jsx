import Navbar from "../../Components/Navbar";
import {useNavigate} from "react-router-dom";
import Hero from "../../Components/Hero";
import CategoryShowcase from "../../Components/CategoryShowcase";

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
    </div>
  );
}

export default Home;