import React from 'react';
import Header from './CompanyHeader';
import Card from './CardClaim'

function VerifiedClaims(props){

    function createCard(contact) {
        console.log(contact);
        return (
            <Card
            uname = {props.uname}
            name = {contact.name}
            time = {contact.time}
            cost = {contact.cost}
            />
        );
    }

    return(
        <>
            <Header uname = {props.uname} Logout = {props.Logout} Home = {props.Home} Claims = {props.Claims} Verified = {props.Verified} View = {props.View} Add = {props.Add} VC = {props.VC} />
            {props.CL.map(createCard)}
        </>
    );
}

export default VerifiedClaims;