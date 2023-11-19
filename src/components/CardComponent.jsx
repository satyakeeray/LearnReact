import React from 'react';

const CardComponent = ({ number }) => {
  return (
    <div className="card-style" >
      <p className="number-style">{number}</p>
      <span>This box is a different component</span>
    </div>
  );
};
export default CardComponent;