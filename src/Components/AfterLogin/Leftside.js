import React from 'react';
import logo from './icons/logo.png';
import Home from './icons/Home.png';
import wallet from './icons/wallet.png';
import profile from './icons/profile.png';
import add from './icons/add.png';
import setting from './icons/setting.png';
import power from './icons/power.png';
import './Styles/Dashboard.css'

function LeftSide() {
  return (
    

      <div className="left-side">
    <div className="left-top">
      <div className="logo">
        <div className="logo-div">
          <a href="#" className="logo-link">
            <img alt=" " className="logo-icon" src={logo} />
          </a>
        </div>
        <a href="#" className="logo-name">ZenCash</a>
      </div>

      <div className="balance">
        <div className="balance-heading">
          <p className="balance-text">Balance</p>
          <p className="balance-text">₹12,577.00</p>
        </div>
        <div className="dots">
          <div className="div-circle"></div>
          <div className="div-circle"></div>
          <div className="div-circle"></div>
        </div>
      </div>

      <div className="home-menu">
        <div className="icons-list">
          <div className="icons-circle">
            <a href="#" className="icon-link">
              <img alt=" " className="icons" src={Home} />
            </a>
          </div>
          <a href="#" className="home">Home</a>
        </div>

        <div className="icons-list">
          <div className="icons-circle">
            <a href="#" className="icon-link">
              <img alt=" " className="icons" src={wallet} />
            </a>
          </div>
          <a href="#" className="home">Account Statement</a>
        </div>

        <div className="icons-list">
          <div className="icons-circle">
            <a href="#" className="icon-link">
              <img alt=" " className="icons" src={profile} />
            </a>
          </div>
          <a href="#" className="home">User Details</a>
        </div>

        <div className="icons-list">
          <div className="icons-circle">
            <a href="#" className="icon-link">
              <img alt=" " className="icons" src={add} />
            </a>
          </div>
          <a href="#" className="home">Add New</a>
        </div>

        <div className="icons-list">
          <div className="icons-circle">
            <a href="#" className="icon-link">
              <img alt=" " className="icons" src={setting} />
            </a>
          </div>
          <a href="#" className="home">Settings</a>
        </div>

      </div>

      <div className="logout">
    <div className="logout-circle">
    <a href="#" className="icon-link">
      <img alt=" " className="logout-icon" src={power}/>
      </a>
    </div>
    <a href="#" className="home">Logout</a>
  </div>

    </div>
    </div>
  )
}

export default LeftSide;
