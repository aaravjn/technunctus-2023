import React from 'react'
import { eventsData } from '../data/events_data'
import "../css/event.css"

//Components
import Navbar from "../components/navbar"
import Footer from "../components/Footer/footer"
import Card from "../components/Events/Event_Card"

const Event= () => {
  return (
    <div style={{overflowX:"hidden"}}>
      <Navbar />
      <div style={{
          position:"absolute", 
          top:"0px", 
          zIndex:"2", 
          width:"100%", 
          height:"100vh",
          display:"flex",
          justifyContent:"center",
          paddingTop:"8em",
          backgroundColor:"rgba(0, 0, 0, 0.3)",
        }}>
          <h1 className="event-heading" style={{fontFamily:"MullerBold", fontSize:"5em"}}>EVENTS</h1>
      </div>
      
      <img style={{
          width:"100%",
          height:"100vh",
          zIndex:"1",
          objectFit:"cover"
      }}
      src={require("../assets/events_header.jpg")}/>
      
      <img style={{
          width:"100%",
          height:"100vh",
          zIndex:"-1",
          position:"fixed",
          top:"0px",
          left:"0px",
          opacity:"0.6"  
      }}
      src={require("../assets/events_bg.jpg")} />
      
      <div>
        <h1 style={{paddingTop:"3em", marginBottom:"2em", fontFamily:"MullerBold", textAlign:"center"}}> Competitions</h1>
        
        <div style={{
          overflowWrap:"break-word",
          textAlign:"center"
        }}>
          {eventsData.slice(0,18).map((item, index) => {
              return (
                <Card {...item} />
              )
          })}
          
        </div>
      </div>
      <h1 style={{marginTop:"3em", marginBottom:"2em", fontFamily:"MullerBold", textAlign:"center"}}> WorkShops</h1>
      
      <div style={{
        overflowWrap:"break-word",
        textAlign:"center"
      }}>
        {eventsData.slice(18,22).map((item, index) => {
            return (
              <Card {...item} />
            )
        })}
      </div>
      
      <h1 style={{
        marginTop:"2em", 
        marginBottom:"2em",
        textAlign:"center",
        fontFamily:"MullerBold"
      }}
      >Talks</h1>
      
      <div style={{
        overflowWrap:"break-word",
        textAlign:"center"
      }}>
        {eventsData.slice(22,).map((item, index) => {
            return (
              <Card {...item} />
            )
        })}
      </div> 
      <Footer />
    </div>
  )
}

export default Event