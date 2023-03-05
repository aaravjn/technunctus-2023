import React from 'react'

//Components
import Navbar from "../components/navbar"
import Footer from "../components/Footer/footer"
import Card from "../components/Events/Event_Card"

const Event= () => {
  return (
    <>
      <Navbar />
      <h1 style={{paddingTop:"3em", marginBottom:"2em", marginLeft:"2em", fontFamily:"Spaceboards"}}> Competitions</h1>
      
      <div style={{
        display:"flex",
      }}>
        <Card />
        <Card />
      </div>

      <h1 style={{marginTop:"3em", marginBottom:"2em", marginLeft:"2em", fontFamily:"Spaceboards"}}> WorkShops</h1>
      
      <div style={{
        display:"flex",
      }}>
        <Card />
        <Card />
      </div>
      
      <h1 style={{
        marginTop:"2em", 
        marginBottom:"2em", 
        marginLeft:"2em",
        fontFamily:"Spaceboards"
        }}
      >Talk</h1>
      
      <div style={{
        display:"flex",
      }}>
        <Card />
        <Card />
      </div> 
      <Footer />
    </>
  )
}

export default Event