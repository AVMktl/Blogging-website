import React from 'react'
import { Link } from 'react-router-dom'
import './login.css'
const Login = () => {
  return (
    <div className='login'>
        <div className="login-container">
          <span className="loginTitle">Login</span>
          <form action="" className="loginForm">
              <label >Email</label>
              <input type="email" className='loginInput' placeholder='Enter your email...'/>
              <label >Password</label>
              <input type="password" className='loginInput' placeholder='Enter your password...'/>
              <button className='loginButton'>Login</button>
          </form>
          <button className='loginRegisterButton'>
          <Link to="/register" className="link ">REGISTER</Link>
          </button>
        </div>
    </div>
  )
}

export default Login

