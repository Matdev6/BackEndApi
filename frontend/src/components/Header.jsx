import { Link } from "react-router-dom"
import logo from "../assets/logo.jpg"
import { Bars3Icon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion"
import { useAuth } from "../context/AuthContext"
import { useState } from "react";



const Header = () => {

    const { logout } = useAuth()

    const [isOpen, setIsOpen] = useState(false)

    const clickLogout = () => {
        logout()
    }

    const toggleIsOpen = () => {
        setIsOpen(!isOpen)
        console.log(isOpen)
    }

    return (
        <div>
            <header className="bg-neutral-50 w-screen h-20 flex">
                <div className="flex w-2/3  md:w-1/5 h-full items-center mx-10">
                    <img src={logo} alt="logo" className="md:h-16 h-14  rounded-xl" />
                </div>
                <div className="w-3/5 h-full  items-center hidden md:flex justify-around text-primary text-xl font-medium">
                    <Link to={'/'} className="hover:border-b-primary ">Inicio</Link>
                    <a href="">Sobre</a>
                    <a href="">Projetos</a>
                    <a href="">Projetos</a>
                    <a href="">Contato</a>
                </div>
                <div className="md:w-1/5 w-1/3 md:flex items-center justify-center hidden">
                    <button onClick={clickLogout} className="py-2 px-10 bg-primary border border-primary text-neutral-50 rounded-xl text-lg" >Deslogar</button>
                </div>
                <div className="items-center flex w-1/3 justify-center md:hidden">
                    <Bars3Icon className="h-14 w-40 text-primary" onClick={toggleIsOpen} />
                </div>

                {isOpen ? 
                <motion.div
                    className="bg-primary flex flex-col absolute h-header-mobile w-screen z-50 transition-all  md:hidden rounded-b-3xl shadow-2xl
                "
                    initial={{ y: -550 }}
                    animate={{ y: 0 }}
                    transition={{ type: "spring", duration: 2 }}
                >
                    <div className="flex flex-col text-neutral-50"> 
                        <img src={logo} className="w-24 h-24 mx-auto rounded-xl " alt="logo" />
                    <Link to={'/'} className="w-full   items-center justify-center flex mx-auto py-3 text-xl font-medium ">Home</Link>
                    <Link to={'/metadiaria'} className="w-full  items-center justify-center flex mx-auto py-3 text-xl font-medium ">Meta Diaria</Link>
                    <Link to={'/'} className="w-full  items-center justify-center flex mx-auto py-3 text-xl font-medium  ">Projetos</Link>
                    <Link to={'/'} className="w-full  items-center justify-center flex mx-auto py-3 text-xl font-medium  ">Contato</Link>
                    <button onClick={toggleIsOpen} className="mt-10 py-3 text-lg">Fechar</button>
                    </div>
                </motion.div> : ''}
                    
            </header>
        </div>
    )
}

export default Header