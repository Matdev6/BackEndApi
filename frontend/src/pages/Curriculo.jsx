const Curriculo = () => {
    return(
        <div className="w-screen">
            <div className="flex flex-col justify-center items-center">
                <h1 className="text-primary text-4xl font-semibold mt-10 ">Gerador de curriculo gratuito</h1>
                
                <form className="mt-10 flex flex-col gap-4">
                    <h1>Preencha os dados abaixo para gerar seu curriculo</h1>
                    <div className="flex flex-col">
                    <input type="text" placeholder="Nome" className="bg-neutral-200" />
                    <input type="text" placeholder="Estado civil" className="bg-neutral-200" />
                    <input type="text" placeholder="Idade" className="bg-neutral-200" />
                    <input type="text" placeholder="Telefone" className="bg-neutral-200" />
                    <input type="text" placeholder="Endereço" className="bg-neutral-200" />
                    <input type="text" placeholder="Objetivo" className="bg-neutral-200" />
                    <input type="text" placeholder="Formação academica - Separe com ',' " className="bg-neutral-200" />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Curriculo