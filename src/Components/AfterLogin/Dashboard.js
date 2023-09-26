import React, { useState, useEffect } from 'react'; // Import your CSS file
import LeftSide from './Leftside';
import TopSide from './Topside';
import Home from './Home';
import FundTransfer from './FundTransfer';
import LatestTransactions from './LatestTransactions';
import './Styles/Dashboard.main.css'
import Beneficiary from './Beneficiary';
import UserProfile from './Profile';
import Deposit from './Deposit';
import WithDraw from './WithDrawal';
import AddBeneficiary from './AddBeneficiary';
import UpdatePassword from './UpdatePassword';
import axios from 'axios';
import { useActionData, useNavigate } from 'react-router-dom';
// import { data } from 'jquery';

function Dashboard() {

  const [accountNumer, setAccountNumer] = useState('');
  const [flag, setFlag] = useState(false);
  const [beneficiarieClickFunction, setBeneficiarieClickFunction] = useState();
  const [sendMoneyClickFunction, setSendMoneyClickFunction] = useState();
  const [balance, setBalance] = useState(0);
  var [fundTransferData, setFundTransferData] = useState({});

  const jwttoken = localStorage.getItem('jsonwebtoken');
  console.log("token " + jwttoken)
  const config = {
    method: 'get',
    url: 'http://localhost:8080/api/account',
    headers: {
      'Authorization': 'Bearer ' + jwttoken,
    }
  };

  useEffect(() => {
    axios.request(config).then(e => {
      console.log(e.data.accountNumber)
      setAccountNumer(e.data.accountNumber)
      setBalance(e.data.balance)
      console.log(balance)
    }).catch(e => {
      console.log(e.response)
    });
  }, []);


  const navigate = useNavigate();
  const handlelogout = () => {
    localStorage.removeItem('jsonwebtoken');
    navigate('/');
  }

  const [active, setActive] = useState('home')

  function onClickTab(buttonName) {
    console.log(buttonName);
   
    if(buttonName!=='transfer'){
      setFundTransferData({})
    }
    
    if(buttonName==='logout'){
      handlelogout();
    }else{
      setActive(buttonName);
    }
  }


  function onAddBeneficiaryAddClick() {
    console.log('added click');
    beneficiarieClickFunction();
  }

  function sendMoney(data) {
    sendMoneyClickFunction(data);
    setFundTransferData(data);
  }


  return (

    <div className="parent-div">
      <TopSide />
      <LeftSide onClickTab={onClickTab} beneficiarieClick={setBeneficiarieClickFunction} sendMoneyClick={setSendMoneyClickFunction} />

      <div className='right-container'>
        <RightSide active={active} onAddBeneficiaryAddClick={onAddBeneficiaryAddClick} sendMoney={sendMoney} fundTransferValues={fundTransferData}/>
      </div>

    </div>

  );
}

function RightSide({ active, onAddBeneficiaryAddClick, sendMoney,fundTransferValues }) {

  var isAdmin = true;
  if (active === 'home') {
    return <Home />
  } else if (active === 'transfer') {
    return <FundTransfer value={fundTransferValues} />;
  }
  else if (active === 'transactionHistory') {
    return <LatestTransactions />;
  } else if (active === 'beneficiary') {
    return <Beneficiary onAddBeneficiaryAddClick={onAddBeneficiaryAddClick} sendMoney={sendMoney} />
  } else if (active === 'userDetails') {
    return <UserProfile />
  } else if (active === 'deposit') {
    return <Deposit />
  } else if (active === 'withdraw') {
    return <WithDraw />
  } else if (active === 'addBenificiary') {
    return <AddBeneficiary />
  } else if (active === 'updatePassword') {
    return <UpdatePassword />
  }

  return <div>hi</div>


}

export default Dashboard;
