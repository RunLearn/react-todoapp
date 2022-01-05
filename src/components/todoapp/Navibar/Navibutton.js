export default function Navibutton({btn_text}){

    const nav_a_Style = 'py-1.5 px-2 border border-black border-4 rounded-full bg-black'

    return(
        <a className={nav_a_Style}>{btn_text}</a>
    )
}