import "../../css/paragraph.css"

const Paragraph = ({title, content, align, image}) => {
    if(align === "right"){
        return (
            <div className="row box">
                <div className="col paragraph-box">
                    <h1>{title}</h1>
                    <p className="content-box">{content}</p>
                </div>
                <div className="col">
                    <img src={image} alt="" className="para_img"/>
                </div>
            </div>
        )
    }
    else {
        return (
            <div className="row box">
                <div className="col">
                    <img src={image} alt="" className="para_img"/>
                </div>

                <div className="col paragraph-box">
                    <h1>{title}</h1>
                    <p className="content-box">{content}</p>
                </div>
            </div>
        )
    }
}

export default Paragraph