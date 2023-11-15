import { useState, useEffect } from 'react';

// const useTimer = (initialValue, delay) => {
//   const [value, setValue] = useState(initialValue);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setValue(initialValue);
//     }, delay);

//     return () => clearTimeout(timer);
//   }, [initialValue, delay]);

//   return [value, setValue];
// };

// const CustomHookComponent = () => {
//   const [value, setValue] = useTimer('Initial Value', 3000);

//   return (
//     <div>
//       <p>Current value: {value}</p>
//       <button onClick={() => setValue('New Value')}>Change Value</button>
//     </div>
//   );
// };

// export default CustomHookComponent;

const useLocalStorage = (key, initialValue) => {
  // Спробувати отримати значення з локального сховища при монтажі компонента
  const storedValue = localStorage.getItem(key);
  const initial = storedValue ? JSON.parse(storedValue) : initialValue;
  const [value, setValue] = useState(initial);

  const updateValue = newValue => {
    setValue(newValue);
    localStorage.setItem(key, JSON.stringify(newValue));
  };

  return [value, updateValue];
};

// import React from 'react';

const LocalStorageComponent = () => {
  // Використовуємо кастомний хук для збереження даних в локальному сховищі
  const [storedValue, setStoredValue] = `useLocalStorage`(
    'myKey',
    'Initial Value',
  );

  return (
    <div>
      <p>Stored Value: {storedValue}</p>
      <input
        type="text"
        value={storedValue}
        onChange={e => setStoredValue(e.target.value)}
      />
    </div>
  );
};

export default LocalStorageComponent;
