import React from 'react';
import Navbar123 from './Navbar123';
import './home.css';
import VerifyGroup from './VerifyGroup';
import PersonalDetail from './PersonalDetail';
const Home = () => {
  return (
    <div>
      <Navbar123/>
      <section className="bg">
        <div className="mainDiv">
          <div className="mainHeadingGap">
            <h1>My Profile</h1>
            <p>Free property! Invite your friends and you'll both receive a gift balance to invest in our properties!</p>
          </div>

          <div className="d-flex formTopMargin" style={{gap:"32px"}}>
            <div>
              <VerifyGroup/>
            </div>
            <div>
              <PersonalDetail/>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
