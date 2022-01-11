import {removeToDoAt} from "../../../features/doList/todoListSlice";
import {removeDoingAt} from "../../../features/doList/doingListSlice";
import {cssStyle} from "../../../cssStyle_tailwindVar";
import {useDispatch} from "react-redux";

export default function Thead({list, tableStatus}){
    const btnStyle = cssStyle.btnStyle
    const trStyle = cssStyle.trStyle
    const dispatch = useDispatch()

    return (
        <thead>
        <tr className={trStyle}>
            <th>
                <button className={btnStyle + " w-20"}
                        onClick={(event) => {
                            const ckList = document.querySelectorAll(`.ckBoxItem${tableStatus}`)

                            ckList.forEach((element)=>{
                                element.checked = false
                            })

                            list.forEach((element,index)=>{
                                if(element.state.willRemove){
                                    if (tableStatus === 'TODO') {
                                        dispatch(removeToDoAt(index))
                                    } else if (tableStatus === "DOING") {
                                        dispatch(removeDoingAt(index))
                                    }
                                }
                            })

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
    )
}