
export default function ClearBtn(props){
    
    return <button 
    onClick={()=>{props.onClick()}}>
        {props.icon}
    </button>}