import React from 'react';

const RegionSelect = ({ handleRegionChange }) => {
  return (
    <select
      className="form-select form-select mb-3 custom-width custom-padding"
      aria-label=".form-select-lg example"
      onChange={handleRegionChange}
    >
      <option value="KA_GE">Georgia</option>
      <option value="PL">Poland</option>
      <option value="TR">Turkey</option>
    </select>
  );
};

export default RegionSelect;
