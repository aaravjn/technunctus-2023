import React from "react";
//Components

import Navbar from "../components/navbar";
import Footer from "../components/Footer/footer";
import Paragraph from "../components/paragraph/Paragraph"

import "../css/home.css"
import logo from "../assets/logo.png"
import zIndex from "@mui/material/styles/zIndex";

const Home = () => {
  return (
    <div>
      <Navbar />
      <img src={require("../assets/header_bg.jpg")} style={{
        width:"100%",
        height:"100vh",
        position:"fixed",
        zIndex:"-1"
      }} />
      <div className="title-box row">
        <div className="col ms-5">
          <img src={logo} alt="logo" className="technun-logo"/>
        </div>
        <div className="title col text-center me-5">
          <p>IIT Jammu Presents</p>
          <h1 style={{fontSize:"4.5em"}}>Technunctus</h1>
          <p>IGNITING THE TECH REVOLUTION || 7<sup>th</sup> - 9<sup>th</sup> APRIL 2023</p>
        </div>
      </div>
      <div className="theme">
        <Paragraph title={"Theme"} image={require("../assets/theme_img.jpg")} content={"Traversing through the cosmic millennium, we stumble across a distant planet exuding a glitzy vibe. Its tantalizing aura beckons you to surrender yourself to its enticement. Before you lies a symphony of the celestials; Multitudes of watchful eyes throughout the years behold before themselves alongside, the essence of light and color thronging through the air; The brilliance around tempts you to come closer, to drench yourself in its warm embrace. Being drawn towards its ethos is nigh inevitable. So come ushering into this lavish ambience of flamboyance & synergy and immerse yourself within the realms of the future to experience technology like never before."} />
      </div>
      <div className="team-word">
        <Paragraph title={"Word from team"} align={"right"} image={require("../assets/team_img.jpg")} content={"Technunctus'23 is a platform for students to manifest their talents by working on challenging problems and to learn and grow from the various talks given by industry experts on contemporary topics and issues. It boasts having more than two dozen events from a multitude of fields like robotics, astronomy, finance, programming and so forth spread across 3 days of engagement, excitement and illumination. It is a pan-India event with participants from all IITs and NITs as well as reputed colleges from Jammu and Kashmir."}/>
      </div>
      <Footer/>
    </div>
  );
};

export default Home;


