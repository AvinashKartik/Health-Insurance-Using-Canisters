import React from 'react';
import Header from './CompanyHeader';
import Card from './CardCompany';

function ViewVerified(props){

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
        <Header/>
        Hi
        </>
    );
};

export default ViewVerified;