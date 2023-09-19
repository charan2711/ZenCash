import { useState } from "react";
import styles from './Styles/FundTransfer.module.css';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const FundTransfer=()=>{
    const navigate = useNavigate();

    
    const [values,setValue] = useState({
     sender_first_name : "",
     sender_last_name : "",
     sender_acc_no : "",
     transaction_password : "",
     amount_to_send : "",
    })

    const handleChange = (e)=>{
        const {name,value} = e.target;
        setValue({...values, [name] : value});
    }

    const handlelogout=()=>{
        localStorage.removeItem('jsonwebtoken');
        navigate('/');
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        //console.log(values);

        // if(values.sender_acc_no.length!=10)
        // alert("Please enter 10 digit account number")

           

    const data={
        'firstName' : values.sender_first_name,
        'lastName' : values.sender_last_name,
        'accountNumber' : parseInt(values.sender_acc_no),
        'transactionPassword' : values.transaction_password,
        'amount' : parseInt(values.amount_to_send)
    }

    const jwttoken=localStorage.getItem('jsonwebtoken');
    console.log("token "+jwttoken)
    const config={
      method : 'post',
      url : 'http://localhost:8080/api/account/transfer',
      headers : {
        'Authorization' : 'Bearer '+jwttoken,
      },
      data : data
    };
  
    axios.request(config).then(e=>{
        console.log(e.data)
        alert("Money is sent successfully");
      }).catch(e=>{
        alert(e.response.data);
        console.log(e.response)
      });

    console.log({data});

    // axios.post('http://localhost:8080/api/account/transfer', data)
    //   .then((e)=>{
       
    //    console.log(e.data);

    //    })

    //   .catch((e)=>{
    //    alert(e.response.data);
    //   })
}

    return (
        <div id="particles-js" className={styles.registerContainer}>
            <button onClick={handlelogout} className='logout'>Logout</button>

        <div className={styles.formContainer}>
        <h1 className={styles.heading}>Fund Transfer</h1>
            <form className={styles.registerForm} onSubmit={handleSubmit}>

                <div className={styles.formGroup}>
                <label htmlFor="name" className="styles.formGroup">First Name :</label>
                <input
                id="name"
                type="text"
                name="sender_first_name"
                value={values.sender_first_name}
                required
                placeholder="First Name"
                onChange={handleChange}
                className={styles.inputLg}
                />
                </div>

                <div className={styles.formGroup}>
                <label htmlFor="name" className="styles.formGroup">Last Name :</label>
                <input
                id="name"
                type="text"
                name="sender_last_name"
                value={values.sender_last_name}
                required
                placeholder="Last Name"
                onChange={handleChange}
                className={styles.inputLg}
                />
                </div>

                <div className={styles.formGroup}>
                <label htmlFor="name">Sender Account Number :</label>
                <input
                id="name"
                type="text"
            
                name="sender_acc_no"
                value={values.sender_acc_no}
                required
                onChange={handleChange}
                className={styles.inputLg}
                placeholder="Enter Sender Account Number"
                />
                </div>

                <div className={styles.formGroup}>
                <label htmlFor="name">Transaction Password :</label>
                <input
                id="name"
                type="text"
                name="transaction_password"
                value={values.transaction_password}
                required
                onChange={handleChange}
                className={styles.inputLg}
                />
                </div>

                <div className={styles.formGroup}>
                <label htmlFor="name">Amount :</label>
                <input
                id="name"
                type="text"
                name="amount_to_send"
                value={values.amount_to_send}
                required
                onChange={handleChange}
                className={styles.inputLg}
                placeholder="In Rupees"
                />
                </div> 

                <button type="submit" className={styles.btnPrimary}>Send</button>
            </form>
        </div>
        </div>
    )


}
export default FundTransfer;