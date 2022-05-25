import React from 'react'
import Header from '../components/HospitalHeader'
import HospitalBody from '../components/HospitalBody';

function Hospital(props) {
  return (
    <>
      <Header uname = {props.uname} Logout = {props.Logout} Home = {props.Home} Claims = {props.Claims} />
      <div>
        <HospitalBody uname = {props.uname} cl = {props.cl} />
      </div>
    </>
  )
}

export default Hospital