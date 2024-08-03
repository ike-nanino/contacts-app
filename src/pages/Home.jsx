import React, { useState , useContext } from "react";
import { Link } from 'react-router-dom';
import '../home.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faToggleOn, faToggleOff } from '@fortawesome/free-solid-svg-icons';
import { ThemeContext } from "../App";
import contact from "../contact.png"




function Home() {

   const {theme, toggleTheme} = useContext(ThemeContext);

   const [showMore, setShowMore] = useState(false);
    
  return (
    <div>
        <div className='wrapper'>
      <header className='header'>
        <h1>
          CONTACTS <br /> by nanino 
        </h1>

        <div className="header-button">
          <Link to={'/login'} >
          <button className='login-button'>Login</button>
          </Link>

          <Link to={'/signup'}>
          <button className='button'>Create an Account</button>
          </Link>
        </div>
      </header>
      <div className='container'>
        <div className="header-container">
          <h1>
            Not just
            <br />
            another
            <br />
            contact app
          </h1>

          <p>Empowering unlimited connections</p>
          <Link to={'./signup'}>
          <button className='button'>Try now</button>
          </Link>
        </div>

        <div className='image-container'>
          <div>
            <img
              src={contact}
              alt="Contact"
              height="370px"
            />
          </div>
        </div>
      </div>
      </div>


    
      <div id="learn-more" className="middle-section">
      <div className="title" >
        Manage your contacts with ease
        </div>
        <div className="desc" > Contacts is easy to use and navigate, even if you're not tech-savvy. You should{`${showMore ? "" : "..." }`} <span className={`remaining ${showMore ? "moretext" : "" }`}> be able to quickly and easily add, edit, and delete contacts, as well as create and manage contact groups. If you're looking for a contact app that will make your life easier and more productive, try Contacts today.</span>
        </div>
        
        <p className="cta" onClick={() => setShowMore((prev) => !prev)}>{`${showMore ?  "Show Less" : "Show More"}`}</p>
      
      </div>

<footer className='footer'>

  
<h1>CONTACTS <br/> by nanino </h1>


<div className="designed">
<h3>Designed & Developed by nanino</h3>

<span> { theme === 'dark' ? <FontAwesomeIcon icon={faToggleOn} onClick={toggleTheme} checked={theme === "dark"} /> : <FontAwesomeIcon icon={faToggleOff} onClick={toggleTheme} checked={theme === "dark"} /> }  </span>
</div>
</footer>
      
    </div>
  );
}







export default Home;
