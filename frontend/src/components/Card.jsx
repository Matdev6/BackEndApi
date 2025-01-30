import { motion } from "framer-motion"
import { Link } from "react-router-dom"

const Card = ({ title, paragraph, url }) => {
    return (
        <Link to={url}>
            <motion.div className="w-full h-56  border bg-primary rounded-xl shadow-3xl flex flex-col"
                whileHover={{ scale: 1.1 }}>
                <h1 className="flex mx-auto mt-6 text-2xl font-medium text-white">{title}</h1>
                <p className="flex mx-4 mt-5 textlg text-white font-medium text-center">{paragraph}</p>
            </motion.div>
        </Link>
    )
}

export default Card 