import React from 'react';
import contacts from '../contacts';

function Card(props){
    return (
        <div className="card">
          <div className="top">
            <h2 className="name">{props.name}</h2>
          </div>
        </div>
      );
}

export default Card;