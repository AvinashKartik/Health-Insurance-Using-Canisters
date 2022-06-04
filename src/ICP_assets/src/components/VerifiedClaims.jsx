import React from 'react';
import Header from './CompanyHeader';

function VerifiedClaims(props){
    function Send(event) {
        event.preventDefault();
        props.send(props.uname, props.cl);
    }

    function Display() {
        if (props.cl.name === "") {
            return <h1> No verified claims pending. </h1>
        } else {
            console.log(props.claim);
            return (
                <div>
                    <h2> Client Name : {props.cl.name} </h2>
                    <h2> Hospital Name : {props.claim.hospitalName} </h2>
                    <h2> Cause : {props.claim.cause} </h2>
                    <h2> Amount paid by user : Rs. {props.claim.amount.toString()} </h2>
                    <h2> Amount to be settled : Rs. {props.amt.toString()} </h2>
                    <button type="button" onClick = {Send} style = {{ width : "200px", height : "30px", backgroundColor : "#04AA6D", color : "black", fontSize : "15px"}} >Settle</button>
                </div>
            );
        }
    }
    return(
        <>
            <Header uname = {props.uname} Logout = {props.Logout} Home = {props.Home} Claims = {props.Claims} Verified = {props.Verified} View = {props.View} Add = {props.Add} VC = {props.VC} />
            <div style = {{ textAlign : "center"}} className = "box">
                <div className="content">
                    <Display />
                </div>
            </div>
        </>
    );
}

export default VerifiedClaims;