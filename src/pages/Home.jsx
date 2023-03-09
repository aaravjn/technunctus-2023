import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Navbar from "../components/navbar";
import Footer from "../components/Footer/footer";
import "../css/home.css"
import YoutubeVideo from "../components/youtubeVideo"
import { motion } from "framer-motion"
import youtube from "../data/youtube"
import instagra_posts from "../data/instagram"
import EventCard from "../components/Events/Event_Card"
import { borderRight } from "@mui/system";
import {eventsData} from "../data/events_data"

const Home = () => {
  const setting = {
    centerMode: true,
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
  return (
    <div style={{overflowX:"hidden"}}>
      <Navbar />
      <div className="title-box">
        <div className="title text-left"
          style={{
            position:"absolute",
            left:"10%",
          }}
        >
          <p style={{color:"#fff", fontSize:"1.5em", fontFamily:"Josefin sans"}}>IIT Jammu Presents</p>
          
          <h1 style={{fontSize:"4.5em", height:"1.3em"}}><span>Technunc</span>
          <span><img src={require("../assets/title_logo.png")} 
          style={{
            height:"1.5em", 
            width:"2.5em", 
            position:"relative", 
            bottom:"40px",
            right:"50px",
            }}/></span>
          <span style={{position:"relative", right:"95px"}}>us</span></h1>
          
          <p style={{color:"#fff", fontSize:"2em", fontFamily:"Benedict"}}>Igniting the tech revolution <span style={{fontFamily:"Josephin Sans", fontSize:"0.7em"}}>|| 7<sup>th</sup> - 9<sup>th</sup> APRIL 2023</span></p>
        </div>
      </div>


      <div className="about-us">
        <motion.div className="row"
          initial={{opacity:0}}
          whileInView={{opacity:1}}
          transition={{duration:0.8}}
          style={{
            minHeight:"100vh",
            width:"100%",
            paddingTop:"7%"
          }}
        >
          <div className="col" style={{paddingLeft:"10%", paddingTop:"5%"}}>
            <img src={require("../assets/logo.png")} style={{
              height:"70%",
              width:"60%"
            }}/>
          </div>
          <div className="col">
              <h1 style={{width:"100%", textAlign:"right", fontFamily:"Stopmotion", fontSize:"4em", marginBottom:"1em"}}>About</h1>
              <p className="container-fluid" style={{fontFamily:"ABeeZee", fontSize:"1.2em"}}>
                Technunctus'23 is a platform for students to manifest their talents by working on challenging problems and to learn and grow from the various talks given by industry experts on contemporary topics and issues. It boasts having more than two dozen events from a multitude of fields like robotics, astronomy, finance, programming and so forth spread across 3 days of engagement, excitement and illumination. It is a pan-India event with participants from all IITs and NITs as well as reputed colleges from Jammu and Kashmir.              
              </p>
          </div>
        </motion.div>
      </div>
      
    <div className="theme">
      <motion.div className="row"
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:0.8}}
      >
        <div className="col paragraph-box">
            <h1>Theme</h1>
            <p className="content-box">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime earum pariatur nulla non. Obcaecati eum amet veritatis doloremque sint, consectetur doloribus tempora aliquid aperiam fuga iure nihil molestias harum facilis!</p>
        </div>
        <div className="col">
          <YoutubeVideo embedId={"tCoJ8lzj1-s"} width={"580"} height={"380"}/>
        </div>
      </motion.div>
    </div>
      
      <div style={{
        width:"100%",
        minheight:"100vh",
        textAlign:"center",
        paddingBottom:"2em"
      }}
      className="events"
      >
        <h1 style={{width:"100%", paddingTop:"2em"}}>Some of our Events</h1>
        <EventCard {...eventsData[0]}/>
        <EventCard {...eventsData[1]}/>
        <EventCard {...eventsData[2]}/>
        
        <a href="/Events" style={{textDecoration:"none"}}>
          <motion.button 
          className="btn"
          whileHover={{scale:1.1}}
          style={{
            width:"200px",
            height:"75px",
            display:"block",
            margin:"auto",
            marginTop:"2em",
            border:"2px solid",
            color:"#39FF14",
            fontSize:"1.5em",
            borderImage:"linear-gradient(#f6b73c, #4d9f0c) 30"
          }}
          
          >
          Load More...
          </motion.button>
        </a>

      </div>



      <h1 style={{
        fontFamily: "Spaceboards",
        width:"100%",
        textAlign:"center",
        marginBottom:"1em",
        marginTop:"5%"
      }}
      >Our Sponsors</h1>
      <div style={{
        minWidth:"100%",
        minHeight:"100vh"
      }}>
      </div>

      <div style={{minWidth:"100%", minHeight:"100vh"}}>
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
      </div>

      <Footer/>
    </div>
  );
};


export default Home;