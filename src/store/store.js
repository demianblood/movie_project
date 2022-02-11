import {configureStore} from "@reduxjs/toolkit";

import genreReducer from "./slice/genres.slice";
import pageReducer from "./slice/pages.slice";
import moviesReducer from "./slice/movies.slice";

const store = configureStore({
    reducer: {
        movies: moviesReducer,
        genres: genreReducer,
        pages: pageReducer
    }
})
export default store