import React, { useState, useMemo } from 'react';

const NumberList = ({ numbers }) => {
  const [selectedNumber, setSelectedNumber] = useState(null);

  // Використання useMemo для мемоізації обчислення суми чисел
  const sum = useMemo(() => {
    console.log('Обчислення суми...');
    return numbers.reduce((acc, num) => acc + num, 0);
  }, [numbers]); // Залежність - масив чисел

  return (
    <div>
      <ul>
        {numbers.map((num, index) => (
          <li
            key={index}
            onClick={() => setSelectedNumber(num)}
            style={{ fontWeight: num === selectedNumber ? 'bold' : 'normal' }}
          >
            {num}
          </li>
        ))}
      </ul>
      <p>Сума чисел: {sum}</p>
    </div>
  );
};

const UseMemoComponent = () => {
  const numbers = [1, 2, 3, 4, 5, 6];

  return <NumberList numbers={numbers} />;
};

export default UseMemoComponent;
