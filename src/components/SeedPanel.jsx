import React from 'react';
import SeedInput from './SeedPanel/SeedInput';
import SeedButton from './SeedPanel/SeedButton';

const SeedPanel = ({ seed, handleSeedChange, generateRandomNumber }) => {
  return (
    <div className="inline panel-seed">
      <div className="inline">
        <h5>Seed</h5>
      </div>
      <div className="inline">
        <SeedInput seed={seed} handleSeedChange={handleSeedChange} />
      </div>
      <div className="inline">
        <SeedButton generateRandomNumber={generateRandomNumber} />
      </div>
    </div>
  );
};

export default SeedPanel;
