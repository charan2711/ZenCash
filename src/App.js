import './App.css';
import Image from './Components/Image.png'
import { Link } from 'react-router-dom';


function App() {
  return (
    
    <div className="App">
      <div className="landing-page">
        <header>
          <div className="container">
              <h1  id="no"> ZenCash</h1>
            <ul className="links">
              <li>
                <Link to= "/Login"> Login</Link> </li> 
            
              <li>
              <Link to= "/Register"> Register</Link> 
              </li>
  
            </ul>
          </div>
        </header>
        <div className="content">
          <div className="container">
          
            <div className="info">
              <h1>Simplify Banking, Amplify Life! </h1>
              <p>We've reimagined the way you manage your finances. Our user-friendly website makes banking effortless, saving you time and energy. With top-notch security measures, your financial well-being is always protected. Say goodbye to complexity and hello to a life amplified by financial ease. Experience a brighter, simpler future with us</p>
              <button>Create Account</button>
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
