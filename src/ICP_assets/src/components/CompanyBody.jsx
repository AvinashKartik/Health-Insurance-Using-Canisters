import React from 'react'

function CompanyBody(props) {
    return (
    <div style = {{ textAlign : "center"}} className = "box">
      <div className="content">
          <h1> Welcome {props.uname}, </h1>
      </div>
    </div>
  );
}

export default CompanyBody