import Thead from "./Thead";
import Tbody from "./Tbody";

export default function Content({tableStyle, trStyle, btnStyle, todoList, setTodolist, setDoinglist, doingList}){
    return (

        <div className={'flex flex-row justify-center'}>
            <table className={'border-t-2 border-b-2 '} style={tableStyle}>

                <Thead trStyle={trStyle} btnStyle={btnStyle} todoList={todoList} setTodolist={setTodolist} setDoinglist={setDoinglist} doingList={doingList}/>
                <Tbody trStyle={trStyle} btnStyle={btnStyle} todoList={todoList} setTodolist={setTodolist} setDoinglist={setDoinglist} doingList={doingList}/>

            </table>
        </div>
    )
}