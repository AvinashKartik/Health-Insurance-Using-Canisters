import React from 'react'
import "../styles.css"

function HospitalHeader() {
    return (
        <ul style={{  listStyleType: 'none', margin: '0' ,padding: '0'}}>
            <li><a href="">Home</a></li>
            <li><a href="">Pending Claims</a></li>
            <li style={{float:"right"}}><a href="">Logout</a></li>
        </ul>
    );
}

export default HospitalHeader;