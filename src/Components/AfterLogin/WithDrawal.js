import { useState } from "react";
import styles from './Styles/WithDrawal.module.css';
import axios from "axios";


const Deposit = () =>{

    const [values,setValue] = useState({
        first_name : "",
        last_name : "",
        acc_no : "",
        amount_to_withdraw : "",
       })

    const handleChange = (e)=>{
    const {name,value} = e.target;
    setValue({...values, [name] : value});
    }

    const handleSubmit = (e) =>{
        e.preventDefault();           

    const data={
        'firstName' : values.first_name,
        'lastName' : values.last_name,
        'accountNumber' : parseInt(values.acc_no),
        'amount' : parseInt(values.amount_to_withdraw)
    }

    console.log({data});

    const jwttoken=localStorage.getItem('jsonwebtoken');
    console.log("token "+jwttoken)
    const config={
      method : 'post',
      maxBodyLength: Infinity,
      url: 'http://localhost:8080/api/account/withdraw',
      headers : {
        'Content-Type': 'application/json', 
        'Authorization' : 'Bearer '+jwttoken,
      },
      data : data
    };
  
    axios.request(config)
    .then((response) => {
        alert("Money successfully withdrawn.")
    console.log(JSON.stringify(response.data));
    })
    .catch((error) => {
        alert(error.response.data)
    console.log(error);
    });

    }

return (
    <div id="particles-js" className={styles.registerContainer}>

    <div className={styles.formContainer}>
    <h1 className={styles.heading}>WithDraw Money</h1>
        <form className={styles.registerForm} onSubmit={handleSubmit}>

            <div className={styles.formGroup}>
            <label htmlFor="name" className="styles.formGroup">First Name :</label>
            <input
            id="name"
            type="text"
            name="first_name"
            value={values.first_name}
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
            name="last_name"
            value={values.last_name}
            required
            placeholder="Last Name"
            onChange={handleChange}
            className={styles.inputLg}
            />
            </div>

            <div className={styles.formGroup}>
            <label htmlFor="name">Account Number :</label>
            <input
            id="name"
            type="text"
        
            name="acc_no"
            value={values.acc_no}
            required
            onChange={handleChange}
            className={styles.inputLg}
            placeholder="Enter Account Number"
            />
            </div>

            <div className={styles.formGroup}>
            <label htmlFor="name">Amount to be Withdrawn :</label>
            <input
            id="name"
            type="text"
            name="amount_to_withdraw"
            value={values.amount_to_withdraw}
            required
            onChange={handleChange}
            className={styles.inputLg}
            placeholder="In Rupees"
            />
            </div> 

            <button type="submit" className={styles.btnPrimary}>Withdraw</button>
        </form>
    </div>
    </div>
)

}
export default Deposit;