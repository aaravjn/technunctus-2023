import React from 'react'
import "../../css/footer.css"
import { Link } from "react-router-dom";
import { motion } from "framer-motion"


export default function Footer() {
    return (
        <>

                <footer className="footer row">
                    <ul className='col-md-3 col-sm-6 footer-col-1' style={{marginLeft:"4%"}}>
                        <li>
                            <h4>
                                Quick Links
                                <hr style={{
                                    border:"none",
                                    height:"3px",
                                    width:"30%",
                                    backgroundColor:"#4cbb17",
                                    opacity:"1"
                                }}/>
                            </h4>
                        </li>
                        <li>
                            <Link to="/" >
                                <motion.a className='f-link'
                                    whileHover={{
                                        paddingLeft:"12px",
                                        transition:{duration:0.2}
                                    }}
                                >Home</motion.a>
                            </Link>
                        </li>
                        <li>
                            <Link to="/a" >
                                <motion.a className='f-link'
                                    whileHover={{
                                        paddingLeft:"12px",
                                        transition:{duration:0.2}
                                    }}
                                >About Us</motion.a>
                            </Link>
                        </li>
                        <li>
                            <Link to="/e" >
                                <motion.a className='f-link'
                                    whileHover={{
                                        paddingLeft:"12px",
                                        transition:{duration:0.2}
                                    }}
                                >Events</motion.a>
                            </Link>
                        </li>
                        <li>
                            <Link to="/s">
                                <motion.a className='f-link'
                                    whileHover={{
                                        paddingLeft:"12px",
                                        transition:{duration:0.2}
                                    }}
                                >Sponsors</motion.a>
                            </Link>
                        </li>
                        <li>
                            <Link to="/h">
                                <motion.a className='f-link'
                                    whileHover={{
                                        paddingLeft:"12px",
                                        transition:{duration:0.2}
                                    }}
                                >Highlights</motion.a>
                            </Link>
                        </li>
                        <li>
                            <Link to="/t/night">
                                <motion.a className='f-link'
                                    whileHover={{
                                        paddingLeft:"12px",
                                        transition:{duration:0.2}
                                    }}
                                >TechNights</motion.a>
                            </Link>
                        </li>
                        <li>
                            <Link to="/policy" >
                                <motion.a className='f-link'
                                    whileHover={{
                                        paddingLeft:"20px",
                                        transition:{duration:0.2}
                                    }}
                                >Privacy Policy</motion.a>
                            </Link>
                        </li>
                        <li>
                            <Link to="/terms" >
                                <motion.a className='f-link'
                                    whileHover={{
                                        paddingLeft:"12px",
                                        transition:{duration:0.2}
                                    }}
                                >
                                    Terms and Conditions
                                </motion.a>
                            </Link>
                        </li>
                        <li>
                            <Link to="/cancellation" >
                                <motion.a className='f-link'
                                    whileHover={{
                                        paddingLeft:"12px",
                                        transition:{duration:0.2}
                                    }}
                                >
                                    Cancellation policy
                                </motion.a>
                            </Link>
                        </li>
                    </ul>
                    <ul className='col-md-4 col-sm-5 footer-col-2'>
                        <li>
                            <h4 className='profiles-heading'>Developers' github profile</h4>
                            <hr style={{
                                border:"none",
                                height:"3px",
                                width:"30%",
                                backgroundColor:"#e91e63",
                                opacity:"1"
                            }}/>
                        </li>
                        <li>
                            <Link to="https://github.com/aaravjn">
                                <motion.a className="aarav f-link"
                                    whileHover={{
                                        paddingLeft:"12px",
                                        transition:{duration:0.2}
                                    }}
                                >Aarav Jain</motion.a>
                            </Link>
                        </li>
                        <li>
                            <Link to="https://github.com/kapiswayprakhar15" >
                                <motion.a className='f-link'
                                    whileHover={{
                                        paddingLeft:"12px",
                                        transition:{duration:0.2}
                                    }}
                                >Prakhar Kapisway</motion.a>
                            </Link>
                        </li>{" "}
                        <li>
                            <Link to="https://github.com/yshubham8419" >
                                <motion.a className='f-link'
                                    whileHover={{
                                        paddingLeft:"12px",
                                        transition:{duration:0.2}
                                    }}
                                >Shubham Yadav</motion.a>
                            </Link>
                        </li>
                    </ul>
                    <div className="col-md-4" style={{
                        paddingLeft:"10%",
                    }}>
                        <img
                            src={require("../../assets/logo.png")}
                            alt="Footer Head Logo"
                            style={{height:"200px", width:"200px"}}
                        />
                        <p style={{fontWeight:"bold"}}>Technunctus</p>
                        <p>Indian Institute of Technology, Jammu</p>
                        <p className="text-sm">
                            Jagti, NH-44 , PO Nagrota
                            <br />
                            Jammu - 181 221 J&K, India
                            <br />
                            Tel.: 0191-2570381{" "}
                        </p>
                        <ul className='social-links' style={{textAlign:"left", paddingLeft:"0px"}}>
                            <li>
                                <Link to="https://www.iitjammu.ac.in/" >   
                                    <img src={require("../../assets/icons/web-logo.png")} alt="iitjammuicon" style={{height:"35px", width:"35px"}}/>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="https://www.linkedin.com/school/iitjammu/?originalSubdomain=in"
                                >
                                    <img src={require("../../assets/icons/linkedin.png")} alt="linkedinicon"/>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="https://twitter.com/IITJammu?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
                                >
                                    <img src={require("../../assets/icons/twitter.png")} alt="twittericon" />
                                </Link>
                            </li>{" "}
                            <li>
                                <Link
                                    to="https://www.facebook.com/IITJammuOfficial/"
                                >
                                    <img src={require("../../assets/icons/facebook.png")} alt="facebookicon" />
                                </Link>
                            </li>{" "}
                            <li>
                                <Link
                                    to="https://www.instagram.com/technunctus/"
                                >
                                    <img src={require("../../assets/icons/insta.png")} alt="instaicon" />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </footer >
        </>
    )
}
