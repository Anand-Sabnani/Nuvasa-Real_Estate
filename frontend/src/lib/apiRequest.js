import axios from "axios"
const apiRequest=axios.create({
    baseURL:"https://nuvasa-real-estate.vercel.app/api",
    withCredentials:true
})
export default apiRequest