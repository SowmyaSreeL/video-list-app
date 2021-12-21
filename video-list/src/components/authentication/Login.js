import React, { useState } from 'react';
import Layout from '../Layout/Layout';
import Navbar from '../nav/Navbar';
import {Link, useNavigate} from "react-router-dom";


const Login = (props) => {
  const navigate = useNavigate();
  const [pwd, setPwd] = useState('');
  const [email, setEmail] = useState('');

  const [emailTouched, setEmailTouched] = useState(false);
  const [pwdTouched, setPwdTouched] = useState(false);

  const [pwdValid, setPwdValid] = useState(false);
  const [emailValid, setEmailValid] = useState(false);

  const [invalidCredentials, setInvalidcredentials] = useState(false);
  // const[isLoggedin, setIsLoggedIn] = useState(false);

  const loginUsers = [
    {
        'email': 'test@gmail.com',
        'password': 'Abc@123',
        'name': 'Smith Johnson Williams'
    },
    {
        'email': 'bot@gmail.com',
        'password': 'Abc@123',
        'name': 'James Robert Grigard'
    },
    {
        'email': 'dummy@gmail.com',
        'password': 'Abc@123',
        'name': 'Mary Linda Jennifer'
    }
  ];

  // useEffect(() => {
  //   const isLoggedIn = localStorage.getItem("user_logged_in");
  //   if(isLoggedIn) {
  //     setIsLoggedIn(true);
  //   }
  // }, [])
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
        if(email === user.email && pwd === user.password) {
            const userObj = {"name":user.name,"email":email,"password":pwd};
            // localStorage.setItem('user_logged_in',true);
            props.userLogInData(userObj);
            navigate('/my-account');
            return;
        }
    });
    setInvalidcredentials(true);
  };
 
  return (
    <>
      <Navbar title="Sign In" loginStatus={props.loginStatus}/>
      <Layout>
        <form onSubmit={loginSubmitHandler}>
            <div className="form-control">
              <label htmlFor="email">Email address</label>
              <input type="email" id="email" onChange={emailChangeHandler} onBlur={emailBlurHandler} className="video-form-input" value={email} placeholder="Enter your email" />
              {emailTouched && !emailValid && <span className="err-text">please enter valid email</span>}
            </div>
            <div className="form-control">
              <label htmlFor="password">Password</label>
              <Link to="/signup" className="forgot-password">Forgot</Link>
              <input type="password" onChange={pwdChangehandler} id="password" onBlur={pwdBlurHandler} className="video-form-input" value={pwd} placeholder="Enter your passowrd" />
              {pwdTouched && !pwdValid && <span className="err-text">please enter valid password</span>}
            </div>
            <div>
              {invalidCredentials && <span className="err-text">Invalid credentials</span>}
            </div>
            <div className="form-control-btn">
              <button type="submit" className="video-form-button">Login</button>
            </div>
            <div>
              <p className="existing-user">New User? <Link className="login" to="/signup">Sign Up</Link></p>
            </div>
        </form>
      </Layout>
    </>
  );
};

export default Login;
