import React from 'react'
import { useState } from 'react';
import Header from './UserHeader'

function ClaimForm (props){

    var [hname, setHname] = useState("");
    var [cause, setCause] = useState("");
    var [amount, setAmount] = useState();

    function handleChange(event) {
        if (event.target.name == "hospitalName") setHname(event.target.value);
        if (event.target.name == "cause") setCause(event.target.value);
        if (event.target.name == "amount") setAmount(event.target.value);
    };

    function Submit(event) {
        console.log(hname);
        event.preventDefault();
        props.Claimed(props.uname, hname, cause, amount);
    };

    return(
        <>
        <Header uname = {props.uname} Buy = {props.Buy} Claim = {props.Claim} Logout = {props.Logout} Home = {props.Home}/>
        <div className="box">
            <div className="content">
                <h1 style={{textAlign: 'center'}} > INSURANCE CLAIM </h1>
                <form style={{textAlign: 'center'}}>
                    <div style={{padding: '20px'}}>
                        <label for="hospitalName"><b>Hospital Name </b></label>
                        <input type="text" style = {{border: "3px solid"}} name="hospitalName" onChange = {handleChange} value = {hname} ></input><br/>
                    </div>
                    <div style={{padding: '20px'}}>
                        <label for="cause"><b>Cause &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b></label>
                        <input type="text" style = {{border: "3px solid"}} name="cause" onChange = {handleChange} value = {cause} ></input><br/>
                    </div>
                    <div style={{padding: '20px'}}>
                        <label for="amount"><b>Amount Paid &nbsp; </b></label>
                        <input type="text" style = {{border: "3px solid"}} name="amount" onChange = {handleChange} value = {amount} ></input><br/>
                    </div>
                    <div style={{padding: '20px'}}>
                        <button type="submit" onClick = {Submit} style = {{ width : "200px", height : "30px", backgroundColor : "#0E86D4", color : "black", fontSize : "15px"}} >Submit</button>
                    </div>
                </form> 
            </div>
        </div>
        </>
    );

}

export default ClaimForm