import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './Components/Login';
import Register from './Components/Register'
import CreateAccount from './Components/CreateAccount';
import ForgotUsername from './Components/ForgotUsername';
import Contact from './Components/Contact';
import ForgotPassword from './Components/ForgotPassword';
import Dashboard from './Components/AfterLogin/Dashboard';
import JwtLogin from './Components/JwtLogin'
import TransactionHistory from './Components/AfterLogin/TransactionsHistory'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
   
    
  },
  {
    path: "/JwtLOGIN",
    element: <JwtLogin />,
   
    
  },
  {
    path: "/Login",
    element: <Login />,
   
    
  },
  {
  path: "/Dashboard",
  element: <Dashboard />,
 
  
  },
  {
    path: "/Register",
    element: <Register />,
   
    
  },
  {
    path: "/CreateAccount",
    element: <CreateAccount />,
  }
  ,
  {
    path: "/ForgotUsername",
    element: <ForgotUsername />,
   
    
  }
  ,
  {
    path: "/ForgotPassword",
    element: <ForgotPassword />,
   
    
  },
  {
    path: "/Contact",
    element: <Contact />,
   
    
  },
  {
    path: "/TransactionHistory",
    element: <TransactionHistory />,
   
    
    },
 
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

