import React, { useState, useEffect } from 'react';

const Timer = ({ intervalValue }) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setValue(currentValue => currentValue + 1);
    }, intervalValue);

    return () => {
      clearInterval(timer);
    };
  }, [intervalValue]);

  return (
    <div>
      <h1>Timer</h1>
      <h2>{value}</h2>
    </div>
  );
};

const UseEffectComponent = () => {
  const [intervalValue, setIntervalValue] = useState(0);

  const handleIntervalClick = ms => {
    setIntervalValue(ms);
  };

  return (
    <div>
      <Timer intervalValue={intervalValue}></Timer>
      <button onClick={() => handleIntervalClick(100)}>100</button>
      <button onClick={() => handleIntervalClick(500)}>500</button>
      <button onClick={() => handleIntervalClick(1000)}>1000</button>
    </div>
  );
};

export default UseEffectComponent;
