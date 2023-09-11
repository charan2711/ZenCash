import React, { useState } from 'react';
import styles from './Register.module.css'; // Import the CSS module

function Register() {
  const [showOTPForm, setShowOTPForm] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowOTPForm(true);
  };

  return (
    <>
      <div id="particles-js"></div>
      <div className={styles.registerContainer}>
        <h1>Register</h1>
        <form className={styles.registerForm} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="accountNumber">Account Number:</label>
            <input
              type="text"
              id="accountNumber"
              placeholder="Enter Account Number"
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              placeholder="Enter Username"
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="loginPassword">Set Login Password:</label>
            <input
              type="password"
              id="loginPassword"
              placeholder="Set Login Password"
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="confirmLoginPassword">Confirm Login Password:</label>
            <input
              type="password"
              id="confirmLoginPassword"
              placeholder="Confirm Login Password"
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="transactionPassword">Set Transaction Password:</label>
            <input
              type="password"
              id="transactionPassword"
              placeholder="Set Transaction Password"
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="confirmTransactionPassword">Confirm Transaction Password:</label>
            <input
              type="password"
              id="confirmTransactionPassword"
              placeholder="Confirm Transaction Password"
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
                required
              />
            </div>
          )}
          {!showOTPForm ? (
            <div className={styles.formGroup}>
              <button type="submit" className={styles.btnPrimary}>Submit</button>
            </div>
          ) : (
            <div className={styles.formGroup}>
              <label htmlFor="otp">Enter OTP:</label>
              <input
                type="text"
                id="otp"
                placeholder="Enter OTP"
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
    </>
  );
}

export default Register;
