import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {movieService} from "../../service/movieService";
import {setTotalPages} from "./pages.slice";

const initialState = {
    movies: [],
    movie: {}
}
export const getAllMovies = createAsyncThunk(
    'moviesSlice/getAllMovies',
    async (page, {dispatch, getState}) => {
        const state = getState();
        try {
            const {data} = await movieService.getAll(page, state.genres.genre);
            dispatch(setMovie(data.results))
            dispatch(setTotalPages(data.total_pages))
            return data
        } catch (e) {
            console.log(e)
        }
    }
)
export const getMovieById = createAsyncThunk(
    'moviesSlice/getMovieById',
    async ({id}, {dispatch}) => {
        try {
            const movie = await movieService.getById(id)
            dispatch(setMovieById({data: movie}))
        } catch (e) {
            console.log(e)
        }
    }
)

const moviesSlice = createSlice({
    name: 'moviesSlice',
    initialState,
    reducers: {
        setMovie: ((state, action) => {
            state.movies = action.payload
        }),
        setMovieById: ((state, action) => {
            state.movie = action.payload.data
        })
    }
})
const moviesReducer = moviesSlice.reducer
export const {setMovie, setMovieById} = moviesSlice.actions;
export default moviesReducer