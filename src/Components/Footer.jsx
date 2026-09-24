import "./Footer.css";

const Footer = () => {
    return(
        <footer className="footer">
            <div className="footerinfo">
                <div className="socialMedia">
                    <h3>Social Media</h3>
                    <ul>
                        <li>Instagram</li>
                        <li>Twitter</li>
                    </ul>
                </div>
                <div className="quickLinks">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="#">Women</a></li>
                        <li><a href="#">Men</a></li>
                        <li><a href="#">Kids</a></li>
                        <li><a href="#">Sports</a></li>
                        <li><a href="#">Bridal</a></li>
                    </ul>
                </div>
                <div className="contactUs">
                    <h3>Contact us</h3>
                    <p>E-mail: support@eshop.com</p>
                    <p>Contact: 1800-300-900</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;