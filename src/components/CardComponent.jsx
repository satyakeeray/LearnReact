import React from 'react';

const CardComponent = (props) => {
  return (
    <div className="card-style" >
      <p className="number-style">{props.number}</p>
      <span>Here we recives the updated number shows on this component</span>
    </div>
  );
};
export default CardComponent;