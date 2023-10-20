import React from 'react';
import ErrorSlider from './ErrorPanel/ErrorSlider';
import ErrorInput from './ErrorPanel/ErrorInput';

const ErrorPanel = ({ errorValue, handleErrorSlider, handleErrorInput }) => {
  return (
    <div className="inline panel-error">
      <div className="inline">
        <h5>Error</h5>
      </div>
      <div className="inline">
        <ErrorSlider
          errorValue={errorValue}
          handleErrorSlider={handleErrorSlider}
        />
      </div>
      <div className="inline">
        <ErrorInput
          errorValue={errorValue}
          handleErrorInput={handleErrorInput}
        />
      </div>
    </div>
  );
};

export default ErrorPanel;
