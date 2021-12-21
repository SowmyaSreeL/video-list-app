import React,{useState} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import SignUp from './components/authentication/SignUp';
import Login from './components/authentication/Login';
import MyAccount from './components/authentication/MyAccount';
import SignUpSuccess from './components/authentication/SignUpSuccess';
import './components/scss/login.scss';


function App() {
  const [logInData,setLogInData] = useState({});
  // const [loginStatus, setLoginStatus] = useState(false);

  const getDataFromLogin = (data) => {
    setLogInData(data);
   // setLoginStatus(loginStatus);
  }
  return (
    <div className="main__container">
      <Router>
          <Routes>
            <Route exact path='/' element={<SignUp loginStatus="false" />}/>
            <Route exact path='/login' element={<Login userLogInData={getDataFromLogin} loginStatus="false" />}/>
            <Route exact path='/signup' element={<SignUp loginStatus="false"/>}/>
            <Route exact path='/my-account' element={<MyAccount userData = {logInData} loginStatus="true" />}/>
            {/* {loginStatus && <Route exact path='/my-account' element={<MyAccount userData = {logInData} loginStatus="true" />} />} */}
            <Route exact path='/sign-up-success' element={<SignUpSuccess loginStatus="false" />}/>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
