import React from 'react';

function Card(props){

    return (
        <div className="card">
          <div className="top">
            <h2 className="name"> Client Name : {props.name}</h2>
          </div>
          <div className="bottom">
            <h2 className="name"> Amount : {props.cost.toString()}</h2>
            <h2 className="name"> Waiting Time : {props.time.toString()} hours</h2>
          </div>
        </div>
      );
}

export default Card;