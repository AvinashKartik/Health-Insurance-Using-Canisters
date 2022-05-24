import React from 'react';
import { useState } from 'react';

function Signup(props) {
    var [uname, setUname] = useState("");
    var [type, setType] = useState("");

    function handleChange(event) {
        if (event.target.name != "type") setUname(event.target.value);
        if (event.target.name === "type") setType(event.target.id);
    };

    function Submit(event) {
        console.log(uname);
        event.preventDefault();
        props.SignedUp(uname, type);
    };

    function Login(event) {
        console.log(uname);
        event.preventDefault();
        props.Login();
    };

    return (
        <div style = {{ textAlign : "center"}} className = "box">
            <div className="content">
                <h1> SIGN-UP </h1>
                <form action = "#">
                    
                    <div style = {{paddingTop : "20px"}}>
                        <label htmlFor="uname"><b>Username </b></label>
                        <input name="uname" id = "uname" style = {{border: "3px solid"}} onChange = {handleChange} value = {uname} required />
                    </div>

                    <div>
                        <p>Please select your user type:</p>
                        <input type="radio" id="u" name="type" onChange = {handleChange} value={type} />
                        <label for="u">Client</label><br />
                        <input type="radio" id="h" name="type" onChange = {handleChange} value={type} />
                        <label for="h">Hospital</label><br />  
                        <input type="radio" id="c" name="type" onChange = {handleChange} value={type} />
                        <label for="c">Insurance Company</label><br /><br />
                    </div>
                
                    <div style = {{paddingTop : "20px"}}>
                        <button type="submit" onClick = {Submit} style = {{ width : "200px", height : "30px", backgroundColor : "#0E86D4", color : "black", fontSize : "15px"}} >Sign Up</button>
                    </div>
                </form>
                <div style = {{paddingTop : "20px"}}>
                    <button type="button" onClick = {Login} style = {{ width : "200px", height : "30px", backgroundColor : "#04AA6D", color : "black", fontSize : "15px"}} >Login</button>
                </div>
            </div>
        </div>
    );
}

export default Signup;