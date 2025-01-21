import logo from "../assets/logo.jpg"

const Header = () => {
    const sections = [
        { id: "section1", label: "inicio" },
        { id: "section2", label: "Sobre mim" },
        { id: "section3", label: "Habilidades" },
        { id: "section4", label: "Projetos" },
        { id: "section5", label: "Contatos" }
    ]

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <div>
            <header className="flex w-screen justify-around items-center  py-2 shadow-lg font-semibold bg-secundary h-20 fixed top-0 left-0 z-50">
                <div className="flex items-center gap-2">
                    <img src={logo} alt="logo" className="h-14 rounded-lg" />
                    <h1 className="items-center font-semibold text-lg"></h1>
                </div>
                <div className="flex  justify-between w-1/3 text-white">
                    {sections.map((section) => (
                        <button
                            key={section.id}
                            onClick={() => scrollToSection(section.id)}
                            className="text-lg hover:text-gray-700  transition  duration-400">
                            {section.label}
                        </button>
                    ))}
                </div>
            </header>
        </div>
    )
}

export default Header