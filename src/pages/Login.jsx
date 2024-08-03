import React, {useState} from 'react'
import '../signup.css'
import { Link } from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock, faEyeSlash} from '@fortawesome/free-solid-svg-icons';
import { faEye, faHouse} from '@fortawesome/free-solid-svg-icons';

function Login() {

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
            <h1>Hello!</h1>
            <div className="login">
            <p>Start your journey with us! To keep <br /> connected with us, please sign up..</p>

          <Link to={'/signup'}>
            <div> Signup </div>
          </Link>

            </div>
          </div>
        </aside>

        <div className="signup-form">
          <div className="signup-details">
          <div className='heading'>
           <h2>Login to your account</h2>
           <p>Sign in with your email</p>
          </div>

          <form>

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
            
            
            <button className='signup-btn' type="submit">Login</button>
          </form>
          
          </div>
        </div>
      </div>

    </div>
    
  </div>
  )
}

export default Login
