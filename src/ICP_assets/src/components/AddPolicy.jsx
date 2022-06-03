import React, { useState } from "react";
import Header from "./CompanyHeader";

function AddForm(props){

    var [c, setC] = useState();
    var [d, setD] = useState();

    function handleChange(event) {
        if (event.target.name == "coinsurance") setC(event.target.value);
        if (event.target.name == "deductible") setD(event.target.value);
    };

    function Submit(event) {
        event.preventDefault();
        props.Added(props.uname, d, c);
    };

    return(
        <>
            <Header uname = {props.uname} Logout = {props.Logout} Home = {props.Home} Claims = {props.Claims} Verified = {props.Verified} View = {props.View} Add = {props.Add} VC = {props.VC} />
            <div className="box">
            <div className="content">
                <h1 style={{textAlign: 'center'}} > Add Policy </h1>
                <form style={{textAlign: 'center'}}>
                    <div style={{padding: '20px'}}>
                        <label for="coinsurance"><b>Coinsurance </b></label>
                        <input type="text" style = {{border: "3px solid"}} name="coinsurance" onChange = {handleChange} value = {c} ></input><br/>
                    </div>
                    <div style={{padding: '20px'}}>
                        <label for="deductible"><b>Deductible &nbsp;&nbsp;&nbsp;</b></label>
                        <input type="text" style = {{border: "3px solid"}} name="deductible" onChange = {handleChange} value = {d} ></input><br/>
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

export default AddForm;