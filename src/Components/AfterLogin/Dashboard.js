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
import notification from './icons/notification.png';
import anna from './images/anna.jpg';
import Card1 from './images/Card4.png';
import point from './icons/point.png';
import phonecall from './icons/phone-call.png';
import playgrey from './icons/play-grey.png';
import email from './icons/email.png';
import creditcard1 from './icons/credit-card 1.png';
import creditcardpayment1 from './icons/credit-card-payment 1.png';
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
       <div className="left-side">

    <div className="left-top">
      <div className="logo">
        <div className="logo-div">
          <img alt=" " className="logo-icon" src={logo}/>
        </div>
        <p className="logo-name">ZenCash</p>
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
            <img alt=" " className="icons" src={Home}/>
          </div>
          <p className="home">Home</p>
        </div>
  
        <div className="icons-list">
          <div className="icons-circle">
            <img alt=" " className="icons" src={wallet}/>
          </div>
          <p className="home">Cards Manager</p>
        </div>
  
        <div className="icons-list">
          <div className="icons-circle">
            <img alt=" " className="icons" src={profile}/>
          </div>
          <p className="home">Account</p>
        </div>
  
        <div className="icons-list">
          <div className="icons-circle">
            <img alt=" " className="icons" src={add}/>
          </div>
          <p className="home">Add New</p>
        </div>
  
        <div className="icons-list">
          <div className="icons-circle">
            <img alt=" " className="icons" src={setting}/>
          </div>
          <p className="home">Settings</p>
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
        <p className="overall">Overall</p>
        <p className="price">₹12,577.00</p>
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
          <img src={wallet} alt=" "/>
          <p className="wallet-card">Account and Cards</p>
        </div> 

        <div className="history-card-one">
          <img src={transfericon} alt=" "/>
          <p className="wallet-card">Transfer</p>
        </div> 

        <div className="history-card-one">
          <img src={withdrawicon} alt=" "/>
          <p className="wallet-card">Withdraw</p>
        </div>
        
          <div className="history-card-one">
            <img src={cashicon} alt=" "/>
            <p className="wallet-card">Mobile prepaid</p>
          </div> 
  
          <div className="history-card-one">
            <img src={billsicon} alt=" "/>
            <p className="wallet-card">Pay the Bill</p>
          </div> 
  
          <div className="history-card-one">
            <img src={pigicon} alt=" "/>
            <p className="wallet-card">Save Online</p>
          </div>

          <div className="history-card-one">
            <img src={crediticon} alt=" "/>
            <p className="wallet-card">Credit Card</p>
          </div> 
  
          <div className="history-card-one">
            <img src={transactionicon} alt=" "/>
            <p className="wallet-card">Transaction report</p>
          </div> 
  
          <div className="history-card-one">
            <img src={beneficiaryicon} alt=" "/>
            <p className="wallet-card">Beneficiary</p>
          </div>
    </div>

   
    </div>

    
  </div>
  </div>
    
  );
}

export default Dashboard;
