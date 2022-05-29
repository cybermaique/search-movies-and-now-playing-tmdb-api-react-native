import axios from "axios";

const api = axios.create({
    baseURL: "http://api.themoviedb.org/3/movie/550?api_key=a99acd14788dbc4183c3480c39b2f6d3"
})

export default api;