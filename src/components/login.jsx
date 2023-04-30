import './style.css';

import React,{useEffect, useState} from 'react';

import { NavLink } from 'react-router-dom';
import {login} from '../api/login'
import user from '../images/user.png';

const Login = () => {
  
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false);
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);
    const [userData, setUserData] = useState()
    useEffect(() => {
      if (localStorage.getItem('loginCredentials')) {
        setEmail(JSON.parse(localStorage.getItem('loginCredentials')).email)
        setPassword(JSON.parse(localStorage.getItem('loginCredentials')).password)
     }
    },[])

    const handleLogin = async (e) => {
      e.preventDefault();
      try {
        const loginData = await login(email, password);
        if ("access_token" in loginData){  
          console.log(loginData);
          console.log(loginData.access_token)
          setUserData(loginData);
          localStorage.setItem("token", loginData.access_token); 
          localStorage.setItem("login","true");
          localStorage.setItem("level",loginData.level);
          window.location.href = '/home'; }
        // Handle successful login
        else {
          setUserData(loginData);
          setError(true);
          setSuccess(false);
        }

      } catch (error) {
        // Handle login error
        console.error(error);
      }
      if (rememberMe) {
        localStorage.setItem("loginCredentials", JSON.stringify({ "email" : email,"password" : password })); }
    };
  

    const handleEmailChange = (event) => {
      setEmail(event.target.value);
    };
  
    const handlePasswordChange = (event) => {
      setPassword(event.target.value);
    };
  
    const handleRememberMeChange = (event) => {
      setRememberMe(event.target.checked);
    };
  
    const handleReset = (event) => {
      event.preventDefault();
     
      setEmail("");
      setPassword("");
      setError(false);
    };
  
    return (
      <>
      <div className='login'>
      <div className='frm-cont'>
      <form>
        <div className='frm-header'>
        <img src={user} className='img' alt='login icon'/>
        </div>
       
        <div className='inp-email'>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" value={email} onChange={handleEmailChange} />
        </div>
        <div className='inp-pswd'>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" value={password} onChange={handlePasswordChange} />
        </div>
        <div id="remember-me">
          <label htmlFor="remember-me">Remember me</label>
          <input type="checkbox" className='chk' checked={rememberMe} onChange={handleRememberMeChange} />
        </div>
      
  
       <div className='frm-footer'> 
        <button className='frm-btn' onClick={handleLogin}>Submit</button>
        <button onClick={handleReset}  className='frm-btn'>Reset</button>
        
        </div>
        {error && <div className="error-message">{userData.message}</div>}
        {success && <div className="success-message">Login successful</div>}
      </form>
      </div>
      </div>
      </>
    );
  };
  
  export default Login;
  
