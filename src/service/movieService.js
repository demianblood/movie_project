import {urlComponent} from "../urlComponents";
import {axiosMovieService} from "./axiosService";
import {urls} from "../urls/urls";


export const movieService = {
    getAll: (page, genreId) => axiosMovieService.get(`${urls.movies}${urlComponent.apiKey}${urlComponent.page}${page}${urlComponent.genres}${genreId}`),
    getPage: (page) => axiosMovieService.get(`${urls.movies}${urlComponent.apiKey}${urlComponent.page}${page}`).then(value => value.data),
    getById: (id) => axiosMovieService.get(`${urls.movie}/${id}${urlComponent.apiKey}`).then(value => value.data)
}