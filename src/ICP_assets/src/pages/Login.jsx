import React from 'react';
import { useState } from 'react';

function Login(props) {
    var [uname, setUname] = useState("");

    function handleChange(event) {
        setUname(event.target.value);
    };

    function Submit(event) {
        console.log(uname);
        event.preventDefault();
        props.LoggedIn(uname);
    };

    function Signup(event) {
        console.log(uname);
        event.preventDefault();
        props.SignUp();
    };

    return (
        <div style = {{ textAlign : "center", paddingTop : "200px"}}>
            <h1> LOGIN </h1>
            <form action = "#">
                
                <div style = {{paddingTop : "20px"}}>
                    <label htmlFor="uname"><b>Username </b></label>
                    <input name="uname" id = "uname" style = {{border: "3px solid"}} onChange = {handleChange} value = {uname} required />
                </div>
                
                <div style = {{paddingTop : "20px"}}>
                    <button type="submit" onClick = {Submit} style = {{ width : "200px", height : "30px", backgroundColor : "#04AA6D", color : "white", fontSize : "15px"}} >Login</button>
                </div>
            </form>
            <div style = {{paddingTop : "20px"}}>
                <button type="button" onClick = {Signup} style = {{ width : "200px", height : "30px", backgroundColor : "#0E86D4", color : "white", fontSize : "15px"}} >Sign Up</button>
            </div>
        </div>
    );
}

export default Login;