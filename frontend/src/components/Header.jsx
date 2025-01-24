import logo from "../assets/logo.jpg"

import { useAuth } from "../context/AuthContext"



const Header = () => {

    const { logout } = useAuth()

    const clickLogout = () => {
        logout()
    }

    return (
        <div>
            <header className="bg-neutral-50 w-screen h-20 flex r">
                <div className="flex w-1/5 h-full items-center justify-center">
                    <img src={logo} alt="logo" className="h-16 rounded-xl" />
                </div>
                <div className="w-3/5 h-full  items-center flex justify-around text-primary text-xl font-medium">
                    <a href="" className="hover:border-b-primary ">Inicio</a>
                    <a href="">Sobre</a>
                    <a href="">Projetos</a>
                    <a href="">Projetos</a>
                    <a href="">Contato</a>
                </div>
                <div className="w-1/5 flex items-center justify-center">
                    <button onClick={clickLogout} className="py-2 px-10 bg-primary border border-primary text-neutral-50 rounded-xl text-lg" >Deslogar</button>
                </div>
            </header>
        </div>
    )
}

export default Header