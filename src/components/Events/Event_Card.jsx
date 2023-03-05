import "../../css/event_card.scss"
import "../../css/event_card.css"
import { Button } from "@mui/material"
import {React, useState } from 'react'
import EventInfo from "./Event"

const CompetitionCard = () => {

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
        <h2>Kibertopiks</h2>
        <hr />
        <p class='description'>Our Kibertopiks will give you nothing, waste your money on us.</p>
        <div class='tokenInfo'>
            <div class="duration">
            <p><span>◷</span>11 days left</p>
            </div>
        </div>
        <Button 
            onClick={() => {
              setOpen(true)
            }}
        >More</Button>
        <Button>Register</Button>

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