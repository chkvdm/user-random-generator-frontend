import React from 'react';

const ErrorInput = ({ errorValue, handleErrorInput }) => {
  return (
    <input
      className="form-control inputError"
      type="number"
      aria-label="error"
      min={0}
      max={10000}
      step={0.25}
      value={errorValue <= 10000 ? errorValue : 10000}
      onChange={handleErrorInput}
    />
  );
};

export default ErrorInput;
