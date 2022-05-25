import React from 'react'
import "../styles.css"

function CompanyHeader(props) {
    function pending(event){
        event.preventDefault();
        props.PendingCompany();
    }

    function verified(event){
        event.preventDefault();
        props.Verified();
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
            <li onClick={home}>Home</li>
            <li onClick={pending}>Pending Claims</li>
            <li onClick={verified}>Verified Claims</li>
            <li style={{float:"right"}} onClick={logout}>Logout</li>
        </ul>
    );
}

export default CompanyHeader;