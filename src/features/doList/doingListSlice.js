import {createSlice} from "@reduxjs/toolkit";

export const doingListSlice = createSlice({
    name: 'todoList',
    initialState: {
        doinglist: [
            {
                name: '서재용-doing',
                task: '공부하기',
                deadline: '2021-01-06',
                createdAt: '오늘',
                state: {
                    canEdit: false,
                    willRemove: false,
                }
            }
        ],
    },
    reducers: {
        setDoingList: (state,action) => {
            state.doinglist = action.payload
        },
        modifyDoingAt: (state, action) => {
            state.doinglist[action.payload.index].state.canEdit = action.payload.canEdit
            state.doinglist[action.payload.index].state.willRemove = action.payload.willRemove
            state.doinglist[action.payload.index].name = action.payload.name
            state.doinglist[action.payload.index].task = action.payload.task
            state.doinglist[action.payload.index].deadline = action.payload.deadline
        },
        addDoingAt: (state, action)=>{
            state.doinglist.push(action.payload)
        },
        removeDoingAt: (state, action) => {
            state.doinglist.splice(action.payload,1)
        },
    }
})

export const {setDoingList, modifyDoingAt,addDoingAt, removeDoingAt } = doingListSlice.actions

export default doingListSlice.reducer
