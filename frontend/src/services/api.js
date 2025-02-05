import axios from 'axios'

const api = axios.create({
    baseURL: "https://mateusbernardo.netlify.app" || "http://localhost:5000"
})

export default api 