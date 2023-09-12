// Register.js

import React, { useState } from 'react';
import styles from './Register.module.css';
import Image from './img1.jpg';
import axios from 'axios'

function Register() {
  const [showOTPForm, setShowOTPForm] = useState(false);
    const [accountNumber, setaccountNumber] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    // setShowOTPForm(true);
    console.log(accountNumber);
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
