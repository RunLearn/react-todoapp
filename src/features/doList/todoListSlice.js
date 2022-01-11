import {createSlice} from "@reduxjs/toolkit";

export const todoListSlice = createSlice({
    name: 'todoList',
    initialState: {
        todolist: [
            {
                name: '서재용',
                task: '공부하기',
                deadline: '2021-01-06',
                createdAt: '오늘',
                state: {
                    canEdit: false,
                    willRemove: false,
                }
            },
            {
                name: '2222',
                task: '공부하기',
                deadline: '2021-01-06',
                createdAt: '오늘',
                state: {
                    canEdit: false,
                    willRemove: false,
                }
            },
        ],
    },
    reducers: {
        setTodoList: (state,action) => {
            state.todolist = action.payload
        },
        modifyTodoAt: (state, action) => {
            state.todolist[action.payload.index].state.canEdit = action.payload.canEdit
            state.todolist[action.payload.index].state.willRemove = action.payload.willRemove
            state.todolist[action.payload.index].name = action.payload.name
            state.todolist[action.payload.index].task = action.payload.task
            state.todolist[action.payload.index].deadline = action.payload.deadline
        },
        addToDoAt: (state, action)=>{
            state.todolist.push(action.payload)
        },
        removeToDoAt: (state, action) => {
            state.todolist.splice(action.payload,1)
        },
    }
})

export const {setTodoList, modifyTodoAt, addToDoAt, removeToDoAt} = todoListSlice.actions

export default todoListSlice.reducer
