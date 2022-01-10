import './App.css'
import {useState} from "react";
import {weightIncrement, weightDecrement} from "./features/profile/profileSlice";

import {cssStyle} from "./cssStyle_tailwindVar";


//component
import BlankBlock from "./components/todoapp/ETC/blank";
import Pushbar from "./components/todoapp/Pushbar/Pushbar";
import Navibar from "./components/todoapp/Navibar/Navibar";
import Content from "./components/todoapp/Content/Content";
import Footer from "./components/todoapp/Footer/Footer";
import {useDispatch, useSelector} from "react-redux";
import PrintTable from "./components/todoapp/PrintTable/PrintTable";


export default function App() {
    const trStyle = cssStyle.trStyle
    const btnStyle1 = cssStyle.btnStyle
    const tableStyle = cssStyle.tableStyle

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

    //Redux var
    const myWeight = useSelector(state => state.profile.weight)
    const myHeight = useSelector(state => state.profile.height)
    const todoList_new = useSelector(state => state.todoList.todolist)
    const dispatch = useDispatch()

    return (
        <div className={'App'}>

            <Navibar setlike={setlike} like={like}/>

            <BlankBlock/>

            <PrintTable list={todoList_new} tablestatus = "TODO"/>

            <BlankBlock/>

            <div>
                <p>나의 몸무게는 {myWeight}Kg 입니다.</p>
                <button className={btnStyle1}
                        onClick={() => {
                            dispatch(weightIncrement())
                        }}>
                    살쪘다
                </button>
                <button className={btnStyle1}
                        onClick={() => {
                            dispatch(weightDecrement())
                        }}>
                    살빠졌다
                </button>
                <p>참고로..나의 키는 아침엔{myHeight.moring}cm 입니다.</p>
                <p>그렇다면 저녁에는 {myHeight.evening}cm 입니다.</p>
            </div>

            <BlankBlock/>

            <div className={'text-2xl text-Center'}>To Do</div>
            <Content trStyle={trStyle} btnStyle={btnStyle1} todoList={todoList}
                     setTodolist={setTodolist} setDoinglist={setDoinglist} doingList={doingList}/>

            <BlankBlock/>

            <div className={'text-2xl text-Center'}>Doing</div>
            <Content trStyle={trStyle} btnStyle={btnStyle1} todoList={doingList}
                     setTodolist={setTodolist} setDoinglist={setDoinglist} doingList={doingList}/>

            <BlankBlock/>

            <Pushbar todoList={todoList} setTodolist={setTodolist} btnStyle={btnStyle1}/>

            <BlankBlock/>

            <Footer/>
        </div>
    )
}