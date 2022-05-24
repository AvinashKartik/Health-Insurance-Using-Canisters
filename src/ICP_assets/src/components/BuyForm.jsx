import React from "react";
import Header from "./UserHeader";
import Card from './Card'

function BuyForm(props){

    function createCard(contact) {
        console.log(contact);
        return (
            <Card
            uname = {props.uname}
            Bought={props.Bought}
            name={contact.companyName}
            coinsurance={contact.coinsurance.toString()}
            deductible={contact.deductible.toString()}
            />
        );
    }

    return(
        <>
        <Header uname = {props.uname} Buy = {props.Buy} Claim = {props.Claim} Logout = {props.Logout} Home = {props.Home} />
        {props.policies.map(createCard)}
        </>
    );

}

export default BuyForm;