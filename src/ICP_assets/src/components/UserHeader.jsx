import * as React from "react";
import "../styles.css";

function UserHeader(props) {
    function buy(event) {
        event.preventDefault();
        props.Buy();
    }
    function claim(event) {
        event.preventDefault();
        props.Claim();
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
        <li onClick={buy}> Buy Insurance </li>
        <li onClick={claim}> Claim Insurance </li>
        <li style={{float:"right"}} onClick={logout}> Logout </li>
        </ul>
    );
}

export default UserHeader;
