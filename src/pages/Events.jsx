import { Box } from '@mui/material'
import React from 'react'

//Components
import EventCard from '../components/Events/EventCard'
import Navbar from "../components/navbar"
import Footer from "../components/Footer/footer"

const Event= () => {
  return (
    <Box sx={{display:'flex',justifyContent:'space-evenly',margin:'0 70px',flexWrap:'wrap'}}> 
      <Navbar />
      <EventCard/>
      <Footer />
    </Box>
  )
}

export default Event