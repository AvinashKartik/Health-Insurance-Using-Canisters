import React from "react";
import Header from "./CompanyHeader";
import Card from './CardCompany'

function ViewPolicyForm(props){

    function createCard(contact) {
        console.log(contact);
        return (
            <Card
            uname = {props.uname}
            name={contact.companyName}
            coinsurance={contact.coinsurance.toString()}
            deductible={contact.deductible.toString()}
            />
        );
    }

    return(
        <>
        <Header uname = {props.uname} Logout = {props.Logout} Home = {props.Home} Claims = {props.Claims} Verified = {props.Verified} View = {props.View} Add = {props.Add} VC = {props.VC} />
        {props.policies.map(createCard)}
        </>
    );

}

export default ViewPolicyForm;