import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {genresService} from "../../service/genresService";

const initialState = {
    genres: [],
    genre: ''
}
export const getAllGenres = createAsyncThunk(
    'genresSlice/getAllGenres',
    async (_, {dispatch}) => {
        try {
            const genre = await genresService.getAll()
            dispatch(setGenres({data: genre}))
        } catch (e) {

        }
    }
)
const genresSlice = createSlice({
    name: 'genresSlice',
    initialState,
    reducers: {
        setGenres: ((state, action) => {
            state.genres = action.payload.data
        }),
        setGenre: ((state, action) => {
            state.genre = action.payload.data
        })
    }
})
const genresReducer = genresSlice.reducer
export const {setGenre, setGenres} = genresSlice.actions
export default genresReducer