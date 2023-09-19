import React from 'react';
import './Styles/Dashboard.css'; // Import your CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import logo from './icons/logo.png';
import Home from './icons/Home.png';
import wallet from './icons/wallet.png';
import profile from './icons/profile.png';
import add from './icons/add.png';
import setting from './icons/setting.png';
import power from './icons/power.png';
import decoration from './images/decoration.png'; // Import your image paths
import pigicon from './icons/pig-icon.png';
import transfericon from './icons/transfer-icon.png';
import billsicon from './icons/bill-icon.png';
import cashicon from './icons/cash-icon.png';
import withdrawicon from './icons/withdraw-icon.png';
import crediticon from './icons/credit-icon.png';
import transactionicon from './icons/transaction-icon.png';
import beneficiaryicon from './icons/beneficiary-icon.png';
import {faUser} from '@fortawesome/free-solid-svg-icons';



function Dashboard() {
  return (
    <div>
<div>
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
          <a href="#" className="home">Cards Manager</a>
        </div>

        <div className="icons-list">
          <div className="icons-circle">
            <a href="#" className="icon-link">
              <img alt=" " className="icons" src={profile} />
            </a>
          </div>
          <a href="#" className="home">Account</a>
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
    </div>
  </div>


  <div className="logout">
    <div className="logout-circle">
      <img alt=" " className="logout-icon" src={power}/>
    </div>
    <p>Logout</p>
  </div>

  </div>

  <img alt=" " className="decoration" src={decoration}/>

  <div className="top-side">

    <div className="top-first">
      <div className="dollar-stats">
        {/* <p className="overall">Overall</p>
        <p className="price">₹12,577.00</p> */}
      </div>
    </div>

    <div className="top-second">
      {/* <div className="notification">
        <img alt=" " className="notification-icon" src={notification}/>
        <div className="notification-count"></div>
      </div> */}
      <div className="profile-div">
      <p className="lock-icon"  ><FontAwesomeIcon icon={faUser} /></p>
      </div>
    </div>
  </div>


  <div className="bottom-side">
  <div className="bottom-right">
      <p className="history">History</p>

      <div className="history-cards">
  <div className="history-card-one">
    <a href="#" className="card-link">
      <img src={wallet} alt=" " />
      <p className="wallet-card">Account Details</p>
    </a>
  </div>

  <div className="history-card-one">
    <a href="#" className="card-link">
      <img src={transfericon} alt=" " />
      <p className="wallet-card">Transfer Funds</p>
    </a>
  </div>

  <div className="history-card-one">
    <a href="#" className="card-link">
      <img src={withdrawicon} alt=" " />
      <p className="wallet-card">Withdraw</p>
    </a>
  </div>

  <div className="history-card-one">
    <a href="#" className="card-link">
      <img src={cashicon} alt=" " />
      <p className="wallet-card">Account Balance</p>
    </a>
  </div>

  <div className="history-card-one">
    <a href="#" className="card-link">
      <img src={billsicon} alt=" " />
      <p className="wallet-card">Account Statement</p>
    </a>
  </div>

  <div className="history-card-one">
    <a href="#" className="card-link">
      <img src={pigicon} alt=" " />
      <p className="wallet-card">Save Online</p>
    </a>
  </div>

  <div className="history-card-one">
    <a href="#" className="card-link">
      <img src={crediticon} alt=" " />
      <p className="wallet-card">Credit Card</p>
    </a>
  </div>

  <div className="history-card-one">
    <a href="#" className="card-link">
      <img src={transactionicon} alt=" " />
      <p className="wallet-card">Transaction report</p>
    </a>
  </div>

  <div className="history-card-one">
    <a href="#" className="card-link">
      <img src={beneficiaryicon} alt=" " />
      <p className="wallet-card">Beneficiary</p>
    </a>
  </div>
</div>


   
    </div>

    
  </div>
  </div>
    
  );
}

export default Dashboard;
