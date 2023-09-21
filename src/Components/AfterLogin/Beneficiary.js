import style from './Styles/Beneficiary.module.css';
import jsonData from './Assets/data.json';
import { useNavigate } from 'react-router-dom';


const Beneficiary = () => {

    const navigate = useNavigate();

    const handleAddBeneficiary = () => {
        navigate('/AddBeneficiary');
    }

    const handlesendmoney = (value) => {
        console.log({ value });
        navigate('/FundTransfer', { state: { value } });
    }

    // const [json, setJson] = useState([]);

    //   const jwttoken=localStorage.getItem('jsonwebtoken');
    //     console.log("token "+jwttoken)
    //     const config={
    //       method : 'get',
    //       url : 'http://localhost:8080/api/account/transactions',
    //       headers : {
    //         'Authorization' : 'Bearer '+jwttoken,
    //       }
    //     };  
    //     useEffect(()=>{
    //       axios.request(config).then(e=>{
    //         console.log(e.data)
    //         setJson(e.data,[])
    //       }).catch(e=>{
    //         console.log(e.response)
    //       });
    //     },[]);

    return (
        <div className={style.container}>
            <div>
                <h1>Beneficiary</h1>

            </div>
            <div>
                <table className={style.mytable}>
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Account Number</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {jsonData.map((value, key) => (
                            <tr key={key}>
                                <td>{value.firstName}</td>
                                <td>{value.lastName}</td>
                                <td>{value.accountNumber}</td>
                                <td><button onClick={() => handlesendmoney(value)} className={style.btn}>Send Money</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className={style.buttonContainer}>
                <button onClick={handleAddBeneficiary} className={style.addBeneficiary}>Add Beneficiary</button>
            </div>
        </div>
    );
}
export default Beneficiary;