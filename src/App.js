import './App.css'
import {useState} from "react";
import {weightIncrement, weightDecrement} from "./features/profile/profileSlice";

import {cssStyle} from "./cssStyle_tailwindVar";


//component
import BlankBlock from "./components/todoapp/ETC/blank";
import Pushbar from "./components/todoapp/Pushbar/Pushbar";
import Navibar from "./components/todoapp/Navibar/Navibar";
import Footer from "./components/todoapp/Footer/Footer";
import PrintTable from "./components/todoapp/PrintTable/PrintTable";

import {useDispatch, useSelector} from "react-redux";


export default function App() {
    const [like, setlike] = useState(0)

    //Redux var
    const todoList_new = useSelector(state => state.todoList.todolist)
    const doingList_new = useSelector(state => state.doingList.doinglist)
    const dispatch = useDispatch()

    return (
        <div className={'App'}>

            <Navibar />

            <BlankBlock/>

            <div className={'text-2xl text-Center'}>To Do</div>
            <PrintTable list={todoList_new} tablestatus = "TODO"/>

            <BlankBlock/>

            <div className={'text-2xl text-Center'}>Doing</div>
            <PrintTable list={doingList_new} tablestatus = "DOING"/>

            <BlankBlock/>

            <Pushbar />

            <Footer/>
        </div>
    )
}