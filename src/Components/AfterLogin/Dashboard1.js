import React, { useState } from 'react';
import './Styles/dashboard1.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Dashboard1() {

    const [accountNumer, setAccountNumer] = useState('');
    const [balance, setBalance] = useState(0);

    const navigate = useNavigate();
    const jwttoken = localStorage.getItem('jsonwebtoken');
    console.log("token " + jwttoken)
    const config = {
        method: 'get',
        url: 'http://localhost:8080/api/account',
        headers: {
            'Authorization': 'Bearer ' + jwttoken,
        }
    };

    axios.request(config).then(e => {
        console.log(e.data.accountNumber)
        setAccountNumer(e.data.accountNumber)
        setBalance(e.data.balance)
    }).catch(e => {
        console.log(e.response)
    });

    const handleTransfer = () => {
       // navigate('')
    };
    const showHistory = () => {
        //navigate('')
    };
    return (
        <div>
            <h1>Dashboard</h1>
            <div className='center-box'>
                <h3>Account Number : {accountNumer}<br/><br />Balance : {balance}</h3>
                <h3></h3>
                <div className="centered-container">
                    <button onClick={handleTransfer} className="centered-button">Transfer Fund</button>
                    <button onClick={showHistory} className="centered-button">Transaction History</button>
                </div>
            </div>
        </div>
    );
}

export default Dashboard1;