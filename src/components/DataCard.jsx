import {React, useState} from "react"
import CountUp from "react-countup";
import VisibilitySensor from 'react-visibility-sensor';

const Number = ({n}) => {
    const [done, setDone] = useState(false);
    return (
        <CountUp start={done ? 0:null} end={n} redraw={true}>
            {({ countUpRef }) => (
                <VisibilitySensor onChange={(isVisible) => {
                    if(isVisible) {
                        setDone(true)
                    }
                }} delayedCall>
                    <span ref={countUpRef} />
                </VisibilitySensor>
            )}
        </CountUp>
    )
};

const DataCard = ({image, numbers, heading, extras}) => {
    return (
        <div style={{display:"inline-block", textAlign:"center", width:"8em", height:"9em", margin:"0.3em"}}>
            <img src={image} className="d-inline-block" style={{width:"6.2em", height:"4em", objectFit:"cover"}}/>
            <p style={{color:"#ffde59", fontSize:"1.6em", fontFamily:"Stopmotion", marginBottom:"0"}}><Number n={numbers}/>{extras}+</p>
            <p style={{color:"white", fontSize:"1.1em", marginBottom:"0px", fontFamily:"ABeeZee"}}>{heading}</p>
        </div> 
    )
}

export default DataCard