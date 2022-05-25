import React from 'react';
import Header from './CompanyHeader';

function PendingCompanyClaims(props){
    return(
        <>
            <Header uname = {props.uname} PendingCompany = {props.PendingCompany} Verified = {props.Verified} Logout = {props.Logout} Home = {props.Home} />
        </>
    );
}

export default PendingCompanyClaims;