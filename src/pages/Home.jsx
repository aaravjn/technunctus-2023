import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
//Components

import Navbar from "../components/navbar";
import Footer from "../components/Footer/footer";
import Paragraph from "../components/paragraph/Paragraph"
import "../css/home.css"
import YoutubeVideo from "../components/youtubeVideo"

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
    <div>
      <Navbar />
      <img src={require("../assets/home_bg.png")} style={{
        width:"100%",
        height:"100vh",
        position:"fixed",
        zIndex:"-1"
      }} />
      <div className="title-box">
        <div className="title text-center">
          <p style={{color:"#ffde59", fontSize:"1.5em"}}>IIT Jammu Presents</p>
          <h1 style={{fontSize:"6em", height:"1.3em"}}><span style={{position:"relative", left:"10px"}}>Technunc</span><span><img src={require("../assets/white_logo.png")} style={{height:"1.5em", width:"1.3em", position:"relative", bottom:"45px"}}/></span><span style={{position:"relative", right:"10px"}}>us</span></h1>
          <p style={{color:"#ffde59", fontSize:"1.5em"}}>IGNITING THE TECH REVOLUTION || 7<sup>th</sup> - 9<sup>th</sup> APRIL 2023</p>
        </div>
      </div>
      <div className="theme">
        <Paragraph title={"Theme"} image={require("../assets/theme_img.jpg")} content={"Traversing through the cosmic millennium, we stumble across a distant planet exuding a glitzy vibe. Its tantalizing aura beckons you to surrender yourself to its enticement. Before you lies a symphony of the celestials; Multitudes of watchful eyes throughout the years behold before themselves alongside, the essence of light and color thronging through the air; The brilliance around tempts you to come closer, to drench yourself in its warm embrace. Being drawn towards its ethos is nigh inevitable. So come ushering into this lavish ambience of flamboyance & synergy and immerse yourself within the realms of the future to experience technology like never before."} />
      </div>
      <div className="team-word">
        <Paragraph title={"Word from team"} align={"right"} image={require("../assets/team_img.jpg")} content={"Technunctus'23 is a platform for students to manifest their talents by working on challenging problems and to learn and grow from the various talks given by industry experts on contemporary topics and issues. It boasts having more than two dozen events from a multitude of fields like robotics, astronomy, finance, programming and so forth spread across 3 days of engagement, excitement and illumination. It is a pan-India event with participants from all IITs and NITs as well as reputed colleges from Jammu and Kashmir."}/>
      </div>
      <h1 style={{
        fontFamily: "Spaceboards",
        width:"100%",
        textAlign:"center",
        marginBottom:"1em"
      }}
      >Our Sponsors</h1>
      <h1 style={{
          textAlign:"center"
        }}
        >Socials & FAQs</h1>
        <div style={{
          marginTop:"2em", 
          width:"90%",
          marginBottom:"2em",
          marginLeft:"auto",
          marginRight:"auto",
          boxShadow:"0 7px 20px 5px #00000088"
        }}>
          <Slider {...setting}>
            <YoutubeVideo embedId={"UBOHA9a5NIQ"}/>          
            <YoutubeVideo embedId={"UBOHA9a5NIQ"}/>          
            <YoutubeVideo embedId={"UBOHA9a5NIQ"}/>          
            <YoutubeVideo embedId={"UBOHA9a5NIQ"}/>          
          </Slider>
        </div>

        
      <Footer/>
    </div>
  );
};
export default Home;


