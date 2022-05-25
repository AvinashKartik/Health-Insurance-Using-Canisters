import React from 'react'

function CompanyBody(props) {

    function Display1() {
        if (props.ccl === "") {
            return <h1> No claims pending. </h1>
        } else {
            return <h1> Claims pending. </h1>
        }
    }

    function Display2() {
        if (props.vcl.name === "") {
            return <h1> No verified claims pending. </h1>
        } else {
            return <h1> Verified Claims pending. </h1>
        }
    }

    return (
    <div style = {{ textAlign : "center"}} className = "box">
      <div className="content">
          <h1> Welcome {props.uname}, </h1>
          <Display1 />
          <Display2 />
      </div>
    </div>
  );
}

export default CompanyBody