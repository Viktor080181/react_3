import React, { useState } from 'react';

function DecimalToBinary() {
  const [decimal, setDecimal] = useState('');  // Состояние для введенного числа
  const [binary, setBinary] = useState('');    // Состояние для двоичного результата

  const handleInputChange = (e) => {
    const value = e.target.value;
    setDecimal(value);

    // Проверяем, является ли введенное значение числом
    if (!isNaN(value) && value !== '' && Number.isInteger(Number(value))) {
      // Конвертируем в двоичное (только для целых чисел)
      setBinary(parseInt(value, 10).toString(2));
    } else {
      setBinary('Введите корректное целое число');
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h2>Конвертер десятичного числа в двоичное</h2>
      <input
        type="number"
        value={decimal}
        onChange={handleInputChange}
        placeholder="Введите десятичное число (целое)"
        style={{ padding: '10px', marginRight: '10px' }}
      />
      <p>Двоичное представление: <strong>{binary}</strong></p>
    </div>
  );
}

export default DecimalToBinary;
