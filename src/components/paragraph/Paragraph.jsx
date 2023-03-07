import "../../css/paragraph.css"
import { motion } from 'framer-motion'

const Paragraph = ({title, content, align, image}) => {
    if(align === "right"){
        return (
            <motion.div className="row box"
                initial={{opacity:0}}
                whileInView={{opacity:1}}
                transition={{duration:0.8}}
            >
                <div className="col paragraph-box">
                    <h1>{title}</h1>
                    <p className="content-box">{content}</p>
                </div>
                <div className="col">
                    <img src={image} alt="" className="para_img"/>
                </div>
            </motion.div>
        )
    }
    else {
        return (
            <motion.div className="row box"
                initial={{opacity:0}}
                whileInView={{opacity:1}}
                transition={{duration:0.8}}
            >
                <div className="col">
                    <img src={image} alt="" className="para_img"/>
                </div>

                <div className="col paragraph-box">
                    <h1>{title}</h1>
                    <p className="content-box">{content}</p>
                </div>
            </motion.div>
        )
    }
}

export default Paragraph