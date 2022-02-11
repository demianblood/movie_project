import {axiosMovieService} from "./axiosServices";
import {urls} from "../urls/urls";


export const movieService = {
    getAll: (page, genreId) => axiosMovieService.get(`${urls.movies}${urls.apiKey}${urls.page}${page}${urls.genres}${genreId}`),
    getPage: (page) => axiosMovieService.get(`${urls.movies}${urls.apiKey}${urls.page}${page}`).then(value => value.data),
    getById: (id) => axiosMovieService.get(`${urls.movie}/${id}${urls.apiKey}`).then(value => value.data)
}