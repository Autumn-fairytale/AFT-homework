import React, { useState, useRef, useEffect } from 'react';

// const UseRefComponent = () => {
//   const [name, setName] = useState('');
//   const input = useRef();

//   useEffect(() => {
//     console.log(input.current);
//     input.current.focus();
//   }, []);

//   const handleNameChange = event => {
//     setName(event.target.value);
//   };

//   return (
//     <div>
//       <h3>Hello, {name}</h3>
//       <form>
//         <input type="text" onChange={handleNameChange} ref={input}></input>
//       </form>
//     </div>
//   );
// };

// export default UseRefComponent;

const UseRefExample = () => {
  const inputValue = useRef('Initial Value');
  const [displayValue, setDisplayValue] = useState(inputValue.current);

  useEffect(() => {
    console.log('Current value:', inputValue.current);
    setDisplayValue(inputValue.current);
  }, [displayValue]);

  const handleChange = event => {
    inputValue.current = event.target.value;
    setDisplayValue(event.target.value);
  };

  return (
    <div>
      <input type="text" value={displayValue} onChange={handleChange} />
      <p>Current value: {inputValue.current}</p>
    </div>
  );
};

export default UseRefExample;
