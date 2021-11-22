import Option from './Option'
export default function DropDown(props){
    const showOptions = ()=>{
        const options = props.countryData.map((country,index)=>{
           return <Option key={index} optionClick ={props.optionClick} name={country.name} code={country.code} flag={country.flag} dial={country.dialling_code} />
        })
        return options;
    }
    return (
        <div className="scroll" style={{visibility:props.toggle}}>
            <div className="conatiner">
                {showOptions()}
            </div>
        </div>
    )
}