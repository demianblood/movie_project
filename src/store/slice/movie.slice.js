import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {movieService} from "../../service/movieService";

const initialState = {
    movies: [],
    movie: {},
    index: 1
}
export const getAllMovies = createAsyncThunk(
    'movieSlice/getAllMovies',
    async (_, {dispatch}) => {
        try {
            const movies = await movieService.getAll();
            return movies
        } catch (e) {
            console.log(e)
        }
    }
)
export const getMovieById = createAsyncThunk(
    'movieSlice/getMovieById',
    async ({id},{dispatch})=>{
        try {
            const movie = await movieService.getById(id)
        }catch (e){
            console.log(e)
        }
    }
)

const movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {},
    extraReducers: {
        [getAllMovies.pending]: (state, action) => {
            state.status = 'pending'
            state.error = null
        },
        [getAllMovies.fulfilled]: (state, action) => {
            state.status = 'fulfilled'
            state.movies = action.payload
        },
        [getAllMovies.rejected]: (state, action) => {
            state.status = 'rejected'
            state.error = action.payload
        }
    }
})
const movieReducer = movieSlice.reducer

export default movieReducer