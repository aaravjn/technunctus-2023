import React from 'react'
import "../../css/teamCard.css"
import { IconButton } from '@mui/material'
import CallIcon from '@mui/icons-material/Call';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { motion } from 'framer-motion'


export default function Team({key, name, type, contact_no, email, insta_id, linkedin, source_url}) {
    
    return (
    <div> 
       <motion.div class="card" 
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:0.8}}
       >
        <div class="card-img">
            <img src={source_url} style={{borderRadius:"10px"}} alt="profile"/>
        </div>
        <div class="desc">
            <h6 class="primary-text">{name}</h6>
            <h6 class="secondary-text">{type}</h6>
        </div>
        <div className='member-links'>
        <motion.a
            href={"tel:"+contact_no}
            initial={false}
            animate={{z:30}}
        >
            <span>
                <IconButton>
                    <CallIcon className="text-sm text-white"/>
                </IconButton>
            </span>
        </motion.a>
        <motion.a
            href={"mailto:"+email}
            initial={false}
            animate={{z:30}}
        >
          <span>
            <IconButton>
                <AlternateEmailIcon className="text-sm text-white"/>
            </IconButton>
          </span>
        </motion.a>
        <motion.a
            href={insta_id}
            initial={false}
            animate={{z:30}}
        >
            <span>
                <IconButton>
                    <InstagramIcon className="text-sm text-white"/>
                </IconButton>
            </span>
        </motion.a>
        <motion.a
            href={linkedin}
            initial={false}
            animate={{z:30}}
        >
            <span>
                <IconButton>
                    <LinkedInIcon className="text-sm text-white"/>
                </IconButton>
            </span>
        </motion.a>
        </div>
      </motion.div>
    </div>
    )
}
