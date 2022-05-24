import React from 'react'
import Container from '@mui/material/Container';
import Header from '../components/UserHeader';
import UserBody from '../components/UserBody';


function User(props) {
  return (
    <>
      <Header/>
      <Container>
        <UserBody />
      </Container>
    </>

  );
}

export default User;