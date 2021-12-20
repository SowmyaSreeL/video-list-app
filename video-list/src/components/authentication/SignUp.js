import React, { useState } from 'react';
import Layout from '../Layout/Layout';
import {Link} from "react-router-dom";
import '../scss/login.scss';


const SignUp = () => {
  const [userName, setuserName] = useState('');
  const [pwd, setPwd] = useState('');
  const [email, setEmail] = useState('');

  const [userNameTouched, setUserNameTouched] = useState(false);
  const [emailTouched, setEmailTouched] = useState(false);
  const [pwdTouched, setPwdTouched] = useState(false);

  const [userNameValid, setuserNameValid] = useState(false);
  const [pwdValid, setPwdValid] = useState(false);
  const [emailValid, setEmailValid] = useState(false);


  //const [credentials, setCredentials] = useState([]);

  const nameChanegHandler = (e) => {
    const enteredName = e.target.value;
    setuserName(enteredName);
    if(enteredName !== '') {
      setuserNameValid(true);
    }
  }

  const emailChangeHandler = (e) => {
    const regExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const emailVal = e.target.value;
    setEmail(emailVal);

    if(emailVal !== '' && regExp.test(emailVal)) {
      setEmailValid(true)
    }
  }

  const pwdChangehandler = (e) => {
    //Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character:
    const regExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    //Minimum eight characters, at least one uppercase letter, one lowercase letter and one number:
    const regExp2 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    const pwdVal = e.target.value;
    setPwd(pwdVal);
    const pwdStrength = document.querySelector('.password-strength');
  
    if(regExp2.test(pwdVal)) {
      pwdStrength.innerHTML = 'Normal';
      pwdStrength.style.color = 'red';

    }

    if(pwdVal !== '' && regExp.test(pwdVal)) {
      setPwdValid(true);
      pwdStrength.innerHTML = 'Strong';
      pwdStrength.style.color = '#46B13D';
    }
  }

  const nameBlurHandler = (e) => {
    setUserNameTouched(true);
    if(e.target.value === '') {
      setuserNameValid(false);
    }
  }

  const pwdBlurHandler = (e) => {
    setPwdTouched(true);
    if(e.target.value === '') {
      setPwdValid(false);
    }
  }

  const emailBlurHandler = (e) => {
    setEmailTouched(true);
    if(e.target.value === '') {
      setEmailValid(false);
    }
  }
  
  const submitHandler = (event) => {
    event.preventDefault();
    setUserNameTouched(true);
    setPwdTouched(true);
    setEmailTouched(true);

    if(!userNameValid || !pwdValid || !emailValid) {
      return;
    }
  };
 
  return (
    <Layout className="video-signup-form__container">
      <h1>Create an account</h1>
      <form onSubmit={submitHandler}>
          <div className="form-control">
            <label htmlFor="email">Full name</label>
            <input type="text" id="fullname" onChange={nameChanegHandler} onBlur={nameBlurHandler} className="video-signup-input" value={userName} />
            {userNameTouched && !userNameValid && <span className="err-text">please enter valid usename</span>}
          </div>
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
            <button type="submit" className="video-signup-button">Signup</button>
          </div>
          <div>
            <p className="existing-user">Already user? <Link className="login" to="/login">Login</Link></p>
          </div>
      </form>
    </Layout>
  );
};

export default SignUp;
