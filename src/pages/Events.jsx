import React from 'react'
import { eventsData } from '../data/events_data'

//Components
import Navbar from "../components/navbar"
import Footer from "../components/Footer/footer"
import Card from "../components/Events/Event_Card"

const Event= () => {
  return (
    <div style={{overflowX:"hidden"}}>
      
      <img style={{
          width:"100%",
          height:"100vh",
          zIndex:"2"
      }}
      src={require("../assets/events_header.png")}/>
      <img style={{
          width:"100%",
          height:"100vh",
          zIndex:"-1",
          position:"fixed",
          top:"0px",
          left:"0px",
          opacity:"0.3"  
      }}
      src={require("../assets/events_bg.jpg")} />
      <Navbar />
      <div>
        <h1 style={{paddingTop:"3em", marginBottom:"2em", fontFamily:"MullerBold", textAlign:"center"}}> Competitions</h1>
        
        <div style={{
          overflowWrap:"break-word",
          textAlign:"center"
        }}>
          {eventsData.slice(0,19).map((item, index) => {
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
        {eventsData.slice(20,23).map((item, index) => {
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
        {eventsData.slice(23,24).map((item, index) => {
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