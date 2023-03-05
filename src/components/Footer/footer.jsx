import React from 'react'
import "../../css/footer.css"
import { Link } from "react-router-dom";
import { motion } from "framer-motion"


export default function Footer() {
    return (
        <>

            <footer className="footer">
                <div className="footer-container">
                    <div className="footer-col">
                        <ul>
                            <li className='footer-links'>
                                <Link to="/" >
                                    <motion.a className="hoverLink m-2 ">Home</motion.a>
                                </Link>
                            </li>
                            <li className='footer-links'>
                                <Link to="/a" >
                                    <motion.a className="hoverLink m-2 ">About Us</motion.a>
                                </Link>
                            </li>
                            <li className='footer-links'>
                                <Link to="/e" >
                                    <motion.a className="hoverLink m-2 ">Events</motion.a>
                                </Link>
                            </li>
                            <li className='footer-links'>
                                <Link to="/s" >
                                    <motion.a className="hoverLink m-2 ">Sponsors</motion.a>
                                </Link>
                            </li>
                            <li className='footer-links'>
                                <Link to="/h" >
                                    <motion.a className="hoverLink m-2 ">Highlights</motion.a>
                                </Link>
                            </li>
                            <li className='footer-links'>
                                <Link to="/t/night" >
                                    <motion.a className="hoverLink m-2 ">TechNights</motion.a>
                                </Link>
                            </li>
                            <li className='footer-links'>
                                <Link to="/policy" >
                                    <motion.a className="hoverLink m-2 ">Privacy<br/> Policy</motion.a>
                                </Link>
                            </li>
                            <li className='footer-links'>
                                <Link to="/terms" >
                                    <motion.a className="hoverLink m-2 ">
                                        Terms and<br/>Conditions
                                    </motion.a>
                                </Link>
                            </li>
                            <li className='footer-links'>
                                <Link to="/cancellation" >
                                    <motion.a className="hoverLink m-2 ">
                                        Cancellation<br/>policy
                                    </motion.a>
                                </Link>
                            </li>
                        </ul>
                        <ul>
                            <li className="m-2 italic text-sm">
                                <h4>Developers&apos; github profile</h4>
                            </li>
                            <li>
                                <Link to="https://github.com/aaravjn" >
                                    <motion.a className="hoverLink m-2 ">Aarav Jain</motion.a>
                                </Link>
                            </li>
                            <li>
                                <Link to="https://github.com/kapiswayprakhar15" >
                                    <motion.a className="hoverLink m-2 ">Prakhar Kapisway</motion.a>
                                </Link>
                            </li>{" "}
                            <li>
                                <Link to="https://github.com/yshubham8419" >
                                    <motion.a className="hoverLink m-2 ">Shubham Yadav</motion.a>
                                </Link>
                            </li>
                        </ul>
                        
                    </div>
                    <div className="footer-col-2">
                        <img
                            src={require("../../assets/logo.png")}
                            alt="Footer Head Logo"
                            className='technunctuslogo'
                        />
                        <b className="mt-4 text-3xl font-bold block">Technunctus</b>
                        <b>Indian Institute of Technology, Jammu</b>
                        <p className="text-sm">
                            Jagti, NH-44 , PO Nagrota
                            <br />
                            Jammu - 181 221 J&K, India
                            <br />
                            Tel.: 0191-2570381{" "}
                        </p>
                        <ul className="footer-link">
                            <li>
                                <Link to="https://www.iitjammu.ac.in/" >
                                    {/* <motion.a className="hover:gradientText"> */}
                                    <img src={require("../../assets/icons/iitjammu.png")} alt="iitjammuicon" className='iitjammuicon' />
                                    {/* </motion.a> */}
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="https://www.linkedin.com/school/iitjammu/?originalSubdomain=in"

                                >
                                    {/* <motion.a className="hover:gradientText"> */}
                                    <img src={require("../../assets/icons/linkedin.png")} alt="linkedinicon" />
                                    {/* </motion.a> */}
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="https://twitter.com/IITJammu?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
                                >
                                    {/* <motion.a className="hover:gradientText"> */}
                                    <img src={require("../../assets/icons/twitter.png")} alt="twittericon" />
                                    {/* </motion.a> */}
                                </Link>
                            </li>{" "}
                            <li>
                                <Link
                                    to="https://www.facebook.com/IITJammuOfficial/"

                                >
                                    {/* <motion.a className="hover:gradientText"> */}
                                    <img src={require("../../assets/icons/facebook.png")} alt="facebookicon" />
                                    {/* </motion.a> */}
                                </Link>
                            </li>{" "}
                            <li>
                                <Link
                                    to="https://www.instagram.com/technunctus/"

                                >
                                    {/* <motion.a className="hover:gradientText"> */}
                                    <img src={require("../../assets/icons/insta.png")} alt="instaicon" />
                                    {/* </motion.a> */}
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer >
        </>
    )
}
