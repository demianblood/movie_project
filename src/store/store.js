import {configureStore} from "@reduxjs/toolkit";

import movieReducer from "./slice/movie.slice";

const store = configureStore({
    reducer: {
        movies:movieReducer
    }
})
export default store