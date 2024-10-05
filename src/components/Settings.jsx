import React, { useState } from 'react';

const Settings = () => {
  const [threshold, setThreshold] = useState(70);

  const handleThresholdChange = (e) => {
    setThreshold(e.target.value);
  };

  return (
    <div className="settings">
      <h2>Settings</h2>
      <label>
        Quality Check Pass Threshold (%):
        <input
          type="number"
          value={threshold}
          onChange={handleThresholdChange}
        />
      </label>
      <p>Current threshold: {threshold}%</p>
    </div>
  );
};

export default Settings;