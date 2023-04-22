import React,{useState} from 'react';
import './style.css';
import user from '../images/user.png';
import { NavLink } from 'react-router-dom';

const Login = () => {
  const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false);
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);
  
    const handleSubmit = (event) => {
      event.preventDefault();
      if (email === "example@example.com" && password === "password") {
        if (rememberMe) {
          localStorage.setItem("loginCredentials", JSON.stringify({name, email, password }));
        } else {
          localStorage.removeItem("loginCredentials");
        }
        setSuccess(true);
        setName("");
        setEmail("");
        setPassword("");
        setTimeout(() => setSuccess(false), 2000);
        setError(false);
      } else {
        setError(true);
      }
    };
    const handleNameChange = (event) => {
      setName(event.target.value);
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
      setName("");
      setEmail("");
      setPassword("");
      setError(false);
    };
  
    return (
      <>
      <div className='login'>
      <div className='frm-cont'>
      <form onSubmit={handleSubmit}>
        <div className='frm-header'>
        <img src={user} className='img' alt='login icon'/>
        </div>
        <div className='name'>
          <label htmlFor="name">Name:</label>
          <input type="name" id="name" value={name} onChange={handleNameChange} />
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
       <NavLink to ="/home"> <button className='frm-btn' >Submit</button></NavLink>
        <button onClick={handleReset}  className='frm-btn1'>Reset</button></div>

        {error && <div className="error-message">Incorrect email or password</div>}
        {success && <div className="success-message">Login successful</div>}
      </form>
      </div>
      </div>
      </>
    );
  };
  
  export default Login;
  
