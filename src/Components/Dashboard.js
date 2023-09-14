import {useNavigate} from 'react-router-dom';
const Dashboard=()=>{
  const navigate=useNavigate();
  const handleLogout=()=>{
    localStorage.removeItem('jsonwebtoken');
    navigate('/');
  }
  return(
    <div>
  <h1>Welcome to the Dashboard</h1>
   <button type="button" onClick={handleLogout}>Logout</button>
   </div>
  );
}
export default Dashboard;