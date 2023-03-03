import "../css/navbar.css"
import logo from "../assets/logo.png"
import { Box } from '@mui/material'
import React, {useState} from 'react';
import {motion, AnimatePresence} from "framer-motion";

export default function Navbar() {

    const [open, setOpen] = useState(false);

    const isOpen = ()=>{
        setOpen(true);
    }

    const closeMenu = ()=>{
        setOpen(false);
    }
    const item={
        exit:{
            opacity:0,
            height:0,
            transition:{
            ease:"easeInOut",
            duration:0.3,
            delay:1.2
            }
        }
    }
    function SetButton({val}) {
      if(!val) {
        return (
          <div className="menu" onClick={isOpen}>
                <div className="nav-but-wrap">
                    <div className="menu-icon hover-target">
                        <span class="menu-icon__line menu-icon__line-left"></span>
                        <span class="menu-icon__line"></span>
                        <span class="menu-icon__line menu-icon__line-right"></span>
                    </div>					
                </div>
            </div>
        )
      }
      else{
        return (
          <div className="menu" onClick={closeMenu}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
            </svg>              
          </div>
        )
      }
    }

    return (
        <>
            
            <nav className="navbar fixed-top navbar-expand-lg">
                <div className="navbar-cont container-fluid">
                    <div className="link">
                        <Box
                            component='img'
                            sx={{height: 55, width: 55}}
                            alt="logo"
                            src={logo}
                        />
                        <span className="brand">
                            Technunctus
                        </span>
                    </div>
                  
                    <SetButton val={open} />  
                </div>
            </nav>
        <AnimatePresence>
        {
          open &&(
            <motion.div className="menu_container"
              variants={item}
              initial={{height:0, opacity:0}}
              animate={{height:"100vh", opacity:1}}
              transition={{duration:.5}}
              exit="exit"
            >
              <motion.a href="/"
                 initial={{y:80,opacity:0}}
                 animate={{y:0, opacity:1}}
                 transition={{delay:.8}}
                 exit={{
                  opacity:0,
                  y:90,
                    transition:{
                      ease:"easeInOut",
                      delay:1
                    }
                 }}
                 className="link nav_link"
              >Home</motion.a>
              <motion.a href="/About"
                 initial={{y:80,opacity:0}}
                 animate={{y:0, opacity:1}}
                 transition={{delay:.7}}
                 exit={{
                  opacity:0,
                  y:90,
                    transition:{
                      ease:"easeInOut",
                      delay:.8
                    }
                 }}
                 className="link nav_link"
              >About</motion.a>
              <motion.a href=""
                 initial={{y:80,opacity:0}}
                 animate={{y:0, opacity:1}}
                 transition={{delay:.6}}
                 exit={{
                  opacity:0,
                  y:90,
                    transition:{
                      ease:"easeInOut",
                      delay:.6
                    }
                 }}
                 className="link nav_link"
              >Sponsors</motion.a>
              <motion.a href="/Events"
                 initial={{y:80,opacity:0}}
                 animate={{y:0, opacity:1}}
                 transition={{delay:.5}}
                 exit={{
                  opacity:0,
                  y:90,
                    transition:{
                      ease:"easeInOut",
                      delay:.4
                    }
                 }}
                 className="link nav_link"
              >Events</motion.a>
              <motion.a href="/OurTeam"
                 initial={{y:80,opacity:0}}
                 animate={{y:0, opacity:1}}
                 transition={{delay:.5}}
                 exit={{
                  opacity:0,
                  y:90,
                    transition:{
                      ease:"easeInOut",
                      delay:.4
                    }
                 }}
                 className="link nav_link"
              >Our Team</motion.a>
              
            </motion.div>
          )
        }  
        </AnimatePresence>
        </>
    )
}