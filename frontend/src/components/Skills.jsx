import html from "../assets/html.png"
import css from "../assets/css.png"
import js from "../assets/js.png"
import react from "../assets/react.png"
import python from "../assets/python.png"

import {motion } from "motion/react"
import { useState } from "react"

const Skills = () => {

    const [isHover, setIsHover] = useState('Passe o mouse sobre os card para saber mais informações')

    const handleMouseEnter = (info) => {
        setIsHover(info);
    };

    const handleMouseLeave = () => {
        setIsHover("Passe o mouse para mais informações")
    }

    const cards = [
        { img: html, info: 'HTML (HyperText Markup Language) é uma linguagem de marcação de hipertexto que permite criar páginas da web' },
        { img: css, info: 'CSS é chamado de linguagem Cascading Style Sheet e é usado para estilizar elementos escritos em uma linguagem de marcação como HTML.' },
        { img: js, info: "JavaScript (JS) é uma linguagem de programação que serve para criar interatividade e dinamismo em sites e aplicativos web. É uma ferramenta fundamental para o desenvolvimento da internet." },
        { img: react, info: "React é uma biblioteca JavaScript que permite criar interfaces de usuário (UI) para aplicativos web. Foi criado pelo Facebook (atual Meta) e é usado por várias empresas de tecnologia, como o Instagram e o Airbnb." },
        { img: python, info: "Flask." }
    ]

    return (
        <section className="altura-tela scroll-mt-20  w-screen bg-primary" id="section3">
            <div className=" flex  altura-tela flex-col lg:flex-row ">
                <div className=" h-full  w-1/2">
                    <div className="text-white font-medium flex flex-col  w-96 mx-auto mt-40">
                        <h1 className="text-3xl" >Habilidades</h1>
                        <p className="w-56">{isHover}</p>
                    </div>
                </div>
                <div className="w-1/2 ">
                    <div className=" w-2/3 h-1/3 grid grid-cols-4 mt-40 gap-x-20 gap-y-8">
                        {cards.map((card) => (
                            <motion.div
                                initial={{ x: -500, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1}}
                                transition={{ duration: 1.2 }}
                                whileHover={{ scale: 1.2 }}
                                whileTap={{ scale: 0.7}}
                                key={card.index}
                                className="w-40 h-40 shadow-2xlxl bg-secundary rounded-lg flex cursor-pointer"
                                onMouseEnter={() => handleMouseEnter(card.info)}
                                onMouseLeave={handleMouseLeave}
                            >
                                <img src={card.img} alt="html" className="h-16 m-auto" />
                            </motion.div>
                        ))}


                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills