import './App.css'
import {useState, createContext, useContext} from "react";

//component
import BlankBlock from "./components/todoapp/ETC/blank";
import Pushbar from "./components/todoapp/Pushbar/Pushbar";
import Navibar from "./components/todoapp/Navibar/Navibar";
import Content from "./components/todoapp/Content/Content";
import Footer from "./components/todoapp/Footer/Footer";

// context sample
export const storeContext = createContext()
const username = 'J-dragon🐲'
const allStyle = 'border border-black border-2 rounded-full px-1.5'

export default function App() {
    const trStyle = "border-b"
    const btnStyle = 'border border-black border-2 rounded-full px-1.5'
    const tableStyle = {
        width: '800px',
    }

    // [선택지]를 두고 싶을 때
    const TODO = 'TODO'
    const DOING = 'DOING'

    const [like, setlike] = useState(0)
    const [todoList, setTodolist] = useState([{
        name: '서재용',
        task: '공부하기',
        deadline: '2021-12-23',
        createdAt: '오늘',
        tableState: TODO,
        state: {
            canEdit: false,
        }
    }, {
        name: '서재용',
        task: '공부하기',
        deadline: '2021-12-23',
        createdAt: '오늘',
        tableState: TODO,
        state: {
            canEdit: false,
        }
    }, {
        name: '서재용',
        task: '공부하기',
        deadline: '2021-12-23',
        createdAt: '오늘',
        tableState: TODO,
        state: {
            canEdit: false,
        }
    },])
    const [doingList, setDoinglist] = useState([{
        name: '서재용',
        task: '공부하기2',
        deadline: '2021-12-23',
        createdAt: '오늘',
        tableState: DOING,
        state: {
            canEdit: false,
        }
    }, {
        name: '서재용',
        task: '공부하기2',
        deadline: '2021-12-23',
        createdAt: '오늘',
        tableState: DOING,
        state: {
            canEdit: false,
        }
    }, {
        name: '서재용',
        task: '공부하기2',
        deadline: '2021-12-23',
        createdAt: '오늘',
        tableState: DOING,
        state: {
            canEdit: false,
        }
    },])

    return (
        <storeContext.Provider value={username}>
            <div className={'App'}>

                <Navibar setlike={setlike} like={like}/>

                <BlankBlock/>

                <div className={'text-2xl text-Center'}>To Do</div>
                <Content tableStyle={tableStyle} trStyle={trStyle} btnStyle={btnStyle} todoList={todoList}
                         setTodolist={setTodolist} setDoinglist={setDoinglist} doingList={doingList}/>

                <BlankBlock/>

                <div className={'text-2xl text-Center'}>Doing</div>
                <Content tableStyle={tableStyle} trStyle={trStyle} btnStyle={btnStyle} todoList={doingList}
                         setTodolist={setTodolist} setDoinglist={setDoinglist} doingList={doingList}/>

                <BlankBlock/>

                <Pushbar todoList={todoList} setTodolist={setTodolist} btnStyle={btnStyle}/>

                <BlankBlock/>

                <Footer/>
            </div>
        </storeContext.Provider>
    )
}