import React from 'react'
import { useState } from 'react';
import Header from '../components/HospitalHeader';

function HospitalClaimForm (props){
    function Display() {
        if (props.cl === "") {
            return <h1> No pending claims. </h1>
        } else {
            return <h1> {props.cl} </h1>
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