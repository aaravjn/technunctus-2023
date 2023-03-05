import { Button } from "@mui/material"

const EventInfo = () => {
    return (
        <div className="event-container" style={{
            
            padding: "2em",
            maxWidth: "70%",
            backgroundColor:"#343a40"
        }}>
            <h1 style={{fontFamily:"SpaceBoards"}}>
                Event title
            </h1>
            <p style={{fontFamily:"Ubuntu"}}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia, exercitationem iure quae ipsum commodi officiis maxime possimus, harum dignissimos quod recusandae dicta cupiditate fuga laboriosam? Doloremque impedit velit quia perferendis.
            </p>
            <div style={{
                display:"flex",
                justifyContent:"center",
            }}>
                <Button>Register</Button>
                <Button>Rule Book</Button>
            </div>
        </div>
    )
}
export default EventInfo