// Register.js

import React, { useState } from 'react';
import styles from './Register.module.css';
import Image from './img1.jpg';
import axios from 'axios'

function Register() {
  const [showOTPForm, setShowOTPForm] = useState(false);
    const [accountNumber, setaccountNumber] = useState('');
    const [userName, setuserName] = useState('');
    const [loginPassword, setloginPassword] = useState('');
    const [confirmLoginPassword, setconfirmLoginPassword] = useState('');
    const [transactionPassword, settransactionPassword] = useState('');
    const [confirmTransactionPassword, setconfirmTransactionPassword] = useState('');
    const [phoneNumber, setphoneNumber] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    // setShowOTPForm(true);
    console.log(accountNumber);
    console.log(userName);
    console.log(loginPassword);
    console.log(confirmLoginPassword);
    console.log(transactionPassword);
    console.log(confirmTransactionPassword);
    console.log(phoneNumber);
    if(userName.length===0){
      alert("userName can't be empty");
    }
    else if(accountNumber.length===0){
      alert("account number can't be empty");
    }
    else if(loginPassword!==confirmLoginPassword){
      alert("Invalid login password");
    }
    else if(transactionPassword!==confirmTransactionPassword){
      alert("Invalid transactionPassword");
    }
    else if(phoneNumber.length!==10){
      alert("Invalid phone number");
    }
    else{
      const myData = {
        'username': userName,
        'accountNumber':accountNumber,
        'accountPassword':loginPassword,
        'transactionPassword':transactionPassword,
        'phoneNumber':phoneNumber
      }
      axios.post('http://localhost:8080/api/enableNetBanking', myData)
      .then((e)=>{
       alert(e.data);
      })
      .catch((e)=>{
        console.log("errorrrrrrrr");
      })
    }

  };

  

  return (
    <div id="particles-js" className={styles.registerContainer}>
      <div className={styles.imageContainer}>
        <img src={Image} alt="User Registration" />
      </div>
      <div className={styles.formContainer}>
        <h1 className={styles.heading}>User Registration</h1>
        <form className={styles.registerForm} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="accountNumber">Account Number:</label>
            <input
              type="text"
              id="accountNumber"
              placeholder="Enter Account Number"
              onChange={(e)=>{
                setaccountNumber(e.target.value);
              }}
              className={styles.inputLg}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              placeholder="Enter Username"
              onChange={(e)=>{
                setuserName(e.target.value);
              }}
              className={styles.inputLg}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="loginPassword">Set Login Password:</label>
            <input
              type="password"
              id="loginPassword"
              placeholder="Set Login Password"
              onChange={(e)=>{
                setloginPassword(e.target.value);
              }}
              className={styles.inputLg}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="confirmLoginPassword">Confirm Login Password:</label>
            <input
              type="password"
              id="confirmLoginPassword"
              placeholder="Confirm Login Password"
              onChange={(e)=>{
                setconfirmLoginPassword(e.target.value);
              }}
              className={styles.inputLg}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="transactionPassword">Set Transaction Password:</label>
            <input
              type="password"
              id="transactionPassword"
              placeholder="Set Transaction Password"
              onChange={(e)=>{
                settransactionPassword(e.target.value);
              }}
              className={styles.inputLg}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="confirmTransactionPassword">Confirm Transaction Password:</label>
            <input
              type="password"
              id="confirmTransactionPassword"
              placeholder="Confirm Transaction Password"
              onChange={(e)=>{
                setconfirmTransactionPassword(e.target.value);
              }}
              className={styles.inputLg}
              required
            />
          </div>
          {!showOTPForm && (
            <div className={styles.formGroup}>
              <label htmlFor="phoneNumber">Phone Number:</label>
              <input
                type="text"
                id="phoneNumber"
                placeholder="Enter Phone Number"
                onChange={(e)=>{
                  setphoneNumber(e.target.value);
                }}
                className={styles.inputLg}
                required
              />
            </div>
          )}
          {!showOTPForm ? (
            <div className={styles.formGroup}>
              <button type="submit" className={styles.btnPrimary} >Submit</button>
            </div>
          ) : (
            <div className={styles.formGroup}>
              <label htmlFor="otp">Enter OTP:</label>
              <input
                type="text"
                id="otp"
                placeholder="Enter OTP"
                className={styles.inputLg}
                required
              />
            </div>
          )}
          {showOTPForm && (
            <div className={styles.formGroup}>
              <button type="submit" className={styles.btnPrimary}>Verify OTP</button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

export default Register;
