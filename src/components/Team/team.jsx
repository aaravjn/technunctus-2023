import React from 'react'
import "../../css/team.css"
import { IconButton } from '@mui/material'
import { Link } from "react-router-dom"
import CallIcon from '@mui/icons-material/Call';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Team({key, name, type, contact_no, email, insta_id, linkedin, source_url}) {
    return (
        <> 
       <div class="card">
        <div class="card-img">
            <img src={source_url} style={{borderRadius:"10px"}} alt="profile"/>
        </div>
        <div class="desc">
            <h6 class="primary-text">{name}</h6>
            <h6 class="secondary-text">{type}</h6>
        </div>
        <div className='member-links'>
        <Link
            to={"tel:"+contact_no}
        >
            <span>
                <IconButton>
                    <CallIcon className="text-sm text-white"/>
                </IconButton>
            </span>
        </Link>
        <Link
            to={"mailto:"+email}
        >
          <span>
            <IconButton>
                <AlternateEmailIcon className="text-sm text-white"/>
            </IconButton>
          </span>
        </Link>
        <Link
            to={insta_id}
        >
            <span>
                <IconButton>
                    <InstagramIcon className="text-sm text-white"/>
                </IconButton>
            </span>
        </Link>
        <Link
            to={linkedin}
        >
            <span>
                <IconButton>
                    <LinkedInIcon className="text-sm text-white"/>
                </IconButton>
            </span>
        </Link>
        </div>
      </div>
    </>
    )
}
