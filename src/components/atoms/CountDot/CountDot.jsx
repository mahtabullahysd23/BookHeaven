import React from 'react';
import './CountDot.style.scss';

const RedDot = ({ count }) => {
  return (
    <>
      {count > 0 && (
        <div className="red-dot">
          {count > 99 ? '99+' : count}
        </div>
      )}
    </>
  );
};

export default RedDot;
