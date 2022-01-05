import {useContext} from "react";
import {storeContext} from "../../../App";

export default function Footer(){
    const username = useContext(storeContext)

    return (
        <div>
            {username}
        </div>
    )
}