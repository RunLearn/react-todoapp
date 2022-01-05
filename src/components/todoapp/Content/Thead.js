import {cssStyle} from "../../../cssStyle_tailwindVar";

export default function Thead({ todoList, setTodolist}){
    const trStyle = cssStyle.trStyle
    const btnStyle = cssStyle.btnStyle

    return (
        <thead>
        <tr className={trStyle}>
            <th>
                <button className={ btnStyle + " w-20"}
                        onClick={(event) => {
                            const ckList = document.querySelectorAll('.ckBox_item')

                            // 배열에서 삭제
                            let newArray = []
                            ckList.forEach( (element, index) => {
                                // element.checked
                                if(!element.checked) {
                                    newArray.push(todoList[index])
                                }
                                element.checked = false // 체크박스 체크풀어주기
                            })
                            setTodolist(newArray)   // 삭제 적용
                        }}
                >선택 삭제</button>
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