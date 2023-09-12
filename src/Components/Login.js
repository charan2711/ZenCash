import React, { useState } from 'react';
import styles from './Login.module.css';
import axios from 'axios';

function Login() {
  const [username,setUserName]=useState("");
  const [password,setPassword]=useState("");
  const handleOnSubmit=(e)=>{
    e.preventDefault();
    // console.log(username);
    // console.log(password);
    if(username.length==0)
    alert("Please enter your Email Address")
    else if(password.length<6)
    alert("Invalid Password")
    else{
      const data={
        'username': username,
        'password': password
      }
      console.log({data});
      axios.post('http://localhost:8080/api/enableNetBanking', data)
      .then((e)=>{
       alert(e.data);
      })
      .catch((e)=>{
        console.log("errorrrrrrrr");
      })
    }
  }

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

              <form onSubmit={handleOnSubmit}>
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
                    onChange={(e)=>setUserName(e.target.value)}
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
                    onChange={(e)=>setPassword(e.target.value)}
                    placeholder="Password"
                    required
                  />
                </div>
                <div className={styles.formGroup}>
                <li className={styles.LoginLogin}>
              <button type='submit' style={{width: "50px",textAlign: "center"}}>Login</button> 
              </li>
                </div>
              </form>

              <div className={styles.forgotLinks}>
                <a href="/" className={styles.forgotUsername}>
                  Forgot Username?
                </a>
                <span className={styles.divider}>|</span>
                <a href="/" className={styles.forgotPassword}>
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
