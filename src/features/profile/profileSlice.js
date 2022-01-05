//myProfile.js
import {createSlice} from "@reduxjs/toolkit";

export const profileSlice = createSlice({
    name : 'profile',
    initialState: {
        weight : 83,
        height : {
            moring : 175,
            evening : 174,
        },
        username : "J-dragon 🐲"
    },
    reducers : {
        weightIncrement : state => {
            state.weight ++
        },
        weightDecrement : state => {
            state.weight --
        },
        weightIncrementByAmount: (state, action) => {
            state.weight += action.payload
        }
    }
})

export const { weightIncrement, weightDecrement, weightIncrementByAmount } = profileSlice.actions

export default profileSlice.reducer
