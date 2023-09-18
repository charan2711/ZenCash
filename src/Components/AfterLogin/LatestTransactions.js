import React from 'react';
import jsonData from './Assets/data.json';
import style from './Styles/LatestTransactions.module.css';

function formatAmount(amount) 
{
  const numericAmount=parseFloat(amount);
  const sign=numericAmount>=0 ? '+' : '-';
  return `${sign}${Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(
    Math.abs(numericAmount)
  )}`;
}

function timeconv(timestamp)
{
    const date=new Date(timestamp);
    return date.toLocaleString();
}

function LatestTransactions() 
{
  return (
    <section>
      <h1 style={style.h1}>Latest Transactions</h1>

      {jsonData.map((transaction,index) => (
        <details style={{
                        ...style.details,
                        borderBottom: index === jsonData.length - 1 ? 'none' : '1px solid #b5bfd9',
                        marginBottom: index === jsonData.length - 1 ? '0.5em' : '0',
                      }}>

          <summary style={style.summary}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>

              <dl>
                <strong>{transaction.name}</strong>
              </dl>
              
              <dl>
                <span style={{ color: parseFloat(transaction.amount) >=0 ? 'green' : 'red' }}>
                  {formatAmount(transaction.amount)}
                </span>
              </dl>
            </div>
          </summary>
          
          <div>
            <dl>
              <div>
                <dt>Time</dt>
                <dd>{timeconv(transaction.time)}</dd>
              </div>

              <div>
                <dt>Account_Number</dt>
                <dd>{transaction.account}</dd>
              </div>
            </dl>
          </div>
        </details>
      ))}
    </section>
  );
}

export default LatestTransactions;
