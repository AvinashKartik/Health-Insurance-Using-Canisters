import React from 'react'
import Container from '@mui/material/Container';
import Header from '../components/Header';
import UserBody from '../components/UserBody';
import StickyFooter from '../components/Footer';


const User = () => {
  return (
    <>
      <Header/>
      <Container>
        <UserBody/>
      </Container>
      <StickyFooter/>
    </>

  );
}

export default User;