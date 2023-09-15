import {useNavigate} from 'react-router-dom';
// import React, {Icon } from 'react';
// import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import {Navigation} from 'react-minimal-side-navigation';
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';


const Dashboard=()=>{
  const navigate=useNavigate();
  const handleLogout=()=>{
    localStorage.removeItem('jsonwebtoken');
    navigate('/');
  }
  return(
    <>
    <Navigation
        // you can use your own router's api to get pathname
        activeItemId="/Register"
        onSelect={({itemId}) => {
          // maybe push to the route
        }}
        items={[
          {
            title: 'Dashboard',
            itemId: '/dashboard',
            // you can use your own custom Icon component as well
            // icon is optional
            //elemBefore: () => <Icon name="inbox" />,
          },
          {
            title: 'Management',
            itemId: '/Register',
            //elemBefore: () => <Icon name="users" />,
            subNav: [
              {
                title: 'Projects',
                itemId: '/Register',
              },
              {
                title: 'Members',
                itemId: '/Register',
              },
            ],
          },
          {
            title: 'Another Item',
            itemId: '/Register',
            subNav: [
              {
                title: 'Teams',
                itemId: '/Register',
              },
            ],
          },
        ]}
      />
  </>
  );
}
export default Dashboard;