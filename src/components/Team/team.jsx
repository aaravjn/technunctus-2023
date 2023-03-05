import React from 'react'
import "../../css/team.css"
import { IconButton } from '@mui/material'
import { Link } from "react-router-dom"
import CallIcon from '@mui/icons-material/Call';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';

export default function Team() {
    return (
        <> 
       <div class="card">
        <div class="card-img">
            <img src={require("../../assets/logo.png")} />
        </div>
        <div class="desc">
            <h6 class="primary-text">Aarav Jain</h6>
            <h6 class="secondary-text">Coder</h6>
        </div>
        <div className='member-links'>
        <Link
            to={"tel:"}
        >
            <a>
                <IconButton>
                    <CallIcon className="text-sm text-white"/>
                </IconButton>
            </a>
        </Link>
        <Link
            to={"mailto:"}
        >
          <a>
            <IconButton>
                <AlternateEmailIcon className="text-sm text-white"/>
            </IconButton>
          </a>
        </Link>
        </div>
      </div>
    </>
    )
}
