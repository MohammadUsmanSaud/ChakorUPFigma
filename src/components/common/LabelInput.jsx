import React from 'react'
import './labelInput.css';
const LabelInput = (
    {
        value,
        Tag,
        classname,
        type = 'text'
    }
    ) => {return (
    <div className="inputDiv">
      <label className="labelStyle">{Tag}</label>
      <input className= {`inputStyle ${classname}`} type={type} value={value}/>
    </div>
  )
}

export default LabelInput
