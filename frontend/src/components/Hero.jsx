export default function Hero() {
    
    const dataAtual = new Date()
    const anoAtual = dataAtual.getFullYear()

    return (
        <>
            <section className="altura-tela mt-20 scroll-mt-20 w-screen bg-primary flex  relative " id="section1">
                <div className=" h-full w-full flex flex-col ">
                    <div className="my-48 mx-32  flex flex-col gap-2">
                    <h1 className=" text-5xl font-semibold uppercase text-gray-200">Ola! Me chamo <spam className='text-secundary'>Mateus Bernardo</spam></h1>
                    <p className="text-2xl text-white">Desenvolvedor Front-End, tenho {anoAtual - 2005} anos </p>
                    </div>
                </div>   
            </section>
        </>
    )
}