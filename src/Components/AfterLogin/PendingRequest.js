import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import JsonData from './Assets/data.json';

function PendingRequest() {

    // const jwttoken = localStorage.getItem('jsonwebtoken');
    // console.log("token " + jwttoken)
    // const config = {
    //     method: 'get',
    //     url: 'http://localhost:8080/api/account',
    //     headers: {
    //         'Authorization': 'Bearer ' + jwttoken,
    //     }
    // };

    // axios.request(config).then(e => {
    //     console.log(e.data.accountNumber)
    //     setAccountNumer(e.data.accountNumber)
    //     setBalance(e.data.balance)
    // }).catch(e => {
    //     console.log(e.response)
    // });

    return (
        <div>
    <div>
        <h2  style={{color: "#3498db",paddingTop:"20px"}}>Netbanking Requests</h2>
        <div style={{width:"50vw",marginTop:"20px"}}>
            {JsonData.map((transaction, index) => (
                <details key={index} style={{ marginBottom: "0px", marginTop: "0px", paddingBottom: "0px" }}>
                    <summary>
                        <div className="user-info-aa" style={{ marginBottom: "10px" }}>
                            <div className="name-aa" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                <strong>{transaction.firstName} {transaction.lastName}</strong>
                                <div style={{display:"flex", flexDirection:"row"}}>
                                    <button className="accept-button" style={{  marginRight: "10px", backgroundColor: "#44e40abe", height:"30px", width:"70px", fontWeight:"bold" }}>Accept</button>
                                    <button className="reject-button" style={{ backgroundColor: "#eb2828",height:"30px", width:"70px",fontWeight:"bold" }}>Reject</button>
                                </div>
                            </div>
                            <div className="account-number">
                                <p>Account Number: {transaction.accountNumber}</p>
                            </div>
                        </div>
                    </summary>
                    <div>
                        <dl style={{ display: "flex", flexWrap: "wrap" }}>
                            <div style={{ flex: "1", marginRight: "2px" }}>
                                <dt>S/O:</dt>
                                <dd>{transaction.fatherName}</dd>
                            </div>
                            <div style={{ flex: "1", marginRight: "2px" }}>
                                <dt>Email:</dt>
                                <dd>{transaction.email}</dd>
                            </div>
                            <div style={{ flex: "1", marginRight: "2px" }}>
                                <dt>Contact:</dt>
                                <dd>{transaction.mobileNumber}</dd>
                            </div>
                            <div style={{ flex: "1", marginRight: "px" }}>
                                <dt>DoB:</dt>
                                <dd>{transaction.dob}</dd>
                            </div>
                        </dl>
                    </div>
                </details>
            ))}
        </div>
    </div>
</div>
    );
}

export default PendingRequest;