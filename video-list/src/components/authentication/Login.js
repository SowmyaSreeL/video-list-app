import React, { useState } from 'react';
import Layout from '../Layout/Layout';
import {Link} from "react-router-dom";
import '../scss/login.scss';


const Login = () => {
  const [pwd, setPwd] = useState('');
  const [email, setEmail] = useState('');

  const [emailTouched, setEmailTouched] = useState(false);
  const [pwdTouched, setPwdTouched] = useState(false);

  const [pwdValid, setPwdValid] = useState(false);
  const [emailValid, setEmailValid] = useState(false);

  const loginUsers = [
      {
          'email': 'test@gmail.com',
          'password': 'Abc@123',
          'name': 'Test'
      },
      {
          'email': 'bot@gmail.com',
          'password': 'Abc@123',
          'name': 'Bot'
      },
      {
          'email': 'dummy@gmail.com',
          'password': 'Abc@123',
          'name': 'Dummy'
      }
    ]


  const emailChangeHandler = (e) => {
    const emailVal = e.target.value;
    setEmail(emailVal);

    if(emailVal !== '') {
      setEmailValid(true)
    }
  }

  const pwdChangehandler = (e) => {
    const pwdVal = e.target.value
    setPwd(pwdVal);

    if(pwdVal !== '') {
      setPwdValid(true);
    }
  }

  const emailBlurHandler = (e) => {
    setEmailTouched(true);
    if(e.target.value === '') {
      setEmailValid(false);
    }
  }

  const pwdBlurHandler = (e) => {
    setPwdTouched(true);
    if(e.target.value === '') {
      setPwdValid(false);
    }
  }
  
  const loginSubmitHandler = (event) => {
    event.preventDefault();
    setPwdTouched(true);
    setEmailTouched(true);

    if(!pwdValid || !emailValid) {
      return;
    }

    loginUsers.forEach(user => {
        if(email === user.email && password === user.password) {
            
        }
    });
  };
 
  return (
    <Layout className="video-signup-form__container">
      <h1>Sign In</h1>
      <form onSubmit={loginSubmitHandler}>
          <div className="form-control">
            <label htmlFor="email">Email address</label>
            <input type="email" id="email" onChange={emailChangeHandler} onBlur={emailBlurHandler} className="video-signup-input" value={email} />
            {emailTouched && !emailValid && <span className="err-text">please enter valid email</span>}
          </div>
          <div className="form-control">
            <label htmlFor="password">New password</label>
            <span className="password-strength"></span>
            <input type="password" onChange={pwdChangehandler} id="password" onBlur={pwdBlurHandler} className="video-signup-input" value={pwd} />
            {pwdTouched && !pwdValid && <span className="err-text">please enter valid password</span>}
          </div>
          <div className="form-control-btn">
            <button type="submit" className="video-signup-button">Login</button>
          </div>
          <div>
            <p className="existing-user">New User? <Link className="login" to="/signup">Sign Up</Link></p>
          </div>
      </form>
    </Layout>
  );
};

export default Login;
