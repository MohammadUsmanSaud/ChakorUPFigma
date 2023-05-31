import React from 'react'
import DropdownNumber from './DropdownNumber'
import './labelInput.css';

const DropdownPhoneNum = ({
    Tag1,
    type1,
    value1
}) => {
  return (
    <div style={{width:"100%"}}>
        <label className="labelStyle" style={{marginBottom:'4px'}}>{Tag1}</label>
        <div style={{display:'flex'}}>
            <DropdownNumber/>
            <input style={{borderTopLeftRadius:'0', borderBottomLeftRadius:'0'}} className="inputStyle dropdownNumberIcons" type={type1} value={value1}/>
        </div>
       
    </div>
  )
}

export default DropdownPhoneNum
