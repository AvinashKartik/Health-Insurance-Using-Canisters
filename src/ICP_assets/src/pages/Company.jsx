import React from 'react'
import Container from '@mui/material/Container';
import Header from '../components/CompanyHeader';
import CompanyBody from '../components/CompanyBody';

function Company(props) {
    return(
    <>
        <Header uname = {props.uname} PendingCompany = {props.PendingCompany} Verified = {props.Verified} Logout = {props.Logout} Home = {props.Home} />
        <Container>
            <CompanyBody uname = {props.uname} ins = {props.ins} cl = {props.cl} />
        </Container>
    </>
    );
}

export default Company