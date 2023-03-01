import Navbar from "../components/navbar"
import Footer from "../components/Footer/footer"
import Paragraph from "../components/paragraph/Paragraph"
import "../css/about.css"

const About = () => {
    return (
        <>
            <Navbar />
            <div className="about-us">
                <div className="row" style={{
                    width:"100%",
                    height:"100vh"
                }}>
                    <div className="col about-us-heading">
                        <h1 style={{fontSize:"5em"}}>About Us</h1>
                    </div>
                </div>    
            </div>
            <div className="about-iitjammu" style={
                {
                    width:"100%",
                    height:"100vh"
                }
            }>
                <Paragraph image={require("../assets/campus.png")} title={"About IIT Jammu"} content={"Established in 2016, The prestigious institute of IIT - Jammu has rightfully earned the title of the fastest prospering amongst the budding IITs. With its unparalleled vigour and a thirst to prove its mettle, the institute has swiftly risen up the ranks to lead its fellow tertiary kin Unbounded by constraints of any pre- established agendas whilst nurturing the pioneers of the near future, Indian Institute of Technology Jammu commands complete freedom of moulding and reshaping its own fate, a belief that the establishment is a staunch supporter of. With this idea in our hearts and the will in our minds, we inch consistently towards being the most reputed college in the country. Thriving for excellence and quality, IIT-Jammu prides itself in aiding the development of the brightest minds of the nation whilst upholding its values of trust, integrity and growth. IIT Jammu is walking on the path of becoming one of the biggest institutions of the country and soon will reach its destination. We welcome you to our campus with all our heart to be a part of the IIT Jammu family!"}/>
            </div>
            <div style={{height:"100vh", paddingTop:"15%"}}>
                <Paragraph align={"right"} title={"About the fest"} content={"Technunctus'23 is a platform for students to manifest their talents by working on challenging problems and to learn and grow from the various talks given by industry experts on contemporary topics and issues. It boasts having more than two dozen events from a multitude of fields like robotics, astronomy, finance, programming and so forth spread across 3 days of engagement, excitement and illumination. It is a pan-India event with participants from all IITs and NITs as well as reputed colleges from Jammu and Kashmir."}/>            
            </div>
            <Footer />
        </>
    )
}

export default About