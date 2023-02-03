import "../../css/footer.css"
import logo from "../../assets/logo.png"
import { Box } from '@mui/material'

export default function Footer() {
    return (
        <div className="container-fluid footer">
            <div className="row">
                <div className="col-lg-9">
                    <div className="row">
                        <div className="col-lg-4 col-6">
                            <ul className="footer-nav">
                                <li><a href="#">Home</a></li>
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">Events</a></li>
                                <li><a href="#">Sponsors</a></li>
                                <li><a href="#">Highlights</a></li>
                                <li><a href="#">TechNights</a></li>
                                <li><a href="#">Privacy Policy</a></li>
                                <li><a href="#">Terms and Conditions</a></li>
                                <li><a href="#">Cancellation policy</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-4 col-6">
                            <p>Developer's github profile</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 event-info">
                    <Box
                        component='img'
                        sx={{height: 80, width: 80}}
                        alt="logo"
                        src={logo}
                    />
                    <h3>Technunctus</h3>
                    <h4>Indian Institute of Technology Jammu</h4>
                    <address>
                        Jagti, NH-44 , PO Nagrota
                        Jammu - 181 221 J&K, India
                        Tel.: 0191-2570381
                    </address>
                    <div class="footer-link"><a href="https://www.iitjammu.ac.in/"><i class="fa-solid fa-globe"></i></a></div>
                    <div class="footer-link"><a href="https://www.linkedin.com/school/iitjammu/?originalSubdomain=in"><i class="fa-brands fa-linkedin"></i></a></div>
                    <div class="footer-link"><a href="https://twitter.com/IITJammu?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"><i class="fa-brands fa-twitter"></i></a></div>
                    <div class="footer-link"><a href="https://www.facebook.com/IITJammuOfficial/"><i class="fa-brands fa-facebook"></i></a></div>
                    <div class="footer-link"><a href=""><i class="fa-brands fa-instagram"></i></a></div>
                </div>
            </div>
        </div>
    )
}