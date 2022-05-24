import React from 'react'
import Container from '@mui/material/Container';
import Header from '../components/UserHeader';
import UserBody from '../components/UserBody';
import { LayoutRouteProps } from '../../../../node_modules/react-router-dom/index';


function User(props) {
  return (
    <>
      <Header uname = {props.uname} Buy = {props.Buy} Claim = {props.Claim} Logout = {props.Logout} Home = {props.Home} />
      <Container>
        <UserBody uname = {props.uname} ins = {props.ins} cl = {props.cl} />
      </Container>
    </>

  );
}

export default User;