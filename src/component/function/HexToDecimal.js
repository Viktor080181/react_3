import React, { useState } from 'react';

function HexToDecimal() {
  const [hex, setHex] = useState('');
  const [decimal, setDecimal] = useState('');

  const handleChange = (e) => {
    const val = e.target.value.trim();
    setHex(val);

    if (/^-?[0-9a-fA-F]+$/.test(val)) {
      const num = parseInt(val, 16);
      setDecimal(num.toString(10));
    } else {
      setDecimal('Введите корректное шестнадцатеричное число');
    }
  };

  return (
    <div>
      <h3>Шестнадцатеричное → Десятичное</h3>
      <input
        type="text"
        value={hex}
        onChange={handleChange}
        placeholder="Введите шестнадцатеричное число"
      />
      <p>Результат: {decimal}</p>
    </div>
  );
}

export default HexToDecimal;
