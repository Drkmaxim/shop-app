import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";

function About() {
    return(
        <div>
            <Navbar />
            <div className="about-us-main">
                <h1>About Us</h1>
                <div className="history">
                    <h3>Who are we?</h3>
                    <p>
                        Our e-commerce store started in 2015 provides great goods at great prices. We serve over 200 million customers per day
                        and provide top notch services with all of our products. We provide the best clothes at best values with
                        great variety available in all shapes and sizes from kids to adults. We provide a comfortable shopping
                        experience to our customers through online shopping and ship products all over the country delivered
                        to the customers doorsteps.
                    </p>
                </div>
                <div className="mission">
                <h3>Our Mission</h3>
                <p> To provide the best quality fashion wear at great value, delivered straight to your doorsteps.</p>
                </div>
                <div className="products">
                    <h3>Our Products</h3>
                    <p>
                        We provide some of the best collections of attires for all your different needs, ranging from
                        kids to adults, including bridal and sports collections. We have an extensive collection of sports wear
                        suitable for everyday workout to aspiring atheletes. Our bridal collection has a wide variety bridal wear for
                        both men and women. Our collections are suitable for all kinds of occassions from everyday clothing, sports,
                        party wear to formal meetings.
                    </p>
                </div>
            </div>
            {/* <Footer /> */}
        </div>);
}

export default About;