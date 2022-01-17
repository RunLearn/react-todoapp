import {addToDoAt, modifyTodoAt, removeToDoAt} from "../../../features/doList/todoListSlice";
import {addDoingAt, modifyDoingAt, removeDoingAt} from "../../../features/doList/doingListSlice";
import {cssStyle} from "../../../cssStyle_tailwindVar";
import {useDispatch} from "react-redux";

export default function Tbody({list, tableStatus}){
    const trStyle = cssStyle.trStyle
    const btnStyle = cssStyle.btnStyle
    const today = new Date().toISOString().split('T')[0]
    const dispatch = useDispatch()

    return (
        <tbody>
        {
            list.map((obj, index) => {
                const {name, task, deadline, createdAt, state} = obj

                return (
                    <tr className={trStyle}>
                        <td><input type="checkbox" className={`ckBoxItem${tableStatus}`} value={index}
                                   onClick={(event) => {
                                       if (tableStatus === "TODO") {
                                           dispatch(modifyTodoAt({
                                               ...obj,
                                               index: index,
                                               willRemove: true,
                                           }))
                                       } else if (tableStatus === "DOING") {
                                           dispatch(modifyDoingAt({
                                               ...obj,
                                               index: index,
                                               willRemove: true,
                                           }))
                                       }
                                   }}
                        /></td>

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
                                                if (tableStatus === "TODO") {
                                                    dispatch(modifyTodoAt({
                                                        ...obj,
                                                        index: index,
                                                        canEdit: true,
                                                    }))
                                                } else if (tableStatus === "DOING") {
                                                    dispatch((modifyDoingAt({
                                                        ...obj,
                                                        index: index,
                                                        canEdit: true,
                                                    })))
                                                }
                                            }}>수정
                                    </button>
                                </td>
                                :
                                <td>
                                    <button className={btnStyle}
                                            onClick={(event) => {
                                                let pushThing = {
                                                    index: index,
                                                    name: document.querySelector(`#editName${index}`).value,
                                                    task: document.querySelector(`#editTask${index}`).value,
                                                    deadline: document.querySelector(`#editDeadline${index}`).value,
                                                    canEdit: false,
                                                }
                                                if (tableStatus === "TODO") {
                                                    dispatch(modifyTodoAt(pushThing))
                                                } else if (tableStatus === "DOING") {
                                                    dispatch((modifyDoingAt(pushThing)))
                                                }
                                            }
                                            }>완료
                                    </button>
                                </td>
                        }
                        <td>
                            <button className={btnStyle}
                                    onClick={(event) => {
                                        // Switch 문으로 변경 가능
                                        if (tableStatus === "TODO") {
                                            dispatch(removeToDoAt(index))
                                            dispatch(addDoingAt(obj))
                                        } else if (tableStatus === "DOING") {
                                            dispatch(removeDoingAt(index))
                                            dispatch(addToDoAt(obj))
                                        }
                                    }}
                            >
                                이동
                            </button>
                        </td>
                    </tr>
                )
            })
        }
        </tbody>
    )
}