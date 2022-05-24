import React from 'react'
import Container from '@mui/material/Container';
import Header from '../components/UserHeader';
import UserBody from '../components/UserBody';


function User(props) {
  return (
    <>
      <Header uname = {props.uname} Buy = {props.Buy} Claim = {props.Claim}/>
      <Container>
        <UserBody />
      </Container>
    </>

  );
}

export default User;