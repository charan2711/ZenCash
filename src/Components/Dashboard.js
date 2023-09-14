import {useNavigate} from 'react-router-dom';
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';

const Dashboard=()=>{
  const navigate=useNavigate();
  const handleLogout=()=>{
    localStorage.removeItem('jsonwebtoken');
    navigate('/');
  }
  return(
  <Sidebar
  >
  <Menu
    menuItemStyles={{
      button: {
        // the active class will be added automatically by react router
        // so we can use it to style the active menu item
        [`&.active`]: {
          backgroundColor: '#13395e',
          color: '#b6c8d9',
        },
      },
    }}
  >
    <MenuItem component={<useNavigate to="/Register" />}> Documentation</MenuItem>
    <MenuItem component={<useNavigate to="/Register" />}> Calendar</MenuItem>
    <MenuItem component={<useNavigate to="/Register" />}> E-commerce</MenuItem>
  </Menu>
</Sidebar>
  );
}
export default Dashboard;