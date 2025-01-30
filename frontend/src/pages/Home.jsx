import { useAuth } from "../context/AuthContext"


import Header from "../components/Header"
import Card from "../components/Card"

const Home = () => {




    return (
        <div className="overflow-hidden">
            <Header />
            <div className="w-full h-altura-tela flex flex-col md:flex-row">
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
                                title="Meta Diaria"
                                paragraph="Aplicação para gerenciar o afazeres do dia a dia, clique aqui para ir para ele" />                                
                        </div>
                    </div>
                </div>
            </div>
            {/* <Card 
            title="Meu componente"
            paragraph='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi sapiente odio officia. Ipsum eos quos atque impedit aliquid ut perspiciatis assumenda aspernatur cumque? Obcaecati modi rem nam expedita repellendus sequi.' /> */}
        </div>
    )
}

export default Home 