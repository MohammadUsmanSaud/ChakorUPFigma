import React from 'react'
import './textWithLabel.css';

const TextWithLabel = ({
    image,
    labelTag,
    textContent
}) => {
  return (
    <div>
      <div className="labelFlex">
        <label>{labelTag}</label>
        <div className="checkboxSize displayDiv2"style={{display:'flex', alignItems:'center', marginLeft:'21px'}}>
              <input type="checkbox" id="switch" /><label className="labelCheck" for="switch">Toggle</label>
              <p className="socialProfileShow">Show on profile</p>
        </div>
      </div>
      <div style={{display:'flex', marginTop:'8px'}}>
        <div className="svgImage">
            {image}
        </div>
        <p className="socialText">
            {textContent}
        </p>
        <div className="checkboxSize displayDiv1"style={{display:'flex', alignItems:'center', marginLeft:'21px'}}>
            <input type="checkbox" id="switch" /><label className="labelCheck" for="switch">Toggle</label>
            <p className="socialProfileShow">Show on profile</p>
        </div>
      </div>
    </div>
  )
}

export default TextWithLabel
