import React from 'react';

const SeedInput = ({ seed, handleSeedChange }) => {
  return (
    <input
      type="number"
      className="form-control"
      aria-label="seed"
      value={seed}
      onChange={handleSeedChange}
    />
  );
};

export default SeedInput;
