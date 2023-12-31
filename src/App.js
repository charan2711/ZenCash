import './App.css';
import Image from './Components/Assets/Image.png'
import { Link } from 'react-router-dom';
import JwtLogin from './Components/JwtLogin';

function App() {
  JwtLogin();

  return (
    
    <div className="App">
      <div className="landing-page">
        <header>
          <div className="container">
              <h1  id="no"> ZenCash</h1>
            <ul className="links">
              <li>
                <Link to= "/Login" style={{color:"white"}}> Login</Link> </li> 
            
              <li>
              <Link to= "/Register" style={{color:"white"}}> Register</Link> 
              </li>
              
              
            </ul>
          </div>
        </header>
        <div className="content">
          <div className="container">
          
            <div className="info">
              <h1>Simplify Banking, Amplify Life! </h1>
              <p>We've reimagined the way you manage your finances. Our user-friendly website makes banking effortless, saving you time and energy. With top-notch security measures, your financial well-being is always protected. Say goodbye to complexity and hello to a life amplified by financial ease. Experience a brighter, simpler future with us</p>
              <div className='Space'></div>
              <Link to="/CreateAccount" className='button'>New User? </Link>
            </div>
            <div className="image">
              <img src={Image} alt='Description'>

                </img>
            </div>
          </div>
        </div>
      </div>
     

        </div>

       

  )  

  
};

export default App;
