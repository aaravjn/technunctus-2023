import "../css/navbar.css"
import logo from "../assets/white_logo.png"
import { Box } from '@mui/material'
import React, {useState} from 'react';
import {motion, AnimatePresence, useViewportScroll} from "framer-motion";
import { useRef , useEffect} from 'react';
import { Twirl } from 'hamburger-react'


export default function Navbar() {

    const [open, setOpen] = useState(false);
    const windowSize = useRef([window.innerWidth, window.innerHeight])

    const { scrollY } = useViewportScroll();

    const [blur, setBlur] = useState(false);
    
    function update() {
      if (scrollY?.current <= 300) {
        setBlur(false);
      } else if (scrollY?.current > 300) {
        setBlur(true);
      }
    }

    useEffect(() => {
      return scrollY.onChange(() => update());
    });

    const variants = {
      visible: { background: "transparent"},
      blur: { backdropFilter: "blur(40px)" }
    };
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
    return (
        <>
            
            <motion.nav
              className="navbar fixed-top"
              variants={variants}
              animate={blur ? "blur": "visible"}
              transition={{duration:1}}
              style={{paddingLeft:"1.5em", width:"100vw !important"}}
            >
                  <a   href="/"><motion.div
                    animate={{y:9}}
                    transition={{
                      ease: "easeInOut",
                      repeat: Infinity,
                      duration: 0,
                      repeatType:"reverse"
                    }}
                  >
                      <Box
                          component='img'
                          sx={{height: 55, width: 55, transform:"scale(1.25)", marginBottom:"10px"}}
                          alt="logo"
                          src={logo}
                      />
                  </motion.div></a>
                  {(windowSize.current[0] > 700) &&(
                      <div style={{marginRight:"auto", marginLeft:"auto"}}>
                        <a className="link" href="/" style={{textDecoration:"none", fontSize:"1.2em", marginLeft:"auto", marginRight:"20px"}}>Home</a>
                        <a className="link" href="/Sponsors" style={{textDecoration:"none", fontSize:"1.2em", marginRight:"30px"}}>Sponsors</a>
                        <a className="link" href="/OurTeam" style={{textDecoration:"none", fontSize:"1.2em", marginRight:"30px"}}>Our Team</a>                      
                        <a className="link" href="/Events" style={{textDecoration:"none", fontSize:"1.2em", marginRight:"30px"}}>Events</a>
                        <a className="link" onClick = {(e)=>{
                                              e.preventDefault();
                                              window.scrollTo({
                                              top: document.querySelector("#merchandise").offsetTop,
                                              behavior: "smooth",
                                            });}}
                          style={{textDecoration:"none", fontSize:"1.2em", marginRight:"30px"}}>Merch</a>
                      </div>
                    
                  )}
                  {(windowSize.current[0] <= 700) &&(
                    <span style={{
                      marginRight:"1em",
                      background:" -webkit-linear-gradient(0deg, rgba(109,205,25,1) 0%, rgba(238,231,42,1) 50%, rgba(252,176,69,1) 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent"
                    }}>
                      <Twirl toggled={open} toggle={setOpen} />
                    </span>
                  )}               
                  
                    
                
            </motion.nav>
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
              <motion.a href="/Sponsors"
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
                 transition={{delay:.3}}
                 exit={{
                  opacity:0,
                  y:90,
                    transition:{
                      ease:"easeInOut",
                      delay:.2
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