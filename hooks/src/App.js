import React, { useState } from 'react';
import UseStateComponent from './components/UseState';
import UseEffectComponent from './components/UseEffect';
import { ThemeContext } from './components/UseContext';
import { Component } from './components/ComponentUseContext';
import UseReducerComponent from './components/UseReducer';
import UseCallbackComponent from './components/UseCallback';
import UseMemoComponent from './components/UseMemo';
import UseRefComponent from './components/UseRef';
import UseRefExample from './components/UseRef';
import CustomHookComponent from './components/CustomHook';

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(currentValue => (currentValue === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="App">
      {/* <UseStateComponent /> */}
      {/* <UseEffectComponent /> */}
      {/* <ThemeContext.Provider value={{ theme, toggle: toggleTheme }}>
        <Component />
      </ThemeContext.Provider> */}
      {/* <UseReducerComponent /> */}
      {/* <UseCallbackComponent /> */}
      {/* <UseMemoComponent /> */}
      {/* <UseRefComponent /> */}
      {/* <UseRefExample /> */}
      {/* <CustomHookComponent></CustomHookComponent> */}
    </div>
  );
}

export default App;
