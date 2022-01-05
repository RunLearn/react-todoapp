import Navibutton from "./Navibutton";
import {useDispatch, useSelector} from "react-redux";
import {likeIncrease} from "../../../features/like/likeSlice";


export default function Header() {
    const navStyle = "flex flex-row justify-around text-2xl text-white"
    const like = useSelector(state => state.like.value)
    const dispatch = useDispatch()

    return (
        <header className={'py-5 shadow-xl'}>
            <nav className={navStyle}>
                <Navibutton btn_text={"To Do App"}/>
                <Navibutton btn_text={"Coming Soon"}/>
                <Navibutton btn_text={"Coming Soon"}/>

                <button onClick={() => {dispatch(likeIncrease())}}>
                    <Navibutton btn_text={`Like💜 ⤳ 💜 X ${like}`}/>
                </button>


            </nav>
        </header>
    )
}