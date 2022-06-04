import React from 'react';

function Card(props){

    function submit(event) {
        event.preventDefault();
        props.Bought(props.uname, props.deductible, props.coinsurance, props.name);
    }
    return (
        <div className="card">
          <div className="top">
            <h2 className="name"> Company : {props.name}</h2>
          </div>
          <div className="bottom">
            <h2 className="name"> Coinsurance : {props.coinsurance} %</h2>
            <h2 className="name"> Deductible : Rs. {props.deductible}</h2>
          </div>
          <button type="button" onClick = {submit} style = {{ width : "200px", height : "30px", backgroundColor : "#0E86D4", color : "black", fontSize : "20px", borderRadius : "10px" }} >Buy</button>
        </div>
      );
}

export default Card;