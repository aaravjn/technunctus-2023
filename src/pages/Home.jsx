import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";
import Navbar from "../components/navbar";
import Arrow from "../components/arrow";
import Footer from "../components/Footer/footer";
import "../css/home.css"
import YoutubeVideo from "../components/youtubeVideo"
import { motion } from "framer-motion"
// import youtube from "../data/youtube"
// import instagra_posts from "../data/instagram"
import EventCard from "../components/Events/Event_Card"
import {eventsData} from "../data/events_data"
import DataCard from "../components/DataCard"

import logo from "../assets/white_logo.png"
import logo2 from "../assets/shadow_technunctus_logo.png"
import { Box } from '@mui/material'
 

const Home = () => {
  const setting = {
    infinite: true,
    centerMode:true,
    centerPadding: "30px",
    slidesToShow: 3,
    speed: 1000,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true

  };
  const buttonGradients = {
    hover : {
      borderColor:"#0bc8d2",
      // background:"-webkit-linear-gradient(96deg, rgba(14,31,145,1) 0%, rgba(22,212,198,1) 100%)",
      WebkitBackgroundClip:"text",
      WebkitTextFillColor:"transparent",
      scale:1.1
    }
  }
  return (
    <div style={{ overflowX: "hidden" }}>
      {/* Navbar */}
      <Navbar />
      <Arrow />




      {/* Home */}
      <div className="title-box">
        <img src={require("../assets/home_bg.jpg")} alt="bg"
          className="title-box-bg"
          style={{ objectFit: "cover", position: "absolute", top: "0px", right: "0px", height: "100vh", width: "100vw", zIndex: "-1" }}
        />
        <div className="title text-left"
        >
          <div style={{ color: "#fff", fontSize: "1.5em", fontFamily: "Josefin sans" }}>IIT Jammu Presents</div>
          <div className="namecontainer">
            <h1 style={{ fontSize: "4.5em", height: "1.3em" ,transform: "translate(0px , 0px)"}}>Technunc</h1>
            <a href="/Events"><div className="logoDiv">
                               
                <motion.div
                animate={{ y: 9  }}

                
                transition={{
                  ease: "easeInOut",
                  repeat: Infinity,
                  duration: 1.25,
                  repeatType: "reverse",
                }}
              >
                
                <Box 
                  component='img'
                  sx={{ height: 150,
                        width: 150,  
                        transform: "translate(-38px , -80px)",
                        '@media screen and (max-width: 700px)': {
                                                                      height: 120,
                                                                      width: 120,
                                                                      transform: "translate(-23px , -80px)",
                  },
                  '@media screen and (max-width: 450px)': {
                                                                      height: 100,
                                                                      width: 100,
                                                                      transform: "translate(-27px , -75px)",
                  },

              }}
                  alt="logo"
                  src={logo}
                />
               
              </motion.div>  
              <Box
                  component='img'
                  sx={{ height: 250, 
                        width: 250, 
                        transform: "translate(-88px , -300px)" , 
                        '@media screen and (max-width: 700px)': {
                                                                        height: 200,
                                                                        width: 200, 
                                                                        transform: "translate(-62px , -253px)"
                  },
                  '@media screen and (max-width: 450px)': {
                                                                        height: 150,
                                                                        width: 150, 
                                                                        transform: "translate(-52px , -203px)"
                  },
              }}
              href="https://unstop.com/festival/technunctus-23-indian-institute-of-technology-iit-jammu-119595"

                  alt="logo2"
                  src={logo2}
                />
              
              </div> 
              </a>
              <h1 className = "us" style={{ fontSize: "4.5em", height: "1.3em"  , width : "1em"
      ,}}>us</h1>
          </div>

          <div
            style={{ color: "#fff", fontSize: "2em", fontFamily: "Benedict" }}
            className="theme-title"
          >
            Igniting the Tech Revolution 
            <span className="ignite" style={{ fontFamily: "Josephin Sans", fontSize: "0.7em" }}>         || 7<sup>th</sup> - 9<sup>th</sup> APRIL 2023</span></div>
        </div>
      </div> 









{/* Pro Night */}

<div style={{
            textAlign:"center"
        }}>
        <h1 style={{width:"100%", paddingTop:"1em", color:"#ffde59", fontFamily:"Stopmotion", fontSize:"4em", marginBottom:"1em"}} className="pro-heading">ProNights</h1>

        <img src={require("../assets/pro-big.png")} alt="" style={{width:"100%", height:"auto", marginTop:"4em", marginBottom:"3em"}} className="image-big"/>
        <img src={require("../assets/pro-m.png")} alt="" style={{width:"100%", height:"auto", marginTop:"4em", marginBottom:"3em", display:"none"}} className="image-m"/>

        <a href="https://forms.gle/FJCMxWZJ7LRnkPyG6" style={{textDecoration:"none"}}>
          <motion.button
          className="btn gradient-button"
          variants={buttonGradients}
          whileHover="hover"
          style={{
            width:"200px",
            height:"75px",
            margin:"auto",
            marginTop:"1em",
            marginBottom:"3em",
            fontSize:"1.5rem",
            borderRadius:"10px",
            border:"2px solid",
            borderColor:"#c21842",
            background:"-webkit-linear-gradient(216deg, rgba(176,11,210,1) 0%, rgba(194,24,66,1) 35%, rgba(14,30,219,1) 100%)",
            WebkitBackgroundClip:"text",
            WebkitTextFillColor:"transparent",
          }}
          transition={{duration:0.3}}
          
          >
          Buy Tickets
          </motion.button>
        </a>
        </div>













{/* About Us  */}
    <div className="about-us"
        style={{
          minHeight:"100vh",
          width:"100%",
          paddingTop:"7%",
          paddingRight:"5%",
          zIndex:"1"
        }}>
        <motion.div className="row"
          initial={{opacity:0}}
          whileInView={{opacity:1}}
          transition={{duration:0.8}}
        >
          <div className="col-md-5 col-sm-6"></div>
          <div className="col-md-7 col-sm-6">
              <h1 style={{width:"100%", textAlign:"right", fontFamily:"Stopmotion", fontSize:"4em", color:"#ffde59"}}>About</h1>
              <p className="container-fluid" style={{fontFamily:"ABeeZee", fontSize:"1.2em", textAlign:"justify"}}>
                Technunctus'23 is a platform for students to manifest their talents by working on challenging problems and to learn and grow from the various talks given by industry experts on contemporary topics and issues. It boasts having more than two dozen events from a multitude of fields like robotics, astronomy, finance, programming and so forth spread across 3 days of engagement, excitement and illumination. It is a pan-India event with participants from all IITs and NITs as well as reputed colleges from Jammu and Kashmir.
              </p>
          </div>
        </motion.div>
    </div>
      







  {/* Theme */}
    <div className="theme">
      <motion.div className="row"
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:0.8}}
      >
        <div className="col-md-6 col-sm-12 theme-content" style={{paddingLeft:"0", marginLeft:"1em"}}>
            <h1 style={{fontFamily:"Stopmotion", fontSize:"4em", color:"#ffde59", marginTop:"10%"}}>Theme Reveal</h1>
            <p style={{fontFamily:"ABeeZee", fontSize:"1.2em", marginBottom:"0px", textAlign:"justify"}}>
              Technology is constantly improving and evolving, with new advancements being made constantly. Right from the launch of the internet to the significant developments in the fields of Cloud Computing, IoT, Artificial Intelligence, Blockchain, etc., technology has come a long way, and it will continue to improve and evolve as new advancements are made.
              To pioneer this revolution and boost everyone’s passion for technology, the theme for Technunctus this year is - <span style={{fontWeight:"900"}}>IGNITING THE TECH REVOLUTION</span>. It calls all young minds to create, innovate and take risks. Technunctus’23 is the perfect platform to showcase new ideas and push the boundaries of what is possible at events and competitions on emerging technologies.
            </p>
        </div>

        <div className="col-md-5 yt-video-col" style={{display:"flex", justifyContent:"center", marginLeft:"3em"}}>
          <div className="youtube-video" style={{width:"100%", height:"60%", marginTop:"10em"}}>
            <YoutubeVideo embedId={"tCoJ8lzj1-s"}/>
          </div>
        </div>
      
      </motion.div>
    </div>










    
    
    {/* GLIMPSE OF TECHNUNCTUS'22 */}
    <div className="row glimpse" style={{minHeight:"100vh", width:"100vw", paddingTop:"3%", margin:"0"}}>
      <div className="prev-data col-lg-6 col-md-12" style={{paddingRight:"0", paddingLeft:"0"}}>
        <h1 className="glimpse-heading" style={{fontFamily:"Stopmotion", color:"#ffde59", marginBottom:"1em", marginLeft:"0.7em", fontSize:"4em"}}><span style={{fontFamily:"ABeeZee", fontWeight:"bold", color:"white", fontSize:"0.5em"}}>GLIMPSE OF</span> <br/> TECHNUNCTUS'22</h1>
        <div style={{display:"flex", justifyContent:"space-evenly"}}>
          <DataCard image={"/DataIcons/participants.png"} numbers={"3000"} heading={"Participants"} extras={""}/>
          <DataCard image={"/DataIcons/university.png"} numbers={"100"} heading={"Colleges"} extras={""}/>
          <DataCard image={"/DataIcons/prize pool.png"} numbers={"3"} heading={"Worth Prizes"} extras={"L"}/>
        </div>
        <div style={{display:"flex", justifyContent:"space-evenly"}}>
          <DataCard image={"/DataIcons/sponsors.png"} numbers={"10"} heading={"Sponsors"} extras={""}/>
          <DataCard image={"/DataIcons/speakers.png"} numbers={"30"} heading={"Speakers"} extras={""}/>
          <DataCard image={"/DataIcons/events.png"} numbers={"20"} heading={"Events"} extras={""}/>
        </div>
      </div>
    </div>
    
    
    


    {/* Events */}
    <div style={{
        width:"100%",
        minheight:"100vh",
        textAlign:"center",
        paddingBottom:"2em"
      }}
      className="events"
    >
        <h1 className="events-heading" style={{width:"100%", paddingTop:"1em", color:"#ffde59", fontFamily:"Stopmotion", fontSize:"4em", marginBottom:"1em"}}>Events</h1>
        <EventCard {...eventsData[10]}/>
        <EventCard {...eventsData[11]}/>
        <EventCard {...eventsData[20]}/>
        <div>
        <a href="/Events" style={{textDecoration:"none"}}>
          <motion.button
          className="btn gradient-button"
          variants={buttonGradients}
          whileHover="hover"
          style={{
            width:"200px",
            height:"75px",
            margin:"auto",
            marginTop:"2em",
            fontSize:"1.5em",
            borderRadius:"10px",
            border:"2px solid",
            borderColor:"#c21842",
            background:"-webkit-linear-gradient(216deg, rgba(176,11,210,1) 0%, rgba(194,24,66,1) 35%, rgba(14,30,219,1) 100%)",
            WebkitBackgroundClip:"text",
            WebkitTextFillColor:"transparent",
          }}
          transition={{duration:0.3}}
          
          >
          Load More...
          </motion.button>
        </a>
        </div>
    </div>
      









 {/* <h3>Merchandise</h3> */}
    <div style={{textAlign:"center"}} id="merchandise">
     
      <img src={require("../assets/merchandise.png")} alt="" style={{width:"100%", height:"auto", marginTop:"4em", marginBottom:"3em"}} className="image-big"/>
      <img src={require("../assets/merchandise_1_M.png")} alt="" style={{width:"100%", height:"auto", marginTop:"4em", marginBottom:"3em", display:"none"}} className="image-m"/>
      <img src={require("../assets/merchandise_2_M.png")} alt="" style={{width:"100%", height:"auto", marginTop:"4em", marginBottom:"3em", display:"none"}} className="image-m"/>
    
      <div>
        <a href="https://forms.gle/JwaCQEUADeVURsVx8" style={{textDecoration:"none"}}>
          <motion.button
          className="btn gradient-button"
          variants={buttonGradients}
          whileHover="hover"
          style={{
            width:"200px",
            height:"75px",
            margin:"auto",
            marginTop:"2em",
            fontSize:"1.5rem",
            borderRadius:"10px",
            border:"2px solid",
            borderColor:"#c21842",
            background:"-webkit-linear-gradient(216deg, rgba(176,11,210,1) 0%, rgba(194,24,66,1) 35%, rgba(14,30,219,1) 100%)",
            WebkitBackgroundClip:"text",
            WebkitTextFillColor:"transparent",
          }}
          transition={{duration:0.3}}
          
          >
          Buy Now
          </motion.button>
        </a>
      </div>
    </div>









{/* Sponsors */}
    <div 
      className="sponsors-cont"
      style={{
        minWidth:"100%",
        minHeight:"100vh",
        textAlign:"center",
      }}>
          <h1 style={{
          fontSize:"4em",
          fontFamily: "Stopmotion",
          width:"100%",
          textAlign:"center",
          marginTop:"5%",
          color:"#ffde59"
        }}
        >Our Sponsors</h1>
        <div style={{marginTop:"3em", marginBottom:"3em"}}>
          <h3 style={{fontFamily:"MullerBold", fontSize:"2.5em", marginBottom:"1em"}}> TITLE SPONSOR </h3>
          <img src={require("../assets/sponsor_logo/arista.png")} style={{width:"20em", height:"15em"}} alt="" />
        </div>

        {/* <div style={{marginTop:"3em", marginBottom:"3em"}}>
          <h3 style={{fontFamily:"MullerBold", fontSize:"2.5em", marginBottom:"1em"}}> DIAMOND SPONSOR </h3>
          <img src={require("../assets/sponsor_logo/arista.png")} style={{width:"20em", height:"15em"}} alt="" />
        </div> */}

        <div>
          <a href="/Sponsors" style={{textDecoration:"none"}}>
            <motion.button
            className="btn gradient-button"
            variants={buttonGradients}
            whileHover="hover"
            style={{
              width:"200px",
              height:"75px",
              margin:"auto",
              marginTop:"2em",
              fontSize:"1.5rem",
              borderRadius:"10px",
              border:"2px solid",
              borderColor:"#c21842",
              background:"-webkit-linear-gradient(216deg, rgba(176,11,210,1) 0%, rgba(194,24,66,1) 35%, rgba(14,30,219,1) 100%)",
              WebkitBackgroundClip:"text",
              WebkitTextFillColor:"transparent",
            }}
            transition={{duration:0.3}}
            
            >
            See More...
            </motion.button>
          </a>
        </div>
      </div>
      
      {/* <div style={{minWidth:"100%", minHeight:"100vh"}}>
          <h1 style={{
            textAlign:"center"
          }}
          >OUR SOCIALS</h1>
          <div style={{
            marginTop:"2em", 
            width:"90%",
            marginBottom:"2em",
            marginLeft:"auto",
            marginRight:"auto",
            boxShadow:"0 7px 20px 5px #00000088"
          }}>
            <Slider {...setting}>
              {youtube.map((item, index) => {
                  return (
                      <YoutubeVideo embedId={item} width={"368"} height={"200"}/>
                  )
              })}
            </Slider>
          </div>
        
        <div style={{
          paddingRight:"1em",
          paddingLeft:"1em",
          overflowWrap:"break-word",
          textAlign:"center"
        }}>

          {instagra_posts.map((item, index) => {
            return (
              <iframe 
                width={"320"} 
                height={"460"} 
                src={`https://www.instagram.com/p/${item}/embed`} 
                frameborder="0"
                style={{borderRadius:"10px", margin:"1em"}}
              >
              </iframe>
            )
          })}
        </div>
      </div> */}






{/* Footer */}
      <Footer/>
    </div>
  );
};


export default Home;

