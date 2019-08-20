import React from 'react';
import PropTypes from 'prop-types';

function TextSelector({ text, handleTextChange, handleSubmit }) {
  return (
    <>
        <form onSubmit={handleSubmit}>
          <input 
            placeholder="Full Name" 
            name="text" 
            maxLength="25"
            value={text} 
            onChange={handleTextChange}></input>
        </form>
        {text}
    </>
  );
}

TextSelector.propTypes = {
  text: PropTypes.string.isRequired,
  handleTextChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
};

export default TextSelector;
