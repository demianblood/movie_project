import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {movieService} from "../../service/movieService";

const initialState = {
    movies: [],
    movie: {},
    page: 1,
    genre: ''
}
export const getAllMovies = createAsyncThunk(
    'movieSlice/getAllMovies',
    async (page, {dispatch, getState}) => {
        const state = getState();
        try {
            const {data} = await movieService.getAll(page, state.movies.genre);
            dispatch(setMovie(data.results))
            return data
        } catch (e) {
            console.log(e)
        }
    }
)
export const getMovieById = createAsyncThunk(
    'movieSlice/getMovieById',
    async ({id}, {dispatch}) => {
        try {
            const movie = await movieService.getById(id)
            dispatch(setMovieById({data: movie}))
        } catch (e) {
            console.log(e)
        }
    }
)

const movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {
        setMovie: ((state, action) => {
            state.movies = action.payload
        }),
        setMovieById: ((state, action) => {
            state.movie = action.payload.data
        }),
        setPage: ((state, action) => {
            if (action.payload.data === 'first') {
                state.page = 1
            } else if (action.payload.data === 'prev') {
                state.page = state.page - 1
                if (state.page < 1) {
                    state.page = 1
                }
            } else if (action.payload.data === 'next') {
                state.page = state.page + 1
            }
        })
    }
})
const movieReducer = movieSlice.reducer
export const {setMovie, setMovieById, setPage} = movieSlice.actions;
export default movieReducer