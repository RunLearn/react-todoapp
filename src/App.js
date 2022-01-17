import './App.css'

//component
import BlankBlock from "./components/todoapp/ETC/blank";
import Pushbar from "./components/todoapp/Pushbar/Pushbar";
import Navibar from "./components/todoapp/Navibar/Navibar";
import Footer from "./components/todoapp/Footer/Footer";
import PrintTable from "./components/todoapp/PrintTable/PrintTable";

//state management
import {useSelector} from "react-redux";

export default function App() {
    //Redux var
    const todoList = useSelector(state => state.todoList.todolist)
    const doingList = useSelector(state => state.doingList.doinglist)

    return (
        <div className={'App'}>

            <Navibar />

            <BlankBlock/>

            <div className={'text-2xl text-Center'}>To Do</div>
            <PrintTable list={todoList} tableStatus = "TODO"/>

            <BlankBlock/>

            <div className={'text-2xl text-Center'}>Doing</div>
            <PrintTable list={doingList} tableStatus = "DOING"/>

            <BlankBlock/>

            <Pushbar />

            <Footer/>
        </div>
    )
}