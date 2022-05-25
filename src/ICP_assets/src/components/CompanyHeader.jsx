import React from 'react'
import "../styles.css"

function CompanyHeader(props) {
    function pending(event){
        event.preventDefault();
        props.Claims();
    }

    function verified(event){
        event.preventDefault();
        props.Verified();
    }
    
    function logout(event) {
        event.preventDefault();
        props.Logout();
    }

    function home(event) {
        event.preventDefault();
        props.Home(props.uname);
    }

    function view(event) {
        event.preventDefault();
        props.View(props.uname);
    }

    function add(event) {
        event.preventDefault();
        props.Add(props.uname);
    }

    return (
        <ul style={{  listStyleType: 'none', margin: '0' ,padding: '0'}}>
            <li onClick={home}>Home</li>
            <li onClick={pending}>Pending Claims</li>
            <li onClick={verified}>Verified Claims</li>
            <li onClick={add}>Add Policy</li>
            <li onClick={view}>View Policies</li>
            <li style={{float:"right"}} onClick={logout}>Logout</li>
        </ul>
    );
}

export default CompanyHeader;