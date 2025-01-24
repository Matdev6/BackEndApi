import { useAuth } from "../context/AuthContext"


import Header from "../components/Header"
import Card from "../components/Card"

const Home = () => {




    return(
        <div>
            
            <Header />
            <Card 
            title="Meu componente"
            paragraph='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi sapiente odio officia. Ipsum eos quos atque impedit aliquid ut perspiciatis assumenda aspernatur cumque? Obcaecati modi rem nam expedita repellendus sequi.' />
        </div>
    )
}

export default Home 