import React from 'react';
import ShuffleIcon from '@mui/icons-material/Shuffle';

const SeedButton = ({ generateRandomNumber }) => {
  return (
    <button
      className="btn btn-form"
      type="submit"
      onClick={generateRandomNumber}
    >
      <ShuffleIcon transform="scale(1.2)" />
    </button>
  );
};

export default SeedButton;
