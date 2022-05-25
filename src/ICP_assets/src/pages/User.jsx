import React from 'react'
import Header from '../components/UserHeader';
import UserBody from '../components/UserBody';


function User(props) {
  return (
    <>
      <Header uname = {props.uname} Buy = {props.Buy} Claim = {props.Claim} Logout = {props.Logout} Home = {props.Home} />
      <div>
        <UserBody uname = {props.uname} ins = {props.ins} cl = {props.cl} />
      </div>
    </>

  );
}

export default User;