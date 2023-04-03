import { motion } from "framer-motion"
import Navbar from "../components/navbar";
import Footer from "../components/Footer/footer";


const ProNights = () => {
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
        <div
        style={{
            overflowX:"hidden"
        }}
        className="sponsors-cont"
        >
        <Navbar />
        <div style={{
            textAlign:"center"
        }}>
        <h1 style={{width:"100%", paddingTop:"1em", color:"#ffde59", fontFamily:"Stopmotion", fontSize:"4em", marginBottom:"1em"}}>ProNights</h1>

        <img src={require("../assets/pro-big.png")} alt="" style={{width:"100%", height:"auto", marginTop:"4em", marginBottom:"3em"}} className="image-big"/>
        <img src={require("../assets/pro-m.png")} alt="" style={{width:"100%", height:"auto", marginTop:"4em", marginBottom:"3em", display:"none"}} className="image-m"/>

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
          Buy Tickets
          </motion.button>
        </a>
        </div>
        <Footer />
        </div>
    )
}

export default ProNights;