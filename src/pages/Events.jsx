import React from 'react'
import { eventsData } from '../data/events_data'

//Components
import Navbar from "../components/navbar"
import Footer from "../components/Footer/footer"
import Card from "../components/Events/Event_Card"

const Event= () => {
  return (
    <>
      <Navbar />
      <div>
        <h1 style={{paddingTop:"3em", marginBottom:"2em", fontFamily:"Spaceboards", textAlign:"center"}}> Competitions</h1>
        
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
      <h1 style={{marginTop:"3em", marginBottom:"2em", fontFamily:"Spaceboards", textAlign:"center"}}> WorkShops</h1>
      
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
        fontFamily:"Spaceboards"
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
    </>
  )
}

export default Event