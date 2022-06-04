import React from 'react';

function Card(props){
    return (
        <div className="card">
          <div className="top">
            <h2 className="name"> Company : {props.name}</h2>
          </div>
          <div className="bottom">
            <h2 className="name"> Coinsurance : {props.coinsurance} %</h2>
            <h2 className="name"> Deductible : Rs. {props.deductible}</h2>
          </div>
        </div>
      );
}

export default Card;