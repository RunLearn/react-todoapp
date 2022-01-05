import Printrow from "./Printrow";
import {cssStyle} from "../../../cssStyle_tailwindVar";

export default function Tbody({todoList, setTodolist, setDoinglist, doingList}) {
    const trStyle = cssStyle.trStyle
    const btnStyle = cssStyle.btnStyle

    return (
        <tbody>
        {
            todoList.map((obj, index) => {
                return (
                    <Printrow obj={obj} index={index} todoList={todoList} setTodolist={setTodolist} doingList={doingList} setDoinglist={setDoinglist}/>
                )
            })
        }
        </tbody>
    )
}