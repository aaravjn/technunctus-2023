import React from 'react'
import "../../css/footer.css"
import "../../css/team.css"
import Tilt from 'react-parallax-tilt'


export default function Team() {
    return (
        <> 
      <div className="container">
        <></>
        <Tilt options={{ speed: 400, max: 25, glare : true , "max-glare": 1 }}>
        <div className="card">
          <div className="content">
            <h2>01</h2>
            <h3>Card One</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.</p>
            <a href>Read More</a>
          </div>
        </div>
        </Tilt>
        <Tilt options={{ speed: 400, max: 25, glare : true , "max-glare": 1 }}>
        <div className="card">
          <div className="content">
            <h2>02</h2>
            <h3>Card Two</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.</p>
            <a href>Read More</a>
          </div>
        </div>
        </Tilt>
        <Tilt options={{ speed: 400, max: 25, glare : true , "max-glare": 1 }}>
        <div className="card">
          <div className="content">
            <h2>03</h2>
            <h3>Card Three</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.</p>
            <a href>Read More</a>
          </div>
        </div>
        </Tilt>
        <Tilt options={{ speed: 400, max: 25, glare : true , "max-glare": 1 }}>
        <div className="card">
          <div className="content">
            <h2>03</h2>
            <h3>Card Three</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.</p>
            <a href>Read More</a>
          </div>
        </div>
        </Tilt>
      </div>


        </>
    )
}
