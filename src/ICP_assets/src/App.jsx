import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signin from './pages/Login';
import SignUp from './pages/Signup';
import User from './pages/User';
import Hospital from './pages/Hospital';
import Company from './pages/Company';

function App() {
  console.log("hi");
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Signin/>} />
        <Route path='/signUp' element={<SignUp/>} />
        <Route path='/userDash' element={<User/>} />
        <Route path='/hospitalDash' element={<Hospital/>} />
        <Route path='/companyDash' element={<Company/>} />
      </Routes>
    </Router>
    // <div>
    //   <h1>Hi guys</h1>
    // </div>

  );
}

export default App;
