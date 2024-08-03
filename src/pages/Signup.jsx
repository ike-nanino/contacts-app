import React, {useState} from 'react'
import '../signup.css'
import { Link } from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faLock, faEyeSlash} from '@fortawesome/free-solid-svg-icons';
import { faEye, faHouse} from '@fortawesome/free-solid-svg-icons';

function Signup() {

  const [showPassword, setShowPassword] = useState('password');
  
  const toggleShowPassword = () => {
    setShowPassword((curr) => (curr === 'password' ? 'text' : 'password'));
  }
  return (
    <div>
    <div className='background'>
    <Link to={'/'}>
      <header className='home-header'><FontAwesomeIcon icon={faHouse} /></header>
      </Link>
      <div className="signup-container">
        <aside>
          <div className="details">
            <h1>Welcome !</h1>
            <div className="login">
            <p>To keep connected with us, please sign in.</p>

          <Link to={'/login'}>
            <div> Login </div>
          </Link>

            </div>
          </div>
        </aside>

        <div className="signup-form">
          <div className="signup-details">
          <div className='heading'>
           <h2>Create An Account</h2>
           <p>Use your email to register</p>
          </div>

          <form>
            <div className="input-group">
            <span className='icon'>
            <FontAwesomeIcon icon={faUser} />
            </span>
            <input type="text" placeholder="Username" required />

            </div>

            <div className="input-group">
            <span className='icon'>
            <FontAwesomeIcon icon={faEnvelope} />
            </span>
            <input type="email" placeholder="Email" required />
            </div>
            

            <div className="input-group">
            <span className='icon'>
            <FontAwesomeIcon icon={faLock} />
            </span>
            <input type={showPassword} placeholder="Confirm Password" required />

            <span className='icon-eye'  onClick={toggleShowPassword}>

            { showPassword === 'password' ? <FontAwesomeIcon icon={faEye} />  :  <FontAwesomeIcon icon={faEyeSlash} />}
             
            
            </span>
            </div>
            
            
            <button className='signup-btn' type="submit">Sign Up</button>
          </form>
          
          </div>
        </div>
      </div>

    </div>
    
  </div>
  )
}

export default Signup
