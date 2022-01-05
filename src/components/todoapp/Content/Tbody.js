import Printrow from "./Printrow";

export default function Tbody({trStyle, btnStyle, todoList, setTodolist, setDoinglist, doingList}) {

    return (
        <tbody>

        {
            todoList.map((obj, index) => {
                return (
                    <Printrow trStyle={trStyle} btnStyle={btnStyle} obj={obj} index={index} todoList={todoList} setTodolist={setTodolist} doingList={doingList} setDoinglist={setDoinglist}/>
                )
            })
        }
        </tbody>
    )
}