import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/Login';
import SignUpPage from './pages/Signup';
import UserPage from './pages/User';
import HospitalPage from './pages/Hospital';
import CompanyPage from './pages/Company';
import BuyForm from './components/BuyForm';
import ClaimForm from './components/ClaimForm';
import HospitalClaimForm from './components/HospitalClaimForm';
import { user } from '../../declarations/user';
import { ICP } from '../../declarations/ICP';
import { hospital } from '../../declarations/hospital';
import { company } from '../../declarations/company';

//login - 0
//signup - 1
//user - 2
//hospital - 3
//company - 4
//buy - 5
//claim - 6
//hospital claim - 7

function App() {
    var [uname, setUname] = useState("");
    var [policies, setPolicies] = useState([]);
    var [f, setf] = useState(0);
    var [ins, setIns] = useState([]);
    var [cl, setCl] = useState([]);
    var [hcl, setHcl] = useState("");

    function Login() {
        console.log(policies);
        setf(0);
    }

    async function LoggedIn(x) {
        setUname(x);
        var t = await ICP.get(x);
        // console.log(policies);
        // var y = await company.getAllPolicies();
        // setPolicies(y);
        // var hc = await hospital.getClaim(x);
        // setHcl(hc);
        if (t === 'u') {
            var y = await company.getAllPolicies();
            setPolicies(y);
            var i = await user.getInsurance(x);
            setIns(i);
            var c = await user.getClaim(x);
            setCl(c);
            setf(2);
        } else if (t === 'h') {
            var hc = await hospital.getClaim(x);
            setHcl(hc);
            setf(3);
        }else if (t == 'c') {
             setf(4);
        } else setf(0);
    }

    function SignUp() {
        console.log(f);
        setf(1);
    }

    async function SignedUp(x, y) {
        console.log(x, y);
        await ICP.add(x, y);
        if (y === 'u') await user.addUser(x);
        if (y === 'h') await hospital.addHospital(x);
        if (y === 'c') await company.addCompany(x);
        setf(0);
    }

    function Buy() {
        setf(5);
    }

    function Claim() {
        setf(6);
    }

    async function Bought(name, x, y, z){
        console.log(name, x);
        await user.buyInsurance(name, parseInt(x), parseInt(y), z);
        LoggedIn(name);
    }

    async function Claimed(name, x, y, z) {
        console.log(name, x, y, z);
        await user.addClaim(name, x, y, parseInt(z));
        LoggedIn(name);
    }

    async function HospitalViewClaim() {
        setf(7);
    }

    function LoadPage() {
        if (f === 0) return <LoginPage LoggedIn = {LoggedIn} SignUp = {SignUp} />;
        if (f === 1) return <SignUpPage SignedUp = {SignedUp} Login = {Login}/>;
        if (f === 2) return <UserPage uname = {uname} Buy = {Buy} Claim = {Claim} Logout = {Login} Home = {LoggedIn} ins = {ins} cl = {cl} />;
        if (f === 3) return <HospitalPage uname = {uname} Logout = {Login} Home = {LoggedIn} Claims = {HospitalViewClaim} cl = {hcl} />;
        if (f === 4) return <CompanyPage uname = {uname} />;
        if (f === 5) return <BuyForm uname = {uname} Buy = {Buy} Claim = {Claim} Logout = {Login} Home = {LoggedIn} policies = {policies} Bought = {Bought} />;
        if (f === 6) return <ClaimForm uname = {uname} Buy = {Buy} Claim = {Claim} Logout = {Login} Home = {LoggedIn} Claimed = {Claimed} />;
        if (f === 7) return <HospitalClaimForm uname = {uname} Logout = {Login} Home = {LoggedIn} Claims = {HospitalViewClaim} cl = {hcl} />
    };

    return <LoadPage />;
}

export default App;
