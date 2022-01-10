import {createSlice} from "@reduxjs/toolkit";

export const likeSlice = createSlice({
    name : 'like',
    initialState: {
        value: 0,
    },
    reducers: {
        likeIncrease : state => {
            state.value ++
        },
    }
})

export const { likeIncrease } = likeSlice.actions

export default likeSlice.reducer