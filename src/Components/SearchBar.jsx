import React, { useRef, useState } from 'react'
import ClearBtn from './ClearBtn'
import DropDown from './DropDown'
import ToggleBtn from './ToggleBtn'
import Countries from '../Countries.json'
export default function SearchBar(props){
    const [countryData, setCountryData]=useState(Countries);
    const [showDrpDwn, setShowDrpDwn] = useState('hidden');
    const inputVal = useRef(null)
    const [svgIcon, setSvgIcon] = useState(<i className="fas fa-caret-down arrow"></i>)
    const toggleSvg = ()=>{
        setSvgIcon(svgIcon.props.className === ("fas fa-caret-down arrow")? 
        <i className="fas fa-caret-up"></i> : <i className="fas fa-caret-down arrow"></i>
        )
    }
    const handleChange = (e)=>{
        setCountryData(Countries.filter(({name})=> name.toLowerCase().includes(e.target.value.toLowerCase())))    
    }
    const toggleDrp = ()=>{
        toggleSvg()
        setShowDrpDwn(showDrpDwn==='hidden'? 'visible': 'hidden');
    }
    const optionClicked= (selected)=>{
        toggleDrp()
        inputVal.current.value = selected 
    }
    const clearInput = ()=>{
        inputVal.current.value = ''
        setCountryData(Countries)
    }
    return (
    <div>
    <div className='searchBar'>
        <input className= "searchInp" ref={inputVal} onChange={handleChange} onFocus={()=>{toggleDrp()}}
         type="text" placeholder="Enter Country"></input>
            <ClearBtn onClick={clearInput}/>
            <ToggleBtn onClick={toggleDrp} icon={svgIcon} />
        </div>
    <DropDown optionClick = {optionClicked} toggle={showDrpDwn} countryData={countryData}/>
    </div>
    )
}