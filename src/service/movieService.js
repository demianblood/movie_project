import {apiKey, page, urls} from "../urlComponents";
import {axiosMovieService} from "./axiosService";


export const movieService = {
    getAll: () => axiosMovieService.get(`${urls.movies}${apiKey}`).then(value => value.data.results),
    getPage: (index) => axiosMovieService.get(`${urls.movies}${apiKey}${page}${index}`).then(value => value.data),
    getById: (id) => axiosMovieService.get(`${urls.movie}/${id}${apiKey}`).then(value => value.data)
}