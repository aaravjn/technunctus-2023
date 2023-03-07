import "../../css/event_card.scss"
import "../../css/event_card.css"
import { Button } from "@mui/material"
import {React, useState } from 'react'
import EventInfo from "./Event"

const CompetitionCard = ({Key, Event_Name, Domain, Mode, Description, Release_Date, Location}) => {

    const [open, setOpen] = useState(false)
    
    return (
    <>
    <div class="nft">
        <div className='main'>
        <img className='tokenImage' style={{
            height:"250px",
            width:"100%"
        }}
            src="https://images.unsplash.com/photo-1621075160523-b936ad96132a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
        />
        <h2>{Event_Name}</h2>
        <hr />
        <p class='description'>{Description}</p>
        <div class='tokenInfo'>
            <div class="duration">
                <p><span>◷ </span>{Release_Date}</p>
            </div>
            <p><span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16">
                <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
                <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                </svg>
                </span>{" "+Location}</p>
        </div>

        <Button 
            onClick={() => {
            setOpen(true)
            }}
            style={{display:"block", marginTop:"auto"}}
        >More</Button>
        <Button style={{display:"block"}}>Register</Button>
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
        </div>
    </div>
  </>
    )
}

export default CompetitionCard