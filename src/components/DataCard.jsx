import React from "react"

const DataCard = ({image, numbers, heading}) => {
    return (
        <div style={{display:"inline-block", textAlign:"center", width:"8em", height:"9em", margin:"0.3em"}}>
            <img src={image} className="d-inline-block" style={{width:"4em", height:"4em"}}/>
            <p style={{color:"#ffde59", fontSize:"1.6em", fontFamily:"Stopmotion", marginBottom:"0"}}>{numbers}+</p>
            <p style={{color:"white", fontSize:"1.1em", marginBottom:"0px", fontFamily:"ABeeZee"}}>{heading}</p>
        </div> 
    )
}

export default DataCard