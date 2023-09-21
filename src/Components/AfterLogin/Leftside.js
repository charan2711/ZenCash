import React , { useState } from 'react';
import logo from './icons/logo.png';
import Home from './icons/Home.png';
import wallet from './icons/wallet.png';
import profile from './icons/profile.png';
import transactionicon from './icons/transfer-icon.png';
import setting from './icons/setting.png';
import power from './icons/power.png';
import './Styles/Dashboard.main.css'


import add from './icons/add.png';
import pigicon from './icons/pig-icon.png';
import transfericon from './icons/transfer-icon.png';
import billsicon from './icons/bill-icon.png';
import cashicon from './icons/cash-icon.png';
import withdrawicon from './icons/withdraw-icon.png';
import crediticon from './icons/credit-icon.png';


function LeftSide({ onClickTab }) {

  const [active, setActive] = useState('home');

  function handleHomeClick() {
    setActive('home');
    onClickTab('home');
  }

  function handleTransferClick() {
    setActive('transfer');
    onClickTab('transfer');
  }

  function handleTransactionHistoryClick() {
    setActive('transactionHistory');
    onClickTab('transactionHistory');
  }

  function handleAccountStatementClick() {
    setActive('accountStatement');
    onClickTab('accountStatement');
  }

  function handleUserDetailsClick() {
    setActive('userDetails');
    onClickTab('userDetails');
  }

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
          <div onClick={handleHomeClick} className={active==='home'?"icons-list-selected":"icons-list"}>
            <div className="icons-circle">
              <a href="#" className="icon-link">
                <img alt=" " className="icons" src={Home} />
              </a>
            </div>
            <a href="#" className="home">Home</a>
          </div>

          <div onClick={handleAccountStatementClick}  className={active==='accountStatement'?"icons-list-selected":"icons-list"}>
            <div className="icons-circle">
              <a href="#" className="icon-link">
                <img alt=" " className="icons" src={wallet} />
              </a>
            </div>
            <a href="#" className="home">Account Statement</a>
          </div>

          <div onClick={handleUserDetailsClick} className={active==='userDetails'?"icons-list-selected":"icons-list"}>
            <div className="icons-circle">
              <a href="#" className="icon-link">
                <img alt=" " className="icons" src={profile} />
              </a>
            </div>
            <a href="#" className="home">User Details</a>
          </div>

          <div onClick={handleTransferClick} className={active==='transfer'?"icons-list-selected":"icons-list"}  >
            <div className="icons-circle">
              <a href="#" className="icon-link">
                <img alt=" " className="icons" src={transactionicon} />
              </a>
            </div>
            <a href="#" className="home">Transfer Funds</a>
          </div>

          <div  onClick={handleTransactionHistoryClick} className={active==='transactionHistory'?"icons-list-selected":"icons-list"} >
            <div className="icons-circle">
              <a href="#" className="icon-link">
                <img alt=" " className="icons" src={transactionicon} />
              </a>
            </div>
            <a href="#" className="home">Transaction history</a>
          </div>

        </div>

        

        <div className="logout">
          <div className="logout-circle">
            <a href="#" className="icon-link">
              <img alt=" " className="logout-icon" src={power} />
            </a>
          </div>
          <a href="#" className="home">Logout</a>
        </div>

      </div>
    </div>
  )
}

export default LeftSide;
