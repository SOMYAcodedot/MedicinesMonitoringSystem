import React, { useState } from 'react';

const QualityCheck = () => {
  const [status, setStatus] = useState('No checks initiated');

  const handleQualityCheck = () => {
    setStatus('Running quality check...');
    // Simulate an async quality check process
    setTimeout(() => {
      const isPassed = Math.random() > 0.5;
      setStatus(isPassed ? 'All items passed quality check' : 'Some items failed quality check');
    }, 2000);
  };

  return (
    <div className="quality-check">
      <h2>Initiate Quality Check</h2>
      <p>{status}</p>
      <button onClick={handleQualityCheck}>Run Quality Check</button>
    </div>
  );
};

export default QualityCheck;