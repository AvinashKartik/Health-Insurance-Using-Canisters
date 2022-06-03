import React from 'react'
import Container from '@mui/material/Container';
import Header from '../components/CompanyHeader';
import CompanyBody from '../components/CompanyBody';

function Company(props) {
    return(
    <>
        <Header uname = {props.uname} Logout = {props.Logout} Home = {props.Home} Claims = {props.Claims} Verified = {props.Verified} View = {props.View} Add = {props.Add} VC = {props.VC}/>
        <Container>
            <CompanyBody uname = {props.uname} ccl = {props.ccl} vcl = {props.vcl} />
        </Container>
    </>
    );
}

export default Company