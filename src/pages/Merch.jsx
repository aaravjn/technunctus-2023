import Navbar from "../components/navbar";
import Footer from "../components/Footer/footer";
import { motion } from "framer-motion"

const Merch = () => {
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
        <div style={{overflowX:"hidden",
        paddingTop:"2em"}}>
        <Navbar />
        <div style={{textAlign:"center"}} id="merchandise">
     
     <img src={require("../assets/merchandise.png")} alt="" style={{width:"100%", height:"auto", marginTop:"4em", marginBottom:"3em"}} className="merch-big"/>
     <img src={require("../assets/merchandise_1_M.png")} alt="" style={{width:"100%", height:"auto", marginTop:"4em", marginBottom:"3em", display:"none"}} className="merch-m"/>
     <img src={require("../assets/merchandise_2_M.png")} alt="" style={{width:"100%", height:"auto", marginTop:"4em", marginBottom:"3em", display:"none"}} className="merch-m"/>
   
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
           marginTop:"1em",
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
        
        <Footer />
        </div>
    )
}

export default Merch