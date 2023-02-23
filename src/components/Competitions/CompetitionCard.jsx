import { Box, Button, styled, Typography } from '@mui/material'
import React from 'react'
import { eventsData } from '../../data/events_data'

const StyledBox=styled(Box)`
border: 1px solid rgba(255, 255, 255, .25);
background-color: rgba(255, 255, 255, 0.45);
box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.25);
backdrop-filter: blur(15px);

width:20vw;
padding:5px;
cursor:pointer;
border-radius:1px 30px;
transition: .5s all;
::before{
  position: fixed;
  content: "";
  box-shadow: 0 0 100px 40px #ffffff08;
  top: -1%;
  left: -100%;
  transform: rotate(-90deg);
  height: 60rem;
  transition: .7s all;
}
&:hover{
    box-shadow: 0 2px 10px #ffffff99;
    transform:scale(1.02);
}

`
const StyledButton=styled(Button)`
border-radius:3px 3px 3px 30px;
padding:10px 20px;
width:48%;
text-transform:none;
color:black;
font-weight:600;
`
const Image=styled('img')({
  width:'100%',
  height:'38vh',
  borderRadius:'2px 30px 2px 2px',
})
const CompetitionCard = () => {
  return (
    <Box sx={{padding:'20px 10px'}}>
      <StyledBox>
        <Box sx={{marginBottom:1}}>
          <Image src={eventsData[0].image} alt='logo'/>
        </Box>
        <Box sx={{display:'flex',justifyContent:'space-between'}}>
          <StyledButton variant='contained'>
             27-03-23
           </StyledButton>
          <Button variant='text' sx={{borderRadius:'3px',padding:'10px 20px',width:'48%',color:'inherit'}}>
            More
          </Button>
        </Box>
      </StyledBox>
    </Box>
  )
}

export default CompetitionCard