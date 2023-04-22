import './style.css';

import React,{useState} from 'react';

import login from '../api/login'

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false);
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleLogin = async (e) => {
      e.preventDefault();
      try {
        const loginData = await login(email, password);
        // Handle successful login
        console.log(loginData);
      } catch (error) {
        // Handle login error
        console.error(error);
      }
      if (rememberMe) {
        localStorage.setItem("loginCredentials", JSON.stringify({ email, password })); }
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
      <form onSubmit={handleLogin}>
        <div className='inp-email'>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" value={email} onChange={handleEmailChange} />
        </div>
        <div className='inp-pswd'>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" value={password} onChange={handlePasswordChange} />
        </div>
        <div>
          <label htmlFor="remember-me">Remember me</label>
          <input type="checkbox" id="remember-me" checked={rememberMe} onChange={handleRememberMeChange} />
        </div>
      
  
       <div className='frm-footer'> 
        <button className='frm-btn' onClick={handleLogin}>Submit</button>
        <button onClick={handleReset}  className='frm-btn'>Reset</button></div>
        {error && <div className="error-message">Incorrect email or password</div>}
        {success && <div className="success-message">Login successful</div>}
      </form>
    );
  };
  
  export default Login;
  
