import React,{useState} from 'react';
import './Styles/Dashboard.css'; // Import your CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import LeftSide from './Leftside';
import TopSide from './Topside';

import Home from './Home';
import FundTransfer from './FundTransfer';
import LatestTransactions from './LatestTransactions';



function Dashboard() {
  const [active,setActive] =  useState('home')
  function onClickTab(buttonName) {
   
    setActive(buttonName);
  }
  

  return (

    <div className = "parent-div">

     
      <LeftSide onClickTab={onClickTab} />
      <RightSide active={active}/>

    </div>

  );
}

function RightSide({active}){
  console.log('onclock'+active);
  if(active==='home'){
    return <Home/>
  }else if(active==='transfer'){
    return <div>hi</div>;
  }
  else if(active==='transactionHistory'){
    return <LatestTransactions/>;
  }

  return <div>hi</div>

  
}

export default Dashboard;
