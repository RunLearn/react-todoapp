//store.js
import {createStore} from "redux";
import {configureStore} from "@reduxjs/toolkit";
import profileReducer from "../features/profile/profileSlice"
import likeReducer from "../features/like/likeSlice"

export default configureStore({
    reducer:{
        profile: profileReducer,
        like: likeReducer,
    }
})
