import React, { useState, useEffect } from 'react';
import style from './Styles/LatestTransactions.module.css';
import axios from 'axios';

function formatAmount(amount) {
  const numericAmount = parseFloat(amount);
  const sign = numericAmount >= 0 ? '+' : '-';
  return `${sign}${Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(
    Math.abs(numericAmount)
  )}`;
}

function timeconv(timestamp) {
  const date = new Date(timestamp);
  return date.toLocaleString();
}


function LatestTransactions() {
  const [json, setJson] = useState([]);

  const jwttoken = localStorage.getItem('jsonwebtoken');
  console.log("token " + jwttoken)
  const config = {
    method: 'get',
    url: 'http://localhost:8080/api/account/transactions',
    headers: {
      'Authorization': 'Bearer ' + jwttoken,
    }
  };

  useEffect(() => {
    axios.request(config).then(e => {
      console.log(e.data)
      setJson(e.data, [])
    }).catch(e => {
      console.log(e.response)
    });
  }, []);
  // if(json==[]){
  //   axios.request(config).then(e=>{
  //     console.log(e.data)
  //     setJson(e.data,[])
  //   }).catch(e=>{
  //     console.log(e.response)
  //   });
  // }


  return (
    <section>
      <h1 style={style.h4}>Latest Transactions</h1>

      {json.length>0? json.map((transaction, index) => (
        <details style={{
          ...style.details,
          borderBottom: index === json.length - 1 ? 'none' : '1px solid #b5bfd9',
          marginBottom: index === json.length - 1 ? '0.5em' : '0',
        }}>

          <summary style={style.summary}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>

              <dl>
                <strong>{transaction.name}</strong>
              </dl>

              <dl>
                <span style={{ color: parseFloat(transaction.amount) >= 0 ? 'green' : 'red' }}>
                  {formatAmount(transaction.amount)}
                </span>
              </dl>
            </div>
          </summary>

          <div>
            <dl>
              <div>
                <dt>Time</dt>
                <dd>{timeconv(transaction.timestamp)}</dd>
              </div>

              <div>
                <dt>Account_Number</dt>
                <dd>{transaction.accountNumber}</dd>
              </div>
            </dl>
          </div>
        </details>
      )) : <div><br/><br/><h4 style={{textAlign:"center"}}>No transaction found.</h4></div>}
    </section>
  );
}

export default LatestTransactions;
