import Navbar from "../components/navbar";
import Footer from "../components/Footer/footer";
import "../css/sponsors.css"

const Sponsors = () => {
    return (
        <div style={{overflowX:"hidden"}}>
        <Navbar />
        <div
        className="sponsors-cont"
        style={{
        minWidth:"100%",
        minHeight:"100vh",
        textAlign:"center",
        paddingTop:"3em"
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


        <div style={{marginTop:"3em", marginBottom:"3em"}}>
          <h3 style={{fontFamily:"MullerBold", fontSize:"2.5em", marginBottom:"1em"}}> ASSOCIATE SPONSORS </h3>
          <div style={{textAlign:"center"}}>
            <img src={require("../assets/sponsor_logo/cst.jpg")} alt="" style={{width:"20em", margin:"2em"}}/>
            <img src={require("../assets/sponsor_logo/jkbank.jpg")} alt="" style={{margin:"2em"}}/>
            <img src={require("../assets/sponsor_logo/netweb.png")} alt="" style={{margin:"1em", width:"20em"}}/>
            <img src={require("../assets/sponsor_logo/technomed.png")} alt="" style={{width:"10em", margin:"2em"}}/>
            <img src={require("../assets/sponsor_logo/indianoil.jpg")} alt="" style={{width:"12em", margin:"2em"}}/>
          </div>
        </div>


        <div style={{marginTop:"3em", marginBottom:"3em"}}>
          <h3 style={{fontFamily:"MullerBold", fontSize:"2.5em", marginBottom:"1em"}}> HOSPATILITY SPONSORS </h3>
          <div style={{textAlign:"center"}}>
            <img src={require("../assets/sponsor_logo/hari.jpeg")} alt="" style={{width:"20em", margin:"2em"}}/>
          </div>
        </div>


        <div style={{marginTop:"3em", marginBottom:"3em"}}>
          <h3 style={{fontFamily:"MullerBold", fontSize:"2.5em", marginBottom:"1em"}}> MOMENTO SPONSORS </h3>
          <div style={{textAlign:"center"}}>
            <img src={require("../assets/sponsor_logo/cosiq.jpg")} alt="" style={{width:"20em", margin:"2em"}}/>
          </div>
        </div>

        </div>

        <Footer />
        </div>
    )
}

export default Sponsors