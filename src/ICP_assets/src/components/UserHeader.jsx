import * as React from "react";
import "../styles.css";

function Header() {

  return (
    <ul style={{  listStyleType: 'none', margin: '0' ,padding: '0'}}>
      <li><a href="">Home</a></li>
      <li><a href="">Buy Insurance</a></li>
      <li><a href="">Claim Insurance</a></li>
      <li><a href="">About</a></li>
    </ul>
  );
}

export default Header;
