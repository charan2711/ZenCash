import React, { useState } from 'react'; // Import your CSS file
import LeftSide from './Leftside';
import TopSide from './Topside';
import Home from './Home';
import FundTransfer from './FundTransfer';
import LatestTransactions from './LatestTransactions';
import './Styles/Dashboard.main.css'
import Beneficiary from './Beneficiary';
import UserProfile from './Profile';


function Dashboard() {
  const [active, setActive] = useState('home')
  function onClickTab(buttonName) {

    setActive(buttonName);
  }


  return (

    <div className="parent-div">
      <TopSide />
      <LeftSide onClickTab={onClickTab} />

      <div className='right-container'>
        <RightSide active={active} />
      </div>




    </div>

  );
}

function RightSide({ active }) {
  console.log('onclock' + active);
  if (active === 'home') {
    return <Home />
  } else if (active === 'transfer') {
    return <FundTransfer />;
  }
  else if (active === 'transactionHistory') {
    return <LatestTransactions />;
  } else if (active === 'beneficiary') {
    return <Beneficiary />
  }else if(active==='userDetails'){
    return <UserProfile/>
  }

  return <div>hi</div>


}

export default Dashboard;
