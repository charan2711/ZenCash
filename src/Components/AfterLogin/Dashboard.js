import React from 'react';
import './Styles/Dashboard.css'; // Import your CSS file
import logo from './icons/logo.png'; // Import your image paths
import arrow from './icons/arrow.png';
import aiImage from './images/AI.png';

function Dashboard() {
  return (
    <div>
       <div class="left-side">

<div class="left-top">
  <div class="logo">
    <div class="logo-div">
      <img alt = "" class="logo-icon" src="/icons/logo.png"> </img>
    </div>
    <p class="logo-name">Walenteer</p>
  </div>

  <div class="balance">
    <div class="balance-heading">
      <p class="balance-text">Balance</p>
      <p class="balance-text">$12,577.00</p>
    </div>
    <div class="dots">
      <div class="div-circle"></div>
      <div class="div-circle"></div>
      <div class="div-circle"></div>
    </div>
  </div>

  <div class="home-menu">
    <div class="icons-list">
      <div class="icons-circle">
        <img alt = "" class="icons" src="icons/Home.png"> </img>
      </div>
      <p class="home">Home</p>
    </div>

    <div class="icons-list">
      <div class="icons-circle">
        <img alt = "" class="icons" src="icons/wallet.png"> </img>
      </div>
      <p class="home">Cards Manager</p>
    </div>

    <div class="icons-list">
      <div class="icons-circle">
        <img alt = "" class="icons" src="icons/profile.png"> </img>
      </div>
      <p class="home">Account</p>
    </div>

    <div class="icons-list">
      <div class="icons-circle">
        <img alt = "" class="icons" src="icons/add.png"> </img>
      </div>
      <p class="home">Add New</p>
    </div>

    <div class="icons-list">
      <div class="icons-circle">
        <img alt = "" class="icons" src="icons/setting.png"> </img>
      </div>
      <p class="home">Settings</p>
    </div>
</div>

</div>

<div class="left-bottom">
<div class="try-div">
<p class="try">Try the AI feature</p>
<img alt = "" class="arrow" src="icons/arrow.png"> </img>
</div>
<img alt = "" class="ai" src="images/AI.png"> </img>
</div>

<div class="logout">
<div class="logout-circle">
  <img alt = "" class="logout-icon" src="icons/power.png"> </img>
</div>
<p>Logout</p>
</div>

</div>

<img alt = "" class="decoration" src="images/decoration.png"> </img>

<div class="top-side">

<div class="top-first">
  <div class="dollar-stats">
    <p class="overall">Overall</p>
    <p class="price">$22,127.00</p>
  </div>

  <div class="dollar-stats">
    <p class="overall">Overall</p>
    <p class="price">$22,127.00</p>
  </div>

  <div class="dollar-stats">
    <p class="overall">Overall</p>
    <p class="price">$22,127.00</p>
  </div>

  <div class="dollar-stats">
    <p class="overall">Overall</p>
    <p class="price">$22,127.00</p>
  </div>
</div>

<div class="top-second">
  <div class="notification">
    <img alt = "" class="notification-icon" src="icons/notification.png"> </img>
    <div class="notification-count"></div>
  </div>
  <div class="profile-div">
    <img alt = "" class="profile" src="images/anna.jpg"> </img>
  </div>
</div>
</div>

<div class="cards-div">
<img alt = "" class="cards" src="images/Card1.png"> </img>
<img alt = "" class="cards" src="images/Card2.png"> </img>
<img alt = "" class="cards" src="images/Card3.png"> </img>
</div>

<div class="point-div">
<img alt = "" class="point" src="icons/point.png"> </img>
</div>

<div class="bottom-side">
<div class="bottom-left">
 <p class="campaigns">Top Campaigns</p>
 <p class="ads-manager">The Ads Manager</p>

 <div class="campaign-cards">
   <div class="create-new">
     <img class="add-button" src="/icons/add.png" alt = ""> </img>
     <p class="create-text">Create new</p>
   </div>

   <div class="google-div">

    <div class="google-half">

      <div class="play-top">
        <div class="play-div">
          <img class="play-button" src="/icons/play-icon.png" alt = ""> </img>
        </div>
      </div>
    </div>

    <div class="words">
      <p class="google">Google Ads</p>
      <p class="sales">1400 sales</p>
    </div>

     <div class="decoration-div">
      <img class="decoration-campaign" src="/icons/Rectangle 5.png" alt = ""> </img>
     </div>

   </div>

   <div class="linkedin-div">

    <div class="google-half">

      <div class="play-top">
        <div class="play-div">
          <img class="play-button" src="/icons/pause-icon.png" alt = ""> </img>
        </div>
      </div>
    </div>

    <div class="words">
      <p class="google">Linkedin Ads</p>
      <p class="sales">980 sales</p>
    </div>

   </div>
   
 </div>

 <div class="general">
   <p class="info">General Info</p>
   <div class="info-stats">
     <div class="stats-one">
       <div class="phone-stats">
         <div class="phone-div">
           <img class="phone" src="/icons/phone-call.png" alt = ""> </img>
         </div>
         <p class="phone">Phone Number</p>
       </div>

       <img src="/icons/play-grey.png" alt = ""> </img>
     </div>

     <div class="stats-one">
      <div class="phone-stats">
        <div class="phone-div">
          <img class="phone" src="/icons/credit-card 1.png" alt = ""> </img>
        </div>
        <p class="phone">Card Protection</p>
      </div>

      <img src="/icons/play-grey.png" alt = ""> </img>
    </div>

    <div class="stats-one">
      <div class="phone-stats">
        <div class="phone-div">
          <img class="phone" src="/icons/email.png" alt = ""> </img>
        </div>
        <p class="phone">Email</p>
      </div>

      <img src="/icons/play-grey.png" alt = ""> </img>
    </div>

    <div class="stats-one">
     <div class="phone-stats">
       <div class="phone-div">
         <img class="phone" src="/icons/credit-card-payment 1.png" alt = ""> </img>
       </div>
       <p class="phone">Limits</p>
     </div>

     <img src="/icons/play-grey.png" alt = ""> </img>
   </div>

   </div>
 </div>
</div>

<div class="bottom-right">
  <p class="history">History</p>
  <div class="manager-div">
    <p class="ads-manager">The Ads Manager</p>
    <p class="see">See all</p>
  </div>

  <div class="history-cards">
    <div class="history-card-one">
      <img src="/icons/wallet icon.png" alt = ""> </img>
      <p class="wallet-card">Account and Cards</p>
    </div> 

    <div class="history-card-one">
      <img src="/icons/transfer-icon.png" alt = ""> </img>
      <p class="wallet-card">Transfer</p>
    </div> 

    <div class="history-card-one">
      <img src="/icons/withdraw-icon.png" alt = ""> </img>
      <p class="wallet-card">Withdraw</p>
    </div>
    
      <div class="history-card-one">
        <img src="/icons/cash-icon.png" alt = ""> </img>
        <p class="wallet-card">Mobile prepaid</p>
      </div> 

      <div class="history-card-one">
        <img src="/icons/bill-icon.png" alt = ""> </img>
        <p class="wallet-card">Pay the Bill</p>
      </div> 

      <div class="history-card-one">
        <img src="/icons/pig-icon.png" alt = ""> </img>
        <p class="wallet-card">Save Online</p>
      </div>

      <div class="history-card-one">
        <img src="/icons/credit-icon.png" alt = ""> </img>
        <p class="wallet-card">Credit Card</p>
      </div> 

      <div class="history-card-one">
        <img src="/icons/transaction-icon.png" alt = ""> </img>
        <p class="wallet-card">Transaction report</p>
      </div> 

      <div class="history-card-one">
        <img src="/icons/beneficiary-icon.png" alt = ""> </img>
        <p class="wallet-card">Beneficiary</p>
      </div>
</div>
</div>
</div>
    </div>
  );
}

export default Dashboard;
