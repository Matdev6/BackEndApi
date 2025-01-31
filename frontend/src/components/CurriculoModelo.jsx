import { useRef } from "react"
import  html2pdf  from "html2pdf.js"

const CurriculoModelo = () => {
    const contentRef = useRef(null)

    const convertToPdf = () => {
        const content = contentRef.current

        const options = {
            filename : "my-document.pdf",
            margin: 1,
            image: { type: "jpeg", quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: "in", format: 'a4', orientation: "portrait" },
        }

        html2pdf().set(options).from(content).save()
    }

    return (
        <div  className="bg-neutral-200 w-screen teste altura-tela-curriculo flex flex-col">
            <div ref={contentRef} className="flex flex-col border bg-neutral-50 w-full h-full m-auto mt-4 border-neutral-300">
                <h1 className="text-neutral-950 text-5xl font-bold mx-auto mt-6 mb-8">Juliana Silva</h1>
                <div className="flex flex-col mx-20">
                    <p className="text-lg">Brasileira, Casada , 26 anos</p>
                    <p className="text-lg">E-mail: juliana@email.com</p>
                    <p className="text-lg">Contato: 31975695921 </p>
                    <p className="text-lg">Endereço: Rua alegre, 123 - Cidade Brasileira</p>
                    <div className="mt-4">
                        <h1 className="font-semibold text-xl uppercase mb-2">Objetivo</h1>
                        <p className="text-lg mx-4 mb-2" >. Atuar na area de Logistica administrativa</p>
                    </div>
                    <div  className="mt-4">
                        <h1 className="font-semibold text-xl uppercase mb-2">. Formação Academica</h1>
                        <p className="text-lg mx-4 mb-2">. Bacharelado em Logistica (2018)</p>
                        <p className="text-lg mx-4 mb-2">. Admintração e marketing (2021)</p>
                        <p className="text-lg mx-4 mb-2">. Gestão de logistica Portuaria</p>
                    </div>
                    <div  className="mt-4">
                        <h1 className="font-semibold text-xl uppercase mb-2">. Cursos complementares</h1>
                        <p className="text-lg mx-4 mb-2">. Gestão de Transportes</p>
                        <p className="text-lg mx-4 mb-2">. Comercio Exterior</p>
                        <p className="text-lg mx-4 mb-2">. Gestão de logistica Portuaria</p>
                    </div>
                    <div  className="my-4">
                        <h1 className="font-semibold text-xl uppercase mb-2">. Experiencia</h1>
                        <p className="text-lg mx-4 mb-2">. Consultor de Logistica (2013 a 2015) </p>
                        <p className="text-lg mx-4 mb-2">. Coordenadora de planejamento e controle de Produção (2016 a 2017)</p>
                        <p className="text-lg mx-4 mb-2">. Supervidor de Logistica (2018 a 2021)</p>
                    </div>
                </div>
            </div>

            <button 
                onClick={convertToPdf}
                className="w-1/6 mx-auto py-2 bg-primary rounded-lg my-2 text-neutral-50">Baixar Curriculo</button>

        </div>
    )
}

export default CurriculoModelo