import React from 'react';
import styles from './Login.module.css';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className={styles.loginContainer}>
      <div className={styles.imageContainer}>
        <img
          src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
          alt="Login"
        />
      </div>
      <div className={styles.formContainer}>
        <div className={styles.formBox}>
          <div className={styles.container}>
            <div className={styles.loginContainerWrapper}>
              
              <div className={styles.welcome}>
                <strong>Let's get you logged in!</strong>
              </div>

              <form>
                <div className={styles.formGroup}>
                  {/* <label htmlFor="login_username">Username</label> */}
                  <input
                    id="login_username"
                    className={styles.inputLg}
                    style={
                      {width: "30%",alignItems: "center",backgroundColor: "lightcoral",marginTop: "10px",marginLeft: "35%",marginBottom: "10px"}
              
                    }
                    type="email"
                    placeholder="Username"
                    required
                  />

                 
                </div>
                <div className={styles.formGroup}>
                  {/* <label htmlFor="login_password">Password</label> */}
                  <input
                    id="login_password"
                    className={styles.inputLg}
                    type="password"
                    style={
                      {width: "30%",alignItems: "center",backgroundColor: "lightcoral",marginTop: "10px",marginLeft: "35%",marginBottom: "20px"}
              
                    }
                    placeholder="Password"
                    required
                  />
                </div>
                <div className={styles.formGroup}>
                <li className={styles.LoginLogin}>
              <Link to= "/Register" style={{width: "30px",textAlign: "center"}}> Login</Link> 
              </li>
                </div>
              </form>

              <div className={styles.forgotLinks}>
                <a href="./ForgotUsername.js" className={styles.forgotUsername}>
                  Forgot Username?
                </a>
                <span className={styles.divider}>|</span>
                <a href="./ForgotPassword.js" className={styles.forgotPassword}>
                  Forgot Password?
                </a>
              </div>
              <div className={styles.registerLink}>
                <p>
                  New to the world of online banking? Let's get you started –{' '}
                  <a href="./Register">Register now!</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
