import React, { useContext } from 'react';
import { ThemeContext } from './UseContext';

const Card = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`container-${theme}`}>
      <h1>Theme {theme}</h1>
    </div>
  );
};

export function Component() {
  const { toggle } = useContext(ThemeContext);

  return (
    <div>
      <Card />
      <button type="button" onClick={toggle}>
        Toggle theme
      </button>
    </div>
  );
}
