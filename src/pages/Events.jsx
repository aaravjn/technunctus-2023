import { Box, styled, Typography } from '@mui/material'
import React from 'react'

//Components
import CompetitionCard from '../components/Events/EventCard'

const Event= () => {
  return (
    <Box sx={{display:'flex',justifyContent:'space-evenly',margin:'0 70px',flexWrap:'wrap'}}> 
      <CompetitionCard/>
      <CompetitionCard/>
      <CompetitionCard/>
      <CompetitionCard/>
      <CompetitionCard/>
      <CompetitionCard/>
      <CompetitionCard/>
      <CompetitionCard/>
    </Box>
  )
}

export default Event
