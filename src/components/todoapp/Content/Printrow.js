export default function Printrow({trStyle, btnStyle, obj, index, todoList, setTodolist, setDoinglist, doingList}) {

    const {name, task, deadline, createdAt, state} = obj
    const today = new Date().toISOString().split('T')[0]

    return (
        <tr className={trStyle}>
            <td><input type="checkbox" className={'ckBox_item'} value={index}/></td>

            {
                !state.canEdit
                    ?
                    <>
                        <td>{name}</td>
                        <td>{task}</td>
                        <td>{deadline}</td>
                    </>
                    :
                    <>
                        <td className={"w-1/6"}>
                            <input type='text' defaultValue={name} id={`editName${index}`}
                                   className={"text-center w-3/6 border-2"}/>
                        </td>
                        <td className={"w-1/6"}>
                            <input type='text' defaultValue={task} id={`editTask${index}`}
                                   className={"text-center w-3/6 border-2"}/>
                        </td>
                        <td className={"w-1/6"}>
                            <input type='text' defaultValue={deadline} id={`editDeadline${index}`}
                                   className={"text-center w-5/6 border-2"}/>
                        </td>
                    </>
            }

            <td>
                {
                    (today === createdAt) ? <p>오늘</p> : <p>{createdAt}</p>
                }
            </td>
            {
                !state.canEdit
                    ?
                    <td>
                        <button className={btnStyle}
                                onClick={(event) => {
                                    let newArray = [...todoList]
                                    newArray[index].state.canEdit = true

                                    setTodolist(newArray)
                                }
                                }>수정
                        </button>
                    </td>
                    :
                    <td>
                        <button className={btnStyle}
                                onClick={(event) => {
                                    let newArray = [...todoList]

                                    newArray[index].state.canEdit = false
                                    newArray[index].name = document.querySelector(`#editName${index}`).value
                                    newArray[index].task = document.querySelector(`#editTask${index}`).value
                                    newArray[index].deadline = document.querySelector(`#editDeadline${index}`).value

                                    setTodolist(newArray)
                                }
                                }>완료
                        </button>
                    </td>
            }
            <td>
                <button className={btnStyle}
                        onClick={(event) => {
                            let todoArray = []
                            let doingArray = []

                            if(todoList[index].tableState == 'TODO'){
                                todoArray = []
                                doingArray = [...doingList]
                            } else{
                                todoArray = [...todoList]
                                doingArray = []
                            }

                            todoList[index].tableState = todoList[index].tableState == "TODO" ? "DOING" : "TODO"

                            todoList.forEach((element, index) => {
                                if (element.tableState == "TODO") {
                                    todoArray.push(element)
                                }else if (element.tableState == "DOING") {
                                    doingArray.push(element)
                                }
                            })

                            setTodolist(todoArray)
                            setDoinglist(doingArray)
                        }}>
                    이동
                </button>
            </td>
        </tr>
    )
}