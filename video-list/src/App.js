import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import SignUp from './components/authentication/SignUp';
import Login from './components/authentication/Login';


function App() {
  return (
    <>
      <Router>
        <main>
          <Routes>
            <Route exact path='/' element={<SignUp />}/>
            <Route exact path='/login' element={<Login />}/>
            <Route exact path='/signup' element={<SignUp />}/>
          </Routes>
        </main>
      </Router>
    </>
  );
}

export default App;
