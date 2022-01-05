import Inputbox from "./Inputbox";

export default function Pushbar({todoList, setTodolist, btnStyle}){
    return(
        <div className={'flex flex-row justify-center py-5'}>
            <Inputbox contentTxt={'작성자'} inputTagid={ 'name' }/>
            <Inputbox contentTxt={'할일'} inputTagid={ 'task' }/>
            <Inputbox contentTxt={'마감일'} inputTagid={ 'deadline' }/>

            <button className={btnStyle}
                    onClick={ () => {
                        let newArray = [...todoList]
                        newArray.push({
                            name : document.querySelector('#name').value,
                            task: document.querySelector('#task').value,
                            deadline : document.querySelector('#deadline').value,
                            createdAt : new Date().toISOString().split('T')[0],
                            tableState : "TODO",
                            state : {
                                canEdit : false,
                            }
                        })
                        setTodolist(newArray)
                    }}>추가</button>
        </div>
    )
}