import * as React from "react";
import "../styles.css";

function UserHeader() {
    return (
        <ul style={{  listStyleType: 'none', margin: '0' ,padding: '0'}}>
        <li><a href="">Home</a></li>
        <li><a href="/buyForm">Buy Insurance</a></li>
        <li><a href="/claimForm">Claim Insurance</a></li>
        <li style={{float:"right"}}><a href="">Logout</a></li>
        </ul>
    );
}

export default UserHeader;
