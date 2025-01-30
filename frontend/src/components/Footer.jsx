const Footer = () => {

    const year = new Date

    const currentYear = year.getFullYear()

    return(
        <div className="">
            {/* <div className="w-screen bg-neutral-50 h-20 relative  bottom-0 flex items-center mt-5 border-t border-t-neutral-100">
                <h1 className="md:mx-auto text-center text-primary">Todos os direitos reservados ©{currentYear} desenvolvido por <span className="text-secundary">Mateus Bernardo</span></h1>
            </div> */}
        </div>
    )
}

export default Footer