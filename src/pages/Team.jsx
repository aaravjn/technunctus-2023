import TeamCard from "../components/Team/TeamCard"
import Navbar from "../components/navbar";
import Footer from "../components/Footer/footer";
import team_data from "../data/team_data"
import Tilt from 'react-parallax-tilt'
import "../css/team.css"

const Team = () => {
    return (
        <div 
        style={{
            overflowX:"hidden",
        }}
        >
            <Navbar />
            <div style={{
                position:"absolute", 
                top:"0px",  
                zIndex:"2", 
                width:"100%", 
                height:"100vh",
                display:"flex",
                justifyContent:"center",
                alignItems:"center",
                backgroundColor:"rgba(0, 0, 0, .2)",
            }}>
                <h1 className="our-team-heading" style={{fontFamily:"MullerBold", fontSize:"5em", textAlign:"center"}}>OUR TEAM</h1>
            </div>
            
            <div className="team-header" style={{
                width:"100%",
                height:"100vh",
                zIndex:"1",
            }}> 
            </div>
            
            <img style={{
                width:"100%",
                height:"100vh",
                zIndex:"-1",
                position:"fixed",
                top:"0px",
                left:"0px",
                opacity:"0.4"  
            }}
            src={require("../assets/team_rest_bg.jpg")} />
            
            <h2 style={{
                paddingTop:"4em",
                width:"100%",
                textAlign:"center",
                marginBottom:"2em"
            }}
            
            >Chairperson</h2>
            <div style={{
                display:"flex",
                justifyContent:"center",
                textAlign:"center",
                overflowWrap:"break-word"
            }}>
            {team_data.slice(0,1).map((item, index) => {
                return (
                    <Tilt style={{display:"inline-block"}} tiltMaxAngleX={"7"} tiltMaxAngleY={"7"}>
                        <TeamCard {...item} />
                    </Tilt>
                )
            })}
            </div>
            <h2 style={{
                width:"100%",
                textAlign:"center",
                marginBottom:"2em"
            }}
            >Convenors</h2>
            <div style={{
                textAlign:"center",
                overflowWrap:"break-word"
            }}>
            {team_data.slice(1,6).map((item, index) => {
                return (
                    <Tilt style={{display:"inline-block"}} tiltMaxAngleX={"7"} tiltMaxAngleY={"7"}>
                        <TeamCard {...item} />
                    </Tilt>
                )
            })}
            </div>
            <h2 style={{
                width:"100%",
                textAlign:"center",
                marginBottom:"2em"
            }}
            >Team Heads</h2>
            <div style={{
                textAlign:"center",
                overflowWrap:"break-word"
            }}>
            {team_data.slice(6,).map((item, index) => {
                return (
                    <Tilt style={{display:"inline-block"}} tiltMaxAngleX={"7"} tiltMaxAngleY={"7"}>
                        <TeamCard {...item} />
                    </Tilt>
                )
            })}
            </div>
            <Footer />
        </div>
        
    )
}

export default Team