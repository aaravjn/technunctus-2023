import { Box } from '@mui/material'
import React from 'react'

//Components
import EventCard from './EventCard'

const Events = () => {
  return (
    <Box sx={{display:'flex',justifyContent:'space-evenly'}}>
    <EventCard/>
    <EventCard/>
    <EventCard/>
    <EventCard/>
    </Box>
  )
}

export default Events