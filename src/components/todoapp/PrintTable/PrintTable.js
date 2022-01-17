import {cssStyle} from "../../../cssStyle_tailwindVar";
import Thead from "./Thead";
import Tbody from "./Tbody";

export default function PrintTable({list, tableStatus: tableStatus}) {
    const tableStyle = cssStyle.tableStyle

    return (
        <div className={'flex flex-row justify-center'}>
            <table className={'border-t-2 border-b-2'} style={tableStyle}>
                <Thead list = {list} tableStatus = {tableStatus}/>
                <Tbody list = {list} tableStatus = {tableStatus}/>
            </table>
        </div>
    )
}