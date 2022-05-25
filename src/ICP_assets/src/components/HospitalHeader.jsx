import React from 'react'
import "../styles.css"

function HospitalHeader(props) {
    function claims(event) {
        event.preventDefault();
        props.Claims();
    }
    function logout(event) {
        event.preventDefault();
        props.Logout();
    }
    async function home(event) {
        event.preventDefault();
        props.Home(props.uname);
    }
    return (
        <ul style={{  listStyleType: 'none', margin: '0' ,padding: '0'}}>
        <li onClick={home}> Home </li>
        <li onClick={claims}> Pending Claims </li>
        <li style={{float:"right"}} onClick={logout}> Logout </li>
        </ul>
    );
}

export default HospitalHeader;