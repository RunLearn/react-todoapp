import {cssStyle} from "../../../cssStyle_tailwindVar";
import {useDispatch, useSelector} from "react-redux";
import {setTodoList, modifyTodoAt} from "../../../features/todoList/todoListSlice"
import Printrow from "../Content/Printrow";

export default function PrintTable({list, tablestatus}) {
    const tableStyle = cssStyle.tableStyle
    const trStyle = cssStyle.trStyle
    const btnStyle = cssStyle.btnStyle
    const dispatch = useDispatch()
    const today = new Date().toISOString().split('T')[0]

    return (
        <div className={'flex flex-row justify-center'}>
            <table className={'border-t-2 border-b-2 '} style={tableStyle}>
                <thead>
                <tr className={trStyle}>
                    <th>
                        <button className={btnStyle + " w-20"}
                                onClick={(event) => {
                                    const ckList = document.querySelectorAll('.ckBox_item')

                                    // 배열에서 삭제
                                    let newArray = []
                                    ckList.forEach((element, index) => {
                                        // element.checked
                                        if (!element.checked) {
                                            newArray.push(list[index])
                                        }
                                        element.checked = false // 체크박스 체크풀어주기
                                    })
                                    dispatch(setTodoList(newArray))
                                    // setTodolist(newArray)   // 삭제 적용
                                }}

                        >선택 삭제
                        </button>
                    </th>
                    <th>작성자</th>
                    <th>할일</th>
                    <th>마감일</th>
                    <th>생성일</th>
                    <th>수정</th>
                    <th>이동</th>
                </tr>
                </thead>

                <tbody>
                {
                    list.map((obj, index) => {
                        const {name, task, deadline, createdAt, state} = obj

                        return (
                            <tr className={trStyle}>
                                <td><input type="checkbox" className={'ckBox_item'} value={index}/></td>

                                {/*{*/}
                                {/*    console.log(state)*/}
                                {/*}*/}
                                {/*{*/}
                                {/*    !state.canEdit ? <p>false</p> : <p>true</p>*/}
                                {/*}*/}
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
                                                        dispatch(modifyTodoAt({
                                                            ...obj,
                                                            index: index,
                                                            canEdit: true,
                                                        }))
                                                    }}>수정
                                            </button>
                                        </td>
                                        :
                                        <td>
                                            <button className={btnStyle}
                                                    onClick={(event) => {

                                                        dispatch(modifyTodoAt({
                                                            index: index,
                                                            name: document.querySelector(`#editName${index}`).value,
                                                            task: document.querySelector(`#editTask${index}`).value,
                                                            deadline: document.querySelector(`#editDeadline${index}`).value,
                                                            canEdit: false,
                                                        }))
                                                    }
                                                    }>완료
                                            </button>
                                        </td>
                                }
                                <td>
                                    <button className={btnStyle}
                                        // onClick={(event) => {
                                        //     let todoArray = []
                                        //     let doingArray = []
                                        //
                                        //     if(list[index].tableState == 'TODO'){
                                        //         todoArray = []
                                        //         doingArray = [...doingList]
                                        //     } else{
                                        //         todoArray = [...todoList]
                                        //         doingArray = []
                                        //     }
                                        //
                                        //     todoList[index].tableState = todoList[index].tableState == "TODO" ? "DOING" : "TODO"
                                        //
                                        //     todoList.forEach((element, index) => {
                                        //         if (element.tableState == "TODO") {
                                        //             todoArray.push(element)
                                        //         }else if (element.tableState == "DOING") {
                                        //             doingArray.push(element)
                                        //         }
                                        //     })
                                        //
                                        //     setTodolist(todoArray)
                                        //     setDoinglist(doingArray)
                                        // }}
                                    >
                                        이동
                                    </button>
                                </td>
                            </tr>
                        )
                    })
                }
                </tbody>

            </table>
        </div>
    )
}