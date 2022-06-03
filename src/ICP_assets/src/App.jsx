import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/Login';
import SignUpPage from './pages/Signup';
import UserPage from './pages/User';
import HospitalPage from './pages/Hospital';
import CompanyPage from './pages/Company';
import BuyForm from './components/BuyForm';
import ClaimForm from './components/ClaimForm';
import HospitalClaimPage from './components/HospitalClaimForm';
import CompanyClaimPage from './components/PendingCompanyClaims';
import VerifiedClaimPage from './components/VerifiedClaims';
import PolicyPage from './components/ViewPolicy';
import AddPolicyPage from './components/AddPolicy';
import ViewClaim from './components/ViewClaims';
import { user } from '../../declarations/user';
import { ICP } from '../../declarations/ICP';
import { hospital } from '../../declarations/hospital';
import { company } from '../../declarations/company';
import { SnowshoeingOutlined } from '../../../node_modules/@mui/icons-material/index';

//login - 0
//signup - 1
//user - 2
//hospital - 3
//company - 4
//buy - 5
//claim - 6
//hospital claim - 7
//company claim - 8
//verified claim - 9
//view policy - 10
//add policy - 11
//view claims - 12

function App() {
    var [uname, setUname] = useState("");
    var [policies, setPolicies] = useState([]);
    var [f, setf] = useState(0);
    var [ins, setIns] = useState();
    var [cl, setCl] = useState();
    var [hcl, setHcl] = useState("");
    var [ccl, setCcl] = useState("");
    var [vcl, setVcl] = useState("");
    var [amt, setAmt] = useState(0);
    var [CL, setCL] = useState([]);

    function Login() {
        console.log(policies);
        setf(0);
    }

    async function LoggedIn(x) {
        setUname(x);
        var t = await ICP.get(x);
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
            var c = await company.getClaim(x);
            setCcl(c);
            const hours = 1000 * 60 * 60;
            const d = new Date();
            let hour = Math.round(d.getTime() / hours);
            var f = await company.firstVerifiedClaim(x, hour);
            setVcl(f);
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
        await company.addClaim(ins.companyName, name);
        LoggedIn(name);
    }

    async function HospitalViewClaim() {
        var c = await user.getClaim(hcl);
        setCl(c);
        setf(7);
    }

    async function HospitalVirifiedClaim(hname, uname) {
        await hospital.removeClaim(hname);
        var i = await user.getInsurance(uname);
        setIns(i);
        const hours = 1000 * 60 * 60;
        const d = new Date();
        let hour = Math.round(d.getTime() / hours);
        console.log(hour);
        await company.addVerifiedClaim(i.companyName, cl.amount, hour, uname);
        LoggedIn(hname);
    }

    async function HospitalFalseClaim(hname, uname) {
        await hospital.removeClaim(hname);
        await user.removeClaim(uname);
        LoggedIn(hname);
    }

    async function CompanyViewClaim() {
        var c = await user.getClaim(ccl);
        setCl(c);
        setf(8);
    }

    async function SendToHospital(cname, hname, uname) {
        await company.removeClaim(cname);
        await hospital.addClaim(hname, uname);
        LoggedIn(cname);
    }

    async function VerifiedViewClaim() {
        var c = await user.getClaim(vcl.name);
        setCl(c);
        var i = await user.getInsurance(vcl.name);
        setIns(i);
        console.log("ins", i);
        var a = (c.amount - i.deductible) * (100n - i.coinsurance) / 100n;
        setAmt(a);
        setf(9);
    }

    async function SendToUser(cname, cl) {
        console.log(cname, cl);
        await company.removeVerifiedClaim(cname, cl.time);
        await user.removeClaim(cl.name);
        LoggedIn(cname);
    }

    async function ViewPolicy(name) {
        var y = await company.getPolicies(name);
        setPolicies(y);
        setf(10);
    }

    async function AddPolicy() {
        setf(11);
    }

    async function Added(cname, d, c) {
        console.log(cname, d, c);
        await company.addPolicy(cname, parseInt(d), parseInt(c));
        LoggedIn(cname);
    }

    async function ViewClaims(name) {
        const hours = 1000 * 60 * 60;
        const d = new Date();
        let hour = Math.round(d.getTime() / hours);
        var x = [];
        var y = await company.getAllClaims(name);
        await y.forEach(async (item, index) => {
            x.push({
                name : item.name,
                time : BigInt(hour) - item.time,
                cost : item.cost
            });
        });
        setCL(x);
        setf(12);
    }

    function LoadPage() {
        if (f === 0) return <LoginPage LoggedIn = {LoggedIn} SignUp = {SignUp} />;
        if (f === 1) return <SignUpPage SignedUp = {SignedUp} Login = {Login}/>;
        if (f === 2) return <UserPage uname = {uname} Buy = {Buy} Claim = {Claim} Logout = {Login} Home = {LoggedIn} ins = {ins} cl = {cl} />;
        if (f === 3) return <HospitalPage uname = {uname} Logout = {Login} Home = {LoggedIn} Claims = {HospitalViewClaim} cl = {hcl} />;
        if (f === 4) return <CompanyPage uname = {uname} Logout = {Login} Home = {LoggedIn} Claims = {CompanyViewClaim} Verified = {VerifiedViewClaim} View = {ViewPolicy} Add = {AddPolicy} VC = {ViewClaims} ccl = {ccl} vcl = {vcl}/>;
        if (f === 5) return <BuyForm uname = {uname} Buy = {Buy} Claim = {Claim} Logout = {Login} Home = {LoggedIn} policies = {policies} Bought = {Bought} />;
        if (f === 6) return <ClaimForm uname = {uname} Buy = {Buy} Claim = {Claim} Logout = {Login} Home = {LoggedIn} Claimed = {Claimed} />;
        if (f === 7) return <HospitalClaimPage uname = {uname} Logout = {Login} Home = {LoggedIn} Claims = {HospitalViewClaim} cl = {hcl} claim = {cl} verify = {HospitalVirifiedClaim} false = {HospitalFalseClaim} />;
        if (f === 8) return <CompanyClaimPage uname = {uname} Logout = {Login} Home = {LoggedIn} Claims = {CompanyViewClaim} Verified = {VerifiedViewClaim} View = {ViewPolicy} Add = {AddPolicy} cl = {ccl} claim = {cl} VC = {ViewClaims} send = {SendToHospital} />;
        if (f === 9) return <VerifiedClaimPage uname = {uname} Logout = {Login} Home = {LoggedIn} Claims = {CompanyViewClaim} Verified = {VerifiedViewClaim} View = {ViewPolicy} Add = {AddPolicy} cl = {vcl} claim = {cl} send = {SendToUser} VC = {ViewClaims} amt = {amt} />
        if (f === 10) return <PolicyPage uname = {uname} Logout = {Login} Home = {LoggedIn} Claims = {CompanyViewClaim} Verified = {VerifiedViewClaim} View = {ViewPolicy} Add = {AddPolicy} VC = {ViewClaims} policies = {policies} />
        if (f === 11) return <AddPolicyPage uname = {uname} Logout = {Login} Home = {LoggedIn} Claims = {CompanyViewClaim} Verified = {VerifiedViewClaim} View = {ViewPolicy} Add = {AddPolicy} VC = {ViewClaims} Added = {Added} />
        if (f === 12) return <ViewClaim uname = {uname} Logout = {Login} Home = {LoggedIn} Claims = {CompanyViewClaim} Verified = {VerifiedViewClaim} View = {ViewPolicy} Add = {AddPolicy} VC = {ViewClaims} CL = {CL} />
    };

    return <LoadPage />;
}

export default App;
