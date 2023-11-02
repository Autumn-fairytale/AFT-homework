import { useState } from 'react';
import { styles } from './greeterStyles';

export const Greeter = () => {
  const [name, setName] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return <h2 style={styles.container}>Привет, {name}!</h2>;
  }

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit}>
        <label>
          Who are you?
          <input
            type="text"
            value={name}
            onChange={handleChange}
            style={styles.input}
          />
        </label>
        <button type="submit" style={styles.button}>
          Submit
        </button>
      </form>
    </div>
  );
};
