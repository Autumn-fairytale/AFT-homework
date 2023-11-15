import React, { memo, useEffect, useState, useCallback } from 'react';

const ChildComponent = memo(({ onIncrement }) => {
  console.log('Render Child');
  return (
    <div>
      <button onClick={onIncrement}>Increment</button>
    </div>
  );
});

const UseCallbackComponent = () => {
  const [count, setCount] = useState(0);
  console.log('Render Parent');

  const increment = useCallback(() => {
    setCount(prevCount => prevCount + 1);
  }, [setCount]);

  return (
    <div>
      <h2>Counter: {count}</h2>
      <ChildComponent onIncrement={increment} />
    </div>
  );
};

export default UseCallbackComponent;

// useCallback with useEffect

// const ExampleComponent = ({ someProp }) => {
//   const [data, setData] = useState([]);

//   // Використання useCallback для мемоізації функції
//   const fetchData = useCallback(() => {
//     // Логіка отримання даних
//     // Використання someProp чи інших залежностей
//   }, [someProp]);

//   useEffect(() => {
//     fetchData();
//   }, [fetchData]);

//   return <div>{/* Рендерінг компонента */}</div>;
// };
