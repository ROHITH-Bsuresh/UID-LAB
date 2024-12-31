// App.js
import React, { useState } from 'react';
import './App.css';

function Calculator() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  // Append button values to the input
  const handleClick = (value) => {
    setInput(input + value);
  };

  // Clear input and result
  const handleClear = () => {
    setInput('');
    setResult('');
  };

  // Delete the last character
  const handleDelete = () => {
    setInput(input.slice(0, -1));
  };

  // Calculate the expression
  const handleCalculate = () => {
    try {
      const calcResult = new Function('return ' + input)();
      setResult(calcResult);
    } catch (error) {
      setResult('Error');
    }
  };

  return (
    <div className="calculator">
      <h1> Calculator</h1>
      <div className="display">
        <input type="text" value={input} readOnly />
        <div className="result">{result}</div>
      </div>
      <div className="buttons">
        <button onClick={() => handleClick('1')}>1</button>
        <button onClick={() => handleClick('2')}>2</button>
        <button onClick={() => handleClick('3')}>3</button>
        <button className="operator" onClick={() => handleClick('+')}>+</button>

        <button onClick={() => handleClick('4')}>4</button>
        <button onClick={() => handleClick('5')}>5</button>
        <button onClick={() => handleClick('6')}>6</button>
        <button className="operator" onClick={() => handleClick('-')}>-</button>

        <button onClick={() => handleClick('7')}>7</button>
        <button onClick={() => handleClick('8')}>8</button>
        <button onClick={() => handleClick('9')}>9</button>
        <button className="operator" onClick={() => handleClick('*')}>*</button>

        {/* Swapped C and Division Buttons */}
        <button className="clear" onClick={handleClear}>C</button>
        <button onClick={() => handleClick('0')}>0</button>
        <button className="operator" onClick={() => handleClick('/')}>/</button>

        <button onClick={handleCalculate} className="equal">=</button>
        <button onClick={handleDelete} className="delete">Del</button>
      </div>
    </div>
  );
}

export default Calculator;