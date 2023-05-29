import React from 'react'
import DropdownNumber from './DropdownNumber'
import './labelInput.css';

const DropdownPhoneNum = ({
    Tag1,
    type1,
    value1
}) => {
  return (
    <div>
        <label className="labelStyle" style={{marginBottom:'8px'}}>{Tag1}</label>
        <div style={{display:'flex'}}>
            <DropdownNumber/>
            <input style={{width:'303px', borderTopLeftRadius:'0', borderBottomLeftRadius:'0'}} className="inputStyle" type={type1} value={value1}/>
        </div>
       
    </div>
  )
}

export default DropdownPhoneNum
