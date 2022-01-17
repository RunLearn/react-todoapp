import Inputbox from "./Inputbox";
import {useDispatch} from "react-redux";
import {cssStyle} from "../../../cssStyle_tailwindVar";
import {addToDoAt} from "../../../features/doList/todoListSlice";

export default function Pushbar(){
    const btnStyle = cssStyle.btnStyle
    const dispatch = useDispatch()

    return(
        <div className={'flex flex-row justify-center py-5'}>
            <Inputbox contentTxt={'작성자'} inputTagid={ 'name' }/>
            <Inputbox contentTxt={'할일'} inputTagid={ 'task' }/>
            <Inputbox contentTxt={'마감일'} inputTagid={ 'deadline' }/>

            <button className={btnStyle}
                    onClick={ () => {
                        let pushThing = {
                            name : document.querySelector('#name').value,
                            task: document.querySelector('#task').value,
                            deadline : document.querySelector('#deadline').value,
                            createdAt : new Date().toISOString().split('T')[0],
                            tableState : "TODO",
                            state : {
                                canEdit : false,
                            }
                        }
                        dispatch(addToDoAt(pushThing))

                        //입력 후 input form reset
                        document.querySelector('#name').value = null
                        document.querySelector('#task').value = null
                        document.querySelector('#deadline').value = null

                    }}>추가</button>
        </div>
    )
}