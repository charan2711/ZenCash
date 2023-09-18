import { useState } from "react";
import styles from './Styles/FundTransfer.module.css';

//import axios from "axios";

const FundTransfer=()=>{
    
    const [values,setValue] = useState({
     sender_name : "",
     sender_acc_no : "",
     transaction_password : "",
     amount_to_send : "",
    })

    const handleChange = (e)=>{
        const {name,value} = e.target;
        setValue({...values, [name] : value});
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        //console.log(values);

        // if(values.sender_acc_no.length!=10)
        // alert("Please enter 10 digit account number")

    const data={
        'Sender Name' : values.sender_name,
        'Sender Acccount Number' : values.sender_acc_no,
        'Transaction Password' : values.transaction_password,
        'Amount to be transferred' : values.amount_to_send
    }

    console.log({data});

    // axios.post('http://localhost:8080/api/auth/login', data)
    //   .then((e)=>{
       
    //    console.log(e.data);

    //    })

    //   .catch((e)=>{
    //    alert(e.response.data);
    //   })
}

    return (
        <div id="particles-js" className={styles.registerContainer}>

        <div className={styles.formContainer}>
        <h1 className={styles.heading}>Fund Transfer</h1>
            <form className={styles.registerForm} onSubmit={handleSubmit}>

                <div className={styles.formGroup}>
                <label htmlFor="name" className="styles.formGroup">Sender Name :</label>
                <input
                id="name"
                type="text"
                name="sender_name"
                value={values.sender_name}
                required
                placeholder="First Name + ' ' + Last Name"
                onChange={handleChange}
                className={styles.inputLg}
                />
                </div>

                <div className={styles.formGroup}>
                <label htmlFor="name">Sender Account Number :</label>
                <input
                id="name"
                type="text"
                maxLength="10"
                pattern="\d{10}"
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