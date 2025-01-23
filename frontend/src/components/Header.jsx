import logo from "../assets/logo.jpg"

const Header = () => {
    return (
        <div>
            <header className="bg-neutral-50 w-screen h-20 flex r">
                <div className="flex  w-1/3 h-full items-center justify-center">
                    <img src={logo} alt="logo" className="h-14 rounded-lg" />
                </div>
                <div className="w-2/3 h-full  items-center flex justify-around text-primary text-xl font-medium">
                    <a href="" className="hover:border-b-primary ">Inicio</a>
                    <a href="">Sobre</a>
                    <a href="">Projetos</a>
                    <a href="">Contato</a>
                </div>
            </header>
        </div>
    )
}

export default Header