export default function Inputbox({contentTxt, inputTagid}){
    return (
        <div>
            <span className={'px-2'}>{ `${ contentTxt } : ` }</span>
            <input id={ inputTagid } className={'border-2'} type="text"/>
        </div>
    )
}