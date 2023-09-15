import {useNavigate} from 'react-router-dom';
import React from 'react';
import { Link } from 'react-router-dom';
// import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
// import {Navigation} from 'react-minimal-side-navigation';
// import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
  CDBSidebarFooter,
} from 'cdbreact';


const Dashboard=()=>{
  const navigate=useNavigate();
  const handleLogout=()=>{
    localStorage.removeItem('jsonwebtoken');
    navigate('/');
  }
  return(
    <CDBSidebar>
        <CDBSidebarHeader prefix={<i className="fa fa-bars" />}>Zencash</CDBSidebarHeader>
        <CDBSidebarContent >
          <CDBSidebarMenu >
          <CDBSidebarMenuItem  textFontSize='10px' icon="th-large"><Link to="/CreateAccount" className='button'>Add Beneficiery</Link></CDBSidebarMenuItem>
            <CDBSidebarMenuItem textFontSize='10px' icon="th-large"><Link to="/CreateAccount" className='button'>Fund Transfer</Link></CDBSidebarMenuItem>
            <CDBSidebarMenuItem textFontSize='10px' icon="credit-card">
            <Link to="/CreateAccount" className='button'>Account Statement</Link>
            </CDBSidebarMenuItem>
            <CDBSidebarMenuItem textFontSize='10px' icon="sticky-note"><Link to="/CreateAccount" className='button'>Change Password</Link></CDBSidebarMenuItem>
            
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: 'center' }}>
          <div
            className="sidebar-btn-wrapper"
            style={{padding: '20px 5px'}}
          >
            Username
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
  );
}
export default Dashboard;