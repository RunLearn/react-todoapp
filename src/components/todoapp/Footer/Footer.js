import {useSelector} from "react-redux";

export default function Footer(){
    const username = useSelector(state => state.profile.username)

    return (
        <div>
            {username}
        </div>
    )
}