import { Box, Button, styled } from '@mui/material'
import {React, useState } from 'react'
import { eventsData } from '../../data/events_data'
import EventInfo from "./Event"
import '../../css/event_info.css'

const StyledBox=styled(Box)`
border: 1px solid rgba(255, 255, 255, .25);
background-color: rgba(255, 255, 255, 0.45);
box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.25);
backdrop-filter: blur(15px);
margin-top: 100px;
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
  const [open, setOpen] = useState(false)
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
          <Button variant='text' sx={{borderRadius:'3px',padding:'10px 20px',width:'48%',color:'inherit'}}
            onClick={() => {
              setOpen(true)
            }}
          >
            More
          </Button>
        </Box>
      </StyledBox>
      
      {open && (
        <div className='event-menu'>
          <Button sx={
              {
                  position: "absolute",
                  top:'90px',
                  right:'90px',
              }
          }
          onClick={() => setOpen(false)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
            </svg>
          </Button>
          <EventInfo /> 
        </div>
      )}
    </Box>
  )
}

export default CompetitionCard