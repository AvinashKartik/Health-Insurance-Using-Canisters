import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/Login';
import SignUpPage from './pages/Signup';
import UserPage from './pages/User';
import HospitalPage from './pages/Hospital';
import CompanyPage from './pages/Company';
import BuyForm from './components/BuyForm';
import ClaimForm from './components/ClaimForm';
import { User } from '../../declarations/user';
import { ICP } from '../../declarations/ICP';
import { Hospital } from '../../declarations/Hospital';
import { Company } from '../../declarations/Company';

//login - 0
//signup - 1
//user - 2
//hospital - 3
//company - 4
//buy - 5
//claim - 6

function App() {
    var [uname, setUname] = useState("");
    var [type, setType] = useState("");
    var [f, setf] = useState(0);

    function Login() {
        setf(0);
    }

    async function LoggedIn(x) {
        setUname(x);
        var t = await ICP.get(x);
        console.log(x, t);
        if (t === 'u') setf(2);
        else if (t === 'h') setf(3);
        else setf(4);
    }

    function SignUp() {
        console.log(f);
        setf(1);
    }

    async function SignedUp(x, y) {
        console.log(x, y);
        await ICP.add(x, y);
        setf(0);
    }

    function Buy() {
        setf(5);
    }

    function Claim() {
        setf(6);
    }

    function LoadPage() {
        if (f === 0) return <LoginPage LoggedIn = {LoggedIn} SignUp = {SignUp} />;
        if (f === 1) return <SignUpPage SignedUp = {SignedUp} Login = {Login}/>;
        if (f === 2) return <UserPage uname = {uname} Buy = {Buy} Claim = {Claim} />;
        if (f === 3) return <HospitalPage uname = {uname} />;
        if (f === 4) return <CompanyPage uname = {uname} />;
        if (f === 5) return <BuyForm uname = {uname} />;
        if (f === 6) return <ClaimForm uname = {uname} />;
    };

    return <LoadPage />;
}

export default App;
