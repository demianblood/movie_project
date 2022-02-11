import {axiosMovieService} from "./axiosServices";
import {urls} from "../urls/urls";

export const genresService = {
    getAll: () => axiosMovieService.get(`${urls.getGenres}${urls.apiKey}`).then(value => value.data.genres)
}