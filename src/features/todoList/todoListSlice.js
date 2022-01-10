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
                }
            },
            {
                name: '2222',
                task: '공부하기',
                deadline: '2021-01-06',
                createdAt: '오늘',
                state: {
                    canEdit: false,
                }
            },
        ],
        doinglist: [
            {
                name: '서재용',
                task: '공부하기',
                deadline: '2021-01-06',
                createdAt: '오늘',
                state: {
                    canEdit: false,
                }
            }
        ],
    },
    reducers: {
        setTodoList: (state,action) => {
            state.todolist = action.payload
        },
        modifyTodoAt: (state, action) => {
            state.todolist[action.payload.index].state.canEdit = action.payload.canEdit
            state.todolist[action.payload.index].name = action.payload.name
            state.todolist[action.payload.index].task = action.payload.task
            state.todolist[action.payload.index].deadline = action.payload.deadline
            state.todolist[action.payload.index].deadline = action.payload.deadline

        },
    }
})

export const {setTodoList, modifyTodoAt } = todoListSlice.actions

export default todoListSlice.reducer
