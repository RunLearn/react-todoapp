import Thead from "./Thead";
import Tbody from "./Tbody";
import {cssStyle} from "../../../cssStyle_tailwindVar";

export default function Content({ trStyle, btnStyle, todoList, setTodolist, setDoinglist, doingList}){
    const tableStyle = cssStyle.tableStyle

    return (
        <div className={'flex flex-row justify-center'}>
            <table className={'border-t-2 border-b-2 '} style={tableStyle}>

                <Thead todoList={todoList} setTodolist={setTodolist} setDoinglist={setDoinglist} doingList={doingList}/>
                <Tbody todoList={todoList} setTodolist={setTodolist} setDoinglist={setDoinglist} doingList={doingList}/>

            </table>
        </div>
    )
}