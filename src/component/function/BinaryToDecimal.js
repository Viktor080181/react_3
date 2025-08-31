import React, { useState } from 'react';

function BinaryToDecimal() {
  const [binary, setBinary] = useState('');
  const [decimal, setDecimal] = useState('');

  const handleChange = (e) => {
    const val = e.target.value.trim();
    setBinary(val);

    if (/^-?[01]+$/.test(val)) {
      const num = parseInt(val, 2);
      setDecimal(num.toString(10));
    } else {
      setDecimal('Введите корректное двоичное число');
    }
  };

  return (
    <div>
      <h3>Двоичное → Десятичное</h3>
      <input
        type="text"
        value={binary}
        onChange={handleChange}
        placeholder="Введите двоичное число"
      />
      <p>Результат: {decimal}</p>
    </div>
  );
}

export default BinaryToDecimal;
