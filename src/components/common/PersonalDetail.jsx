import React from 'react'
import './personalDetails.css';
import LabelInput from './LabelInput';
import ButtonMain from './ButtonMain';
import DropdownWithLabel from './DropdownWithLabel';
import TextWithLabel from './TextWithLabel';
import DropdownPhoneNum from './DropdownPhoneNum';


const PersonalDetail = () => {
  return (
    <div>
        <div className="personalMain">
            <div className="personalMainText">
                <h3>Personal Details</h3>
                <p className="personalText">A bit more information about yourself"Username"</p>
            </div>
            <div className="inputGap">
                <LabelInput Tag='FirstName' value='Roberson'/>
                <LabelInput Tag='MiddleName' value='-'/>
                <LabelInput className="" Tag='LastName' value='Cole'/>
            </div>
            <div className="inputGap2">
                <LabelInput Tag='Email' value='delroberson.cole@email.com' type= 'email'/>
                <div style={{display:"flex", width:"100%"}}>
                    <DropdownPhoneNum Tag1='Phone Number' value1='+1 (234) 567 - 891' type1='text'/>
                </div>
            </div>
            <div className="inputGap2">
                <LabelInput type='textarea' Tag='Bio' classname="textAreaHeight"/>
            </div>
            <h3 className="inputGap">Password</h3>
            <p className="passwordText">You password was last changed on <span style={{color:"#192126", fontWeight: "600"}}>3rd October 2021</span></p>
            <ButtonMain className="btnPadding" BtnName='Change Password'/>
            <hr/>
            {/* <div className="addressPadding">
                <h3 className="addressText">Home Address</h3>
                <div style={{display:"flex", gap:"29px"}}>
                    <DropdownWithLabel tag='Country'/>
                    <DropdownWithLabel tag='City'/>
                </div>
                <div style={{display:"flex", gap:"29px"}}>
                    <DropdownWithLabel tag='States'/>
                    <LabelInput Tag='Zip Code' value='200421'/>
                </div>
                <LabelInput type='textarea' Tag='Address line' classname="textAreaHeight"/>
            </div>
            <ButtonMain className="btnAddAddress" BtnName='+ Add address line'/>
            <hr/>
            <div className="socialPadding">
                <h3>Social Accounts</h3>
                <div style={{marginTop:'26px', display:'flex', flexDirection:'column', gap:'16px'}}>

                    <TextWithLabel textContent='www.facebook.com/roberson' labelTag='Facebook' image = <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_906_3586)">
                        <path d="M24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 17.9895 4.3882 22.954 10.125 23.8542V15.4688H7.07812V12H10.125V9.35625C10.125 6.34875 11.9166 4.6875 14.6576 4.6875C15.9701 4.6875 17.3438 4.92188 17.3438 4.92188V7.875H15.8306C14.34 7.875 13.875 8.80008 13.875 9.75V12H17.2031L16.6711 15.4688H13.875V23.8542C19.6118 22.954 24 17.9895 24 12Z" fill="#1877F2"/>
                        <path d="M16.6711 15.4688L17.2031 12H13.875V9.75C13.875 8.80102 14.34 7.875 15.8306 7.875H17.3438V4.92188C17.3438 4.92188 15.9705 4.6875 14.6576 4.6875C11.9166 4.6875 10.125 6.34875 10.125 9.35625V12H7.07812V15.4688H10.125V23.8542C11.3674 24.0486 12.6326 24.0486 13.875 23.8542V15.4688H16.6711Z" fill="white"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_906_3586">
                        <rect width="24" height="24" fill="white"/>
                        </clipPath>
                        </defs>
                        </svg>
                    />
                    <TextWithLabel textContent='@roberson' labelTag='Twitter' image = <svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.54752 19.7508C16.6042 19.7508 21.5578 12.2474 21.5578 5.74052C21.5578 5.5274 21.5578 5.31524 21.5434 5.10404C22.507 4.407 23.3389 3.54392 24 2.55524C23.1014 2.95364 22.148 3.2148 21.1718 3.32996C22.1998 2.71465 22.9692 1.74674 23.3366 0.60644C22.3701 1.18005 21.3126 1.58427 20.2099 1.80164C19.4675 1.01222 18.4856 0.489481 17.4162 0.314324C16.3468 0.139168 15.2494 0.321355 14.294 0.832693C13.3385 1.34403 12.5782 2.15601 12.1307 3.14299C11.6833 4.12996 11.5735 5.23691 11.8186 6.29252C9.8609 6.19432 7.94576 5.68555 6.19745 4.79924C4.44915 3.91294 2.90676 2.6689 1.6704 1.14788C1.04073 2.23188 0.847872 3.51511 1.1311 4.7363C1.41433 5.9575 2.15234 7.02483 3.19488 7.721C2.41123 7.69804 1.64465 7.48663 0.96 7.10468V7.16708C0.960311 8.30393 1.35385 9.40568 2.07387 10.2854C2.79389 11.1652 3.79606 11.7689 4.9104 11.994C4.18548 12.1917 3.42487 12.2206 2.68704 12.0784C3.00181 13.0568 3.61443 13.9123 4.43924 14.5254C5.26405 15.1385 6.25983 15.4785 7.28736 15.498C6.26644 16.3004 5.09731 16.8938 3.84687 17.244C2.59643 17.5942 1.28921 17.6944 0 17.5389C2.25183 18.9839 4.87192 19.7504 7.54752 19.7469" fill="#1DA1F2"/>
                        </svg>
                    />

                    <TextWithLabel textContent='www.instagram.com/roberson0041/' labelTag='Instagram' image = <svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000 svg">
                        <path d="M7.54752 19.7508C16.6042 19.7508 21.5578 12.2474 21.5578 5.74052C21.5578 5.5274 21.5578 5.31524 21.5434 5.10404C22.507 4.407 23.3389 3.54392 24 2.55524C23.1014 2.95364 22.148 3.2148 21.1718 3.32996C22.1998 2.71465 22.9692 1.74674 23.3366 0.60644C22.3701 1.18005 21.3126 1.58427 20.2099 1.80164C19.4675 1.01222 18.4856 0.489481 17.4162 0.314324C16.3468 0.139168 15.2494 0.321355 14.294 0.832693C13.3385 1.34403 12.5782 2.15601 12.1307 3.14299C11.6833 4.12996 11.5735 5.23691 11.8186 6.29252C9.8609 6.19432 7.94576 5.68555 6.19745 4.79924C4.44915 3.91294 2.90676 2.6689 1.6704 1.14788C1.04073 2.23188 0.847872 3.51511 1.1311 4.7363C1.41433 5.9575 2.15234 7.02483 3.19488 7.721C2.41123 7.69804 1.64465 7.48663 0.96 7.10468V7.16708C0.960311 8.30393 1.35385 9.40568 2.07387 10.2854C2.79389 11.1652 3.79606 11.7689 4.9104 11.994C4.18548 12.1917 3.42487 12.2206 2.68704 12.0784C3.00181 13.0568 3.61443 13.9123 4.43924 14.5254C5.26405 15.1385 6.25983 15.4785 7.28736 15.498C6.26644 16.3004 5.09731 16.8938 3.84687 17.244C2.59643 17.5942 1.28921 17.6944 0 17.5389C2.25183 18.9839 4.87192 19.7504 7.54752 19.7469" fill="#1DA1F2"/>
                        </svg>
                    />
                </div>
            </div> */}
        </div>
        <div className="groupSave">
            <ButtonMain className="saveBtnWidth discardBtn" BtnName='Discard'/>
            <ButtonMain className="saveBtnWidth" BtnName='Save Changes'/>
        </div>
    </div>
  )
}

export default PersonalDetail
