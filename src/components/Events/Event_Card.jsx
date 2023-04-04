import "../../css/event_card.scss"
import "../../css/event_card.css"
import {React } from 'react'
import { motion } from "framer-motion"

const CompetitionCard = ({Key, Event_Name, Domain, Mode, Release_Date, Description, Register_link, Poster, More}) => {
    return (
    <>
    <div class="nft">
        <div className='main'>
            <div style={{height:"250px", width:"100%", overflow:"hidden", borderRadius:".5rem"}}>
            <motion.img className='tokenImage'
                whileHover={{
                    scale: 1.2,
                    transition:{ duration : 1}
                }}
                src={ Poster == "#" ? "https://images.unsplash.com/photo-1597733336794-12d05021d510?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHRlY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" : Poster }
            />
            </div>
            <h3>{Event_Name}</h3>
            <hr />
            <p class='description'>{Description}</p>
            <div class='tokenInfo'>
                <div class="duration">
                    <p style={{marginBottom:"0px"}}><span>◷ </span>{Release_Date}</p>
                </div>
                <p style={{marginBottom:"0px"}}><span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16">
                    <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
                    <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                    </svg>
                    </span>
                {" "+Mode}
                </p>
            </div>
            <div 
                style={{
                    width:"100%", 
                    textAlign:"center", 
                    position:"absolute",
                    bottom:"5px",
                    right:"0px"
                }}
            >
                <span style={{display:(More === "#") ? "none" : "block"}}>
                <a href={More === '#' ? "https://unstop.com/festival/technunctus-23-indian-institute-of-technology-iit-jammu-119595" : More} className="card-buttons" style={{width:"100%", textDecoration:"none"}}>
                    <button className="btn d-block" style={{width:"100%", color:"#0a6ba8"}}>MORE</button>
                </a>
                </span>
                
                <span style={{display:(Register_link === "#") ? "none" : "block"}}>
                <a href={Register_link === "#" ? "https://unstop.com/festival/technunctus-23-indian-institute-of-technology-iit-jammu-119595" : Register_link} className="card-buttons" style={{width:"100%", textDecoration:"none"}}>
                    <button className="btn d-block" style={{width:"100%", color:"#0a6ba8", marginTop:"5px"}}>REGISTER</button>
                </a>
                </span>
            </div>
        </div>
    </div>
  </>
    )
}

export default CompetitionCard