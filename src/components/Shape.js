import React from 'react';
import PropTypes from 'prop-types';

function Shape({ text, color, backgroundColor }) {
  return (
    <>
      <div style={{ 
        width: '100px', 
        height: '100px',
      }}>
        <pre style ={{
          color: color,
          backgroundColor: backgroundColor,
        }}>{text}</pre>
      </div>
    </>
  );
}

Shape.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
};

export default Shape;
