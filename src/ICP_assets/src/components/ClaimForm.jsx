import React from 'react'
import Header from './UserHeader'

function ClaimForm (props){
    return(
        <>
        <Header uname = {props.uname} Buy = {props.Buy} Claim = {props.Claim}/>
        <form style={{textAlign: 'center', paddingTop:'200px'}}>
            <div style={{padding: '20px'}}>
                <label for="hospitalName">Hospital Name : </label>
                <input type="text" name="hospitalName" ></input><br/>
            </div>
            <div style={{padding: '20px'}}>
                <label for="cause">Cause : </label>
                <input type="text" name="cause" ></input><br/>
            </div>
            <div style={{padding: '20px'}}>
                <label for="amount">Amount : </label>
                <input type="text" name="amount" ></input><br/>
            </div>
            <button type="submit">Submit</button>
        </form> 
        </>
    );

}

export default ClaimForm