import axios from "axios";

import baseMovieUrl from "../../urls/baseUrls/baseMovieUrl";

export const axiosMovieService = axios.create({
    baseURL: baseMovieUrl
})
