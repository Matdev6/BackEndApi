import { useAuth } from "../context/AuthContext"


import Header from "../components/Header"

const Home = () => {



    const { logout } = useAuth()

    const sair = () => {
        logout()
    }

    return(
        <div>
            <Header />
            <button onClick={sair}>Logout</button>
        </div>
    )
}

export default Home 