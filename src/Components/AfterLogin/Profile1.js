import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './Styles/Profile1.css'
import axios from "axios";
import search from './icons/sr.png';



function Profile() {

    const [data, setJson] = useState([]);
    const [accountNumber, setAccountNumber] = useState(0);
    const [admin, setAdmin] = useState([]);

    function fetchDetails(url) {
        const jwttoken = localStorage.getItem('jsonwebtoken');
        console.log("token " + jwttoken)
        const config = {
            method: 'get',
            url: url,
            headers: {
                'Authorization': 'Bearer ' + jwttoken,
            }
        };

        axios.request(config).then(e => {
            console.log(e.data)
            if(url==='http://localhost:8080/api/details'){
                setAdmin(e.data.admin);
            }
            setJson(e.data, [])
        }).catch(e => {
            alert(e.response.data)
        });


    }

    useEffect(() => {
        fetchDetails('http://localhost:8080/api/details');
    }, []);

    function onSearch(){
        console.log('search'+accountNumber)
        fetchDetails('http://localhost:8080/api/details/'+accountNumber)
    }

   
    const handleChange = (e) => {
        const { name, value } = e.target;
        setAccountNumber(parseInt(value))
    }

    return <div id='parent'>

        {admin === true ? <div id='search-bar'>

            <input
                id="account_number"
                type="text"
                name="account_number"
                required
                placeholder="Account Number"
                className='inputLg'
                
                onChange={handleChange}
            />

            <div className="search-circle" onClick={onSearch}>
                <a href="#" className="icon-link">
                    <img alt=" " className="logout-icon" src={search} />
                </a>
            </div>


        </div> : <div />}

        <div id='info-box'>
            <div id='left'>
                <img src="https://img.icons8.com/bubbles/100/000000/user.png" className="img-radius" alt="User-Profile-Image" />
                <p className='left-text'>{data.firstName + " " + data.lastName}</p>
                <p className='left-text'>{'@' + data.username}</p>
            </div>
            <div id='right'>

                <p className='right-title'>Personal details</p>
                <div className='devider'></div>

                <div className='info-container'>

                    <div className='profile-info'>
                        <p className='right-title'>Name</p>
                        <p className='info-text'>{data.firstName + " " + data.lastName}</p>
                    </div>

                    <div className='profile-info'>
                        <p className='right-title'>Father's name</p>
                        <p className='info-text'>{data.fatherName}</p>
                    </div>

                </div>

                <div className='info-container'>

                    <div className='profile-info'>
                        <p className='right-title'>DOB</p>
                        <p className='info-text'>{data.dob}</p>
                    </div>

                    <div className='profile-info'>
                        <p className='right-title'>Gender</p>
                        <p className='info-text'>{data.gender}</p>
                    </div>

                </div>

                <br />

                <p className='right-title'>Bank details</p>
                <div className='devider'></div>

                <div className='info-container'>

                    <div className='profile-info'>
                        <p className='right-title'>Account Number</p>
                        <p className='info-text'>{data.accountNumber}</p>
                    </div>

                    <div className='profile-info'>
                        <p className='right-title'>Balance</p>
                        <p className='info-text'>{data.balance}</p>
                    </div>

                </div>


                <br />

                <p className='right-title'>Contact details</p>
                <div className='devider'></div>

                <div className='info-container'>

                    <div className='profile-info'>
                        <p className='right-title'>Email</p>
                        <p className='info-text'>{data.email}</p>
                    </div>

                    <div className='profile-info'>
                        <p className='right-title'>Phone</p>
                        <p className='info-text'>{data.contactNumber}</p>
                    </div>

                </div>

                <div className='info-container'>

                    <div className='profile-info'>
                        <p className='right-title'>Address</p>
                        <p className='info-text'>{data.address}</p>
                    </div>

                    <div className='profile-info'>
                        <p className='right-title'>Identity Proof Number</p>
                        <p className='info-text'>{data.identityProofNumber}</p>
                    </div>

                </div>

                <br />



            </div>
        </div>
        <br />
        <br />
    </div>
}

export default Profile;