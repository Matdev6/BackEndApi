import { useAuth } from "../context/AuthContext"


import Header from "../components/Header"
import Card from "../components/Card"
import Footer from "../components/Footer"

const Home = () => {




    return (
        <div className="altura-tela">
            <div className="w-full  flex flex-col md:flex-row">
                <div className="w-full md:w-1/2 h-1/2 md:h-full ">
                    <div className="flex flex-col md:mx-16 mx-12 mt-20">
                        <h1 className="text-primary font-medium text-3xl md:text-4xl md:w-11/12 w-full md:h-max">Seja bem vindo ao meu projeto, aqui você encontra um Dev testando diversas funcionalidades</h1>
                        <p className="text-secundary text-xl md:text-3xl">Utilizando React no FrontEnd e Node Js no Backend</p>
                    </div>
                </div>
                <div className="w-full md:w-1/2 h-1/2 md:h-full ">
                    <div className="mt-12">
                        <h1 className="text-center text-2xl md:text-3xl text-primary font-semibold">Alguns exemplos</h1>
                        <div className="grid md:grid-cols-2 gap-3 h-full mt-10 mx-10">
                            <Card
                                title="Meta Diaria"
                                paragraph="Aplicação para gerenciar o afazeres do dia a dia, clique aqui para ir para ele"
                                url='/metadiaria' />
                            <Card
                                title="Gerador de curriculo"
                                paragraph="Aplicação para gerenciar o afazeres do dia a dia, clique aqui para ir para ele"
                                url="/curriculo" />                                
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home 