function Footer(){
    return(
        <div>
            <footer>
        <div className="wrapper footer-wrapper">
            <div className="wrapper-container">
                <a href="index.php">
                <img src="./images/footer-logo.svg" alt="" />
                </a>
                <div className="footer-section contact">
                    <h4>CONTACT US</h4>
                    <ul>
                        <li><a href="#">CALL US: +91 96009 77711</a></li>
                        <li><a href="tel:+91 88703 22266">+91 88703 22266 </a></li>
                        <li><a href="mailto:sales@jusfly.in">Email: sales@jusfly.in</a></li>
                    </ul>
                </div>
                <div className="footer-section service">
                    <h4>CUSTOMER SERVICE</h4>
                    <ul>
                        <li><a href="#">Contact Us</a></li>
                        <li><a href="tel:+91 88703 22266">Feedback</a></li>
                        <li><a href="mailto:sales@jusfly.in">Payment Gateway</a></li>
                    </ul>
                </div>
                <div className="footer-section service">
                    <h4>WE PROVIDE</h4>
                    <ul>
                        <li><a href="empty_legs.php">Empty Legs</a></li>
                        <li><a href="#">Private Charter</a></li>
                        <li><a href="#">Packages</a></li>
                        <li><a href="#">Fleets</a></li>
                    </ul>
                </div>
                <div className="footer-section service">
                    <h4>INFORMATION</h4>
                    <ul>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Joy Ride</a></li>
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">Insight</a></li>
                        <li><a href="#">Terms & Condition</a></li>
                    </ul>
                </div>
                <div className="footer-section newsletter">
                    <h4>Subscribe to Newsletter via Email</h4>
                    <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</p>
                    <form action="#">
                        <input type="mail" placeholder="Email Address" />
                        <button className="Btn-borderonly">SUBSCRIBE</button>
                    </form>
                </div>
            </div>
        </div>
    </footer>
    </div>
    )
}
export default Footer;