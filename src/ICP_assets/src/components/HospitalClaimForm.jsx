import React from 'react'
import Header from '../components/HospitalHeader';
import { user } from '../../../declarations/user';

function HospitalClaimForm (props){
    function Verify(event) {
        event.preventDefault();
        props.verify(props.uname, props.cl);
    }

    function False(event) {
        event.preventDefault();
        props.false(props.uname, props.cl);
    }

    function Display() {
        if (props.cl === "") {
            return <h1> No claims pending. </h1>
        } else {
            console.log(props.claim);
            return (
                <div>
                    <h2> Client Name : {props.cl} </h2>
                    <h2> Cause : {props.claim.cause} </h2>
                    <h2> Amount : {props.claim.amount.toString()} </h2>
                    <button type="button" onClick = {Verify} style = {{ width : "200px", height : "30px", backgroundColor : "#04AA6D", color : "black", fontSize : "15px"}} >Verify</button>
                    <button type="button" onClick = {False} style = {{ width : "200px", height : "30px", backgroundColor : "#FF2E2E", color : "black", fontSize : "15px"}} >False</button>
                </div>
            );
        }
    }
    return (
        <>
            <Header uname = {props.uname} Logout = {props.Logout} Home = {props.Home} Claims = {props.Claims} />
            <div style = {{ textAlign : "center"}} className = "box">
                <div className="content">
                    <Display />
                </div>
            </div>
        </>
    );
}

export default HospitalClaimForm;