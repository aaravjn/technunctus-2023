import TeamCard from "../components/Team/TeamCard"
import Navbar from "../components/navbar";
import Footer from "../components/Footer/footer";
import team_data from "../data/team_data"
import Tilt from 'react-parallax-tilt'

const Team = () => {
    return (
        <div 
        style={{
            overflowX:"hidden",
        }}>
            <img style={{
                width:"100%",
                height:"100vh",
                position:"fixed",
                zIndex:"-1"
            }}
            src={require("../assets/team_bg.png")}/>

            <div style={{
                width:"100%", 
                height:"100vh",
                display:"flex",
                justifyContent:"center",
                alignItems:"center"
            }}>
                <h1>
                    Our Team
                </h1>
            </div>

            <Navbar />
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
            {team_data.slice(1,5).map((item, index) => {
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
            {team_data.slice(5,).map((item, index) => {
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