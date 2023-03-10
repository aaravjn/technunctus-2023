import React from "react"

const DataCard = ({image, numbers, heading}) => {
    return (
        <div style={{display:"inline-block", textAlign:"center", width:"8em", height:"9em", margin:"0.3em"}}>
            <img src={image} className="d-block" style={{width:"4em", height:"4em", marginRight:"auto", marginLeft:"auto"}}/>
            <p style={{color:"#ffde59", fontSize:"1.5em", marginBottom:"0px"}}>{heading}</p>
            <p style={{color:"#ffde59", fontSize:"1.5em"}}>{numbers}+</p>
        </div> 
    )
}

export default DataCard