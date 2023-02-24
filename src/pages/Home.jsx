import React from "react";
//Components
import Navbar from "../components/navbar";
import Footer from "../components/Footer/footer";
import Team from "../components/Team/team";
import Paragraph from "../components/paragraph/Paragraph"

import "../css/home.css"
import logo from "../assets/logo.png"

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="title-box row">
        <div className="col ms-5">
          <img src={logo} alt="logo" className="technun-logo"/>
        </div>
        <div className="title col text-center me-5">
          <p>IIT Jammu Presents</p>
          <h1>Technunctus</h1>
          <p>2023</p>
        </div>
      </div>
      <div className="theme">
        <Paragraph title={"Theme"} image={require("../assets/theme_img.jpg")} content={"Traversing through the cosmic millennium, we stumble across a distant planet exuding a glitzy vibe. Its tantalizing aura beckons you to surrender yourself to its enticement. Before you lies a symphony of the celestials; Multitudes of watchful eyes throughout the years behold before themselves alongside, the essence of light and color thronging through the air; The brilliance around tempts you to come closer, to drench yourself in its warm embrace. Being drawn towards its ethos is nigh inevitable. So come ushering into this lavish ambience of flamboyance & synergy and immerse yourself within the realms of the future to experience technology like never before."} />
      </div>
      <div className="team-word">
        <Paragraph title={"Word from team"} align={"right"} image={require("../assets/team_img.jpg")} content={"aarav"}/>
      </div>
      <Footer/>
    </div>
  );
};

export default Home;

