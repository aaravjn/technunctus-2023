import "../../css/paragraph.css"

const Paragraph = ({title, content}) => {
    return (
        <div className="paragraph-box">
            <h1>{title}</h1>
            <p className="content-box">{content}</p>
        </div>
    )
}

export default Paragraph