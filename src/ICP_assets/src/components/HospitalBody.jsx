import React from 'react'

function HospitalBody(props) {

    function Display() {
        if (props.cl === "") {
            return <h1> No claims pending. </h1>
        } else {
            return <h1> Claims pending. </h1>
        }
    }

    return (
        <div style = {{ textAlign : "center"}} className = "box">
            <div className="content">
                <h1> Welcome {props.uname}, </h1>
                <Display />
            </div>
        </div>
    )
}

export default HospitalBody;