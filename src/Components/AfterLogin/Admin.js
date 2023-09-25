import React, { useState } from 'react';
import './Styles/Admin.module.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import JsonData from './Assets/data.json';

function Admin() {

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
    <section>
        <h1>NetBanking Requests</h1>
        <div>
            {JsonData.map((transaction, index) => (
                <details key={index} style={{ marginBottom: "0px", marginTop: "0px", paddingBottom: "0px" }}>
                    <summary>
                        <div className="user-info" style={{ marginBottom: "10px" }}>
                            <div className="name" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                <strong>{transaction.firstName} {transaction.lastName}</strong>
                                <div>
                                    <button className="accept-button" style={{ marginRight: "10px", backgroundColor: "#44e40abe" }}>Accept</button>
                                    <button className="reject-button" style={{ backgroundColor: "#eb2828" }}>Reject</button>
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
                                <dt>Contact No:</dt>
                                <dd>{transaction.mobileNumber}</dd>
                            </div>
                            <div style={{ flex: "1", marginRight: "px" }}>
                                <dt>DoB:</dt>
                                <dd>{transaction.dob}</dd>
                            </div>
                            <div style={{ flex: "1" }}>
                                <dt>Address:</dt>
                                <dd>{transaction.address}</dd>
                            </div>
                        </dl>
                    </div>
                </details>
            ))}
        </div>
    </section>
</div>
    );
}

export default Admin;