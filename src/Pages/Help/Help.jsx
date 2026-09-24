import Navbar from "../../Components/Navbar";
import "./Help.css"
import Footer from "../../Components/Footer";
function Help() {
    
    return(
        <>
            <Navbar />
            <div className="supportContainer">
                <div className="support">
                    <img src="/images/cust-service.webp" alt="customer support" width="100vw"/>
                </div>
                <div>
                    <h1>Welcome to customer support</h1>
                    <p>
                        We take pride in offering great support to our customers on their purchases of our products.
                        You can use the following information to reach out to us if you have any queries regarding your
                        purchase or our services. We also provide an FAQ you can check out down below.
                    </p>
                    <h3>FAQ</h3>
                    <h4>How long does it take to ship my product?</h4>
                    <p>
                        It should take about 3 - 5 business days to ship our products anywhere within your country, imported goods
                        however may take anywhere from 2 weeks to a month due to shipping and customs.
                    </p>
                    <h4>Do you offer refunds?</h4>
                    <p>
                        Refunds are provided under certain conditions, if the product was lost in transit then refunds are offered
                        no questions asked. We also provide 2 week window where you can return the product if you're not satisfied.
                        We highly recommend the customer to capture a video footage of the unboxing of the product in order to have
                        a record to provide to the support team in the event of physical damage during shipping. Damage caused by the
                        customer is not eligible for refunds.
                    </p>
                    <h4>Hey, I have got some ideas</h4>
                    <p>
                        We are glad to hear! You can feel free to contact us at support for offering any suggestions on to how to make our
                        products and services better. Providing a great service is just as important as providing great goods, we welcome all
                        kinds of feedback.
                    </p>
                    <h3>Contact Us</h3>
                    <p>For product related queries:</p>
                    <ul>
                        <li>E-mail: support@eshop.com</li>
                        <li>Contact: 1800-300-900</li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Help;