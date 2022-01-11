//store.js
import {createStore} from "redux";
import {configureStore} from "@reduxjs/toolkit";
import profileReducer from "../features/profile/profileSlice"
import likeReducer from "../features/like/likeSlice"
import todoListReducer from "../features/doList/todoListSlice"
import doingReducer from "../features/doList/doingListSlice"

export default configureStore({
    reducer:{
        profile: profileReducer,
        like: likeReducer,
        todoList: todoListReducer,
        doingList: doingReducer,
    }
})
