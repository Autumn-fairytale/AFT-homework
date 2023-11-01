import { useCallback, useState } from 'react';

import styles from './FunctionComponentCounter.module.css';

export default function FunctionComponentCounter() {
  const [count, setCount] = useState(0);

  const incrementHandler = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  const decrementHandler = useCallback(() => {
    setCount((prev) => prev - 1);
  }, []);

  return (
    <section className={styles.section}>
      <h2>Function component counter: {count}</h2>
      <div className={styles.buttons}>
        <button type="button" onClick={incrementHandler}>
          Increment count
        </button>
        <button type="button" onClick={decrementHandler}>
          Decrement
        </button>
      </div>
    </section>
  );
}
