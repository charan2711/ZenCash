import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {faUser} from '@fortawesome/free-solid-svg-icons';
import { Helmet } from 'react-helmet';
import style from './ForgotPassword.css'; 
import background from './img1.jpg'

function ForgotUsername() {
  return (
    <div className='BodyContainer' style={{ backgroundImage: `url(${background})`, height:'100vh',
    
   
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',}}> 
    <div className="card" style={style.card}>
      <Helmet>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"
          integrity="sha512-+4zCK9k+qNFUR5X+cKL9EIR+ZOhtIloNl9GIKS57V1MyNsYpYcUrUeQc9vNfzsWfV28IaLL3i96P9sdNyeRssA=="
          crossorigin="anonymous"
        />
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossorigin
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <p className="lock-icon"  ><FontAwesomeIcon icon={faUser} /></p>
      <h2 style={style.h2}>Username Recovery</h2>
      <p style={{color: "#0f3c4c",textAlign: "center"}}>Find your ID</p>
      <input type="text" className="passInput" style={style.passInput} placeholder="Account Number" />
      <button className='PasswordButton' style={style.PasswordButton}>Reset Password</button>
    </div>
    </div>
  );
}

export default ForgotUsername;