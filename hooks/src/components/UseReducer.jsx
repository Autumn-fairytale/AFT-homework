import React, { useReducer } from 'react';

const initialState = { count: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    case 'RESET':
      return initialState;
    default:
      return state;
  }
};

const UseReducerComponent = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Counter: {state.count}</p>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
      <button onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
    </div>
  );
};

export default UseReducerComponent;

// ########################################
// useReducer + useContext

// import React, { createContext, useReducer } from 'react';

// export const AppContext = createContext();

// const initialState = {};
// const reducer = (state, action) => {
//   // Логіка редуктора
// };

// export const AppProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(reducer, initialState);

//   return (
//     // Передаємо значення стану та dispatch через контекст
//     <AppContext.Provider value={{ state, dispatch }}>
//       {children}
//     </AppContext.Provider>
//   );
// };

// const ComponentB = () => {
//   const { state, dispatch } = useContext(AppContext);

//   return <div>{/* Використання глобального стану та dispatch */}</div>;
// };

// #################
// rootReducer

// const nameReducer = (state, action) => {
//   switch (action.type) {
//     case 'SET_NAME':
//       return { name: action.payload };
//     default:
//       return state;
//   }
// };

// // Кореневий редюсер, який комбінує обидва редюсера
// const rootReducer = (state, action) => ({
//   countState: countReducer(state.countState, action),
//   nameState: nameReducer(state.nameState, action),
// });

// const initialState = {
//   countState: { count: 0 },
//   nameState: { name: 'John Doe' },
// };
