import Navibutton from "./Navibutton";

export default function Header({setlike, like}) {

    const navStyle = "flex flex-row justify-around text-2xl text-white"

    return (
        <header className={'py-5 shadow-xl'}>
            <nav className={navStyle}>
                <Navibutton btn_text={"To Do App"}/>
                <Navibutton btn_text={"Coming Soon"}/>
                <Navibutton btn_text={"Coming Soon"}/>

                <button onClick={(event) => {
                    setlike(like + 1)
                }}>
                    <Navibutton btn_text={`Like💜 ⤳ 💜 X ${like}`}/>
                </button>


            </nav>
        </header>
    )
}