import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    page: 1,
    totalPages: 0
}

const pagesSlice = createSlice({
    name: 'pagesSlice',
    initialState,
    reducers: {
        setPage: ((state, action) => {
            if (action.payload.data === 'prev') {
                state.page = state.page - 1
                if (state.page < 1) {
                    state.page = 1
                }
            } else if (action.payload.data === 'next') {
                state.page = state.page + 1
            } else if (action.payload.data === 'first') {
                state.page = 1
            } else if(action.payload.type === 'clickPage'){
                state.page = action.payload.data
            }
        }),
        setTotalPages: ((state, action) => {
            state.totalPages = action.payload
        })
    }
})
const pageReducer = pagesSlice.reducer
export const {setPage, setTotalPages} = pagesSlice.actions
export default pageReducer
