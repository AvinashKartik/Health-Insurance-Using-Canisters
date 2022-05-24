import React from 'react'

function UserBody(props){

    function Ins() {
        if (props.ins.isActive == 0) {
            return <p> None </p>
        } else {
            return (
                <div>
                    <p> Company : {props.ins.companyName} </p>
                    <p> Coinsurance : {props.ins.coinsurance.toString()} </p>
                    <p> Deductible : {props.ins.deductible.toString()} </p>
                </div>
            );
        }
    }

    function Cl() {
        if (props.cl.isActive == 0) {
            return <p> None </p>
        } else {
            return (
                <div>
                    <p> Hospital : {props.cl.hospitalName} </p>
                    <p> Cause : {props.cl.cause} </p>
                    <p> Amount : {props.cl.amount.toString()} </p>
                </div>
            );
        }
    }

    return (
        <div style = {{ textAlign : "center"}} className = "box">
            <div className="content">
                <h1> Welcome {props.uname}, </h1>
                <h2> Insurance Details : </h2>
                <Ins />
                <h2> Insurance Claimed : </h2>
                <Cl />
            </div>
        </div>
        
    )
}

export default UserBody;