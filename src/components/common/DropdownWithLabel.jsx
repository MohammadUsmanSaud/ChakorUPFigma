import React from 'react'
import './dropdownWithLabel.css';

const DropdownWithLabel = ({
    tag
    }) => {
  return (
    <div style={{display:"flex", flexDirection:"column", width:"100%"}}>
        <label className="labelStyleDropdown">{tag}</label>
        <select className="dropdownWithLabel" name="Country" id="country">
            <option value="USA">USA</option>                
            <option value="Pakistan">Pakistan</option>
            <option value="KSA">KSA</option>
            <option value="UAE">UAE</option>
        </select>
    </div>
  )
}

export default DropdownWithLabel
