export default function Option(props){
    return(
    <div>
        <option className='option' onClick={()=>props.optionClick(props.name)}>
            {props.name} ({props.code}) {props.dial}
        </option>
    </div> 
    )
}