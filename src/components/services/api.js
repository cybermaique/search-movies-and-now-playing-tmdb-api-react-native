import axios from "axios";

const api = axios.create({
    language: "&language=en-US",
    api_key: "api_key=a99acd14788dbc4183c3480c39b2f6d3",
    baseUrl: "http://api.themoviedb.org/3",
    baseImgUrl: "http://image.tmdb.org/t/p/w500",
    baseSearchUrl: baseUrl + "/search/movie?" + api_key + language + "&page=1&include_adult=false&query=",
    nowPlayingUrl: "https://api.themoviedb.org/3/movie/now_playing?api_key=a99acd14788dbc4183c3480c39b2f6d3&REGION=BRASIL&language=pt-BR",
})

export default api;