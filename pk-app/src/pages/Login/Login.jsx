import React, { useState } from 'react'
import "./Login.css"
import { useNavigate } from 'react-router-dom';


function Login() {

  const navigation =  useNavigate();

  function handleLogin() {

    navigation('/main')

  }

  return (

    <div>
      <div className="container">
        <div className="heading">Sign In</div>
        <form action="" className="form">
          <input required="" className="input" type="email" name="email" id="email" placeholder="E-mail" />
          <input required="" className="input" type="password" name="password" id="password" placeholder="Password" />
          <span className="forgot-password"><a href="#">Forgot Password ?</a></span>
          <input className="login-button" type="submit" value="Sign In" onClick={handleLogin} />

        </form>
        <div className="social-account-container">
          <span className="title">Or Sign in with</span>
          <div className="social-accounts">

          </div>
        </div>
        <span className="agreement"><a href="#">Learn user licence agreement</a></span>
      </div>
    </div>
  )
}

export default Login;