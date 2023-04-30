import React, { useState, useEffect } from 'react';

function PrgBar({ value }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress(value);
  }, [value]);

  const progressBarStyle = {
    width: `${progress}%`,
  };

  return (
    <div className="progress-bar">
      <div className="progress" style={progressBarStyle}>
        <span className='p-txt'>
        {progress}% out of 100%
        </span>
      </div>
    </div>
  );
}

export default PrgBar;
