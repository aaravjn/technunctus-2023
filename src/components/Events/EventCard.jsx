import { Box, styled } from '@mui/material'
import React from 'react'

const StyledBox=styled(Box)`
width:300px;
border:1px outset #16ecff;
height:45vmin;

backdrop-filter: blur(40px);
cursor:pointer;
border-radius:1px 30px;
&:hover{
    box-shadow: 0 2px 10px #ffffff99;
    background: inherit;
    transform:scale(1.02);
}
`
const EventCard = () => {
  return (
    <StyledBox sx={{}}>
        <Box>Image</Box>
        <Box>Description</Box>
        <Box>Buttons</Box>
    </StyledBox>
  )
}

export default EventCard