import React, { useState } from 'react';

function DecimalToHex() {
  const [decimal, setDecimal] = useState('');
  const [hex, setHex] = useState('');

  const handleChange = (e) => {
    const val = e.target.value.trim();
    setDecimal(val);

    if (/^-?\d+$/.test(val)) {
      const num = parseInt(val, 10);
      setHex(num.toString(16).toUpperCase());
    } else {
      setHex('Введите корректное целое десятичное число');
    }
  };

  return (
    <div>
      <h3>Десятичное → Шестнадцатеричное</h3>
      <input
        type="text"
        value={decimal}
        onChange={handleChange}
        placeholder="Введите десятичное число"
      />
      <p>Результат: {hex}</p>
    </div>
  );
}

export default DecimalToHex;
