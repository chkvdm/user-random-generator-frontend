import React from 'react';
import RegionSelect from './RegionPanel/RegionSelect';

const RegionPanel = ({ handleRegionChange }) => {
  return (
    <div className="inline panel-region">
      <div className="inline custom-padding">
        <h5>Region</h5>
      </div>
      <div className="inline">
        <RegionSelect handleRegionChange={handleRegionChange} />
      </div>
    </div>
  );
};

export default RegionPanel;
