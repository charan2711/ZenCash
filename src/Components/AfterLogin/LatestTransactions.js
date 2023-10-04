import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { PDFDownloadLink, Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import style from './Styles/LatestTransactions.module.css';

function formatAmount(amount) {
  const numericAmount = parseFloat(amount);
  const sign = numericAmount >= 0 ? '+' : '-';
  return `${sign}${Intl.NumberFormat('en-IN').format(
    Math.abs(numericAmount)
  )}`;
}

function timeconv(timestamp) {
  const date = new Date(timestamp);
  return date.toLocaleString();
}

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  header: {
    fontSize: 18,
    marginBottom: 10,
    textAlign: 'center', // Center-align the heading
    alignItems: 'center', // Center-align the heading vertically
    marginTop: '10px',
  },
  section: {
    margin: 10,
    flexGrow: 1,
  },
  table: {
    display: 'table',
    paddingLeft: '10px',
    paddingRight: '10px',
    marginTop: '10px',
    width: 'auto',
    fontSize: '12px',
  },
  tableRow: {
    flexDirection: 'row',
  },
  tableCell: {
    borderWidth: 1,
    borderColor: '#000',
    flexGrow: 1,
    padding: 5,
    width: '25%',
  },
  tableHeader: {
    backgroundColor: '#F0F0F0',
    fontWeight: 'bold',
    alignContent: 'center',
  },
});

function LatestTransactions() {
  const [json, setJson] = useState([]);
  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);
  const [filteredJson, setFilteredJson] = useState([]);

  const jwttoken = localStorage.getItem('jsonwebtoken');

  useEffect(() => {
    // Fetch all transactions when the component initially loads
    const config = {
      method: 'get',
      url: 'http://localhost:8080/api/account/transactions',
      headers: {
        'Authorization': 'Bearer ' + jwttoken,
      },
    };

    axios.request(config).then(e => {
      console.log(e.data)
      setJson(e.data);
      setFilteredJson(e.data); // Initialize filteredJson with all transactions
    }).catch(e => {
      console.log(e.response)
    });
  }, []);

  const handleFilter = (e) => {
    if (fromDate && toDate) {
      // Modify dates to include start and end of the day
      const fromDateObj = new Date(fromDate + 'T00:00:00'); // Start of the day
      const toDateObj = new Date(toDate + 'T23:59:59'); // End of the day

      // Filter transactions based on the date range
      const filteredData = json.filter(transaction => {
        const transactionDate = new Date(transaction.timestamp);
        return transactionDate >= fromDateObj && transactionDate <= toDateObj;
      });

      console.log({ filteredData })
      setFilteredJson(filteredData);
    } else {
      // If either fromDate or toDate is not specified, show all transactions
      setFilteredJson(json);
    }
  };

  return (
    <section>
      <h1 style={style.h1}>Latest Transactions</h1>

      {/* Date Range Inputs */}


      {/* <div style={{ display: 'flex',flexDirection:"column",width:"100%"}}> */}


        <div style={{ display: 'flex', alignItems: 'center', width:'100%' }}>
          <div style={{marginLeft:'0px', marginRight:'5px',width:'25%'}}>
            <label htmlFor="fromDate">From Date:</label>
            <input
            className={style.inputLg}
              type="date"
              id="fromDate"
              value={fromDate}
              onChange={(e) => setFromDate(e.target.value)}
            />
          </div>
          <div style={{marginLeft:'0px', marginRight:'5px',width:'25%'}}>
            <label htmlFor="toDate">To Date:</label>
            <input
             
             className={style.inputLg}
              type="date"
              id="toDate"
              value={toDate}
              onChange={(e) => setToDate(e.target.value)}
            />
          </div>
          <div style={{marginLeft:'0px', marginRight:'15px', marginTop:'15px',width:'25%'}}>
          <button onClick={handleFilter} className={style.btnPrimary}>Filter</button>
          </div>
          <div style={{marginTop:'15px'}}>
          <PDFDownloadLink style={{alignSelf:"center"}} document={<MyDocument data={filteredJson} />} fileName="transactions.pdf">
          {({ blob, url, loading, error }) =>
            loading ? 'Loading document...' : <button className={style.btnPrimary}>
              Download Statement
            </button>
          }
        </PDFDownloadLink>
        </div>
       

        

      </div>


      {filteredJson.map((transaction, index) => (
        <details key={index} style={{
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
      ))}
    </section>
  );
}

function MyDocument({ data }) {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.content}>
          <View style={{ alignItems: 'center' }}> {/* Center-align the heading */}
            <Text style={styles.header}>Transaction Data</Text>
          </View>
          <View style={styles.table}>
            <View style={[styles.tableRow, styles.tableHeader]}>
              <Text style={styles.tableCell}>Name</Text>
              <Text style={styles.tableCell}>Account No:</Text>
              <Text style={styles.tableCell}>Time and Date</Text>
              <Text style={styles.tableCell}>Amount</Text>
            </View>
            {data.map((transaction, index) => (
              <View key={index} style={styles.tableRow}>
                <Text style={styles.tableCell}>{transaction.name}</Text>
                <Text style={styles.tableCell}>{transaction.accountNumber}</Text>
                <Text style={styles.tableCell}>{timeconv(transaction.timestamp)}</Text>
                <Text style={styles.tableCell}>{formatAmount(transaction.amount)}</Text>
              </View>
            ))}
          </View>
        </View>
      </Page>
    </Document>
  );
}

export default LatestTransactions;
