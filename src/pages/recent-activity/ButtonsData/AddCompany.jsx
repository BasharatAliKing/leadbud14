
import React, { useState } from 'react';

const App = () => {
  const initialInputSet = () => [
    { id: 1, label: 'Label 1', value: '' },
    { id: 2, label: 'Label 2', value: '' },
    { id: 3, label: 'Label 3', value: '' },
    { id: 4, label: 'Label 4', value: '' }
  ];

  const [inputs, setInputs] = useState([]);
  const [dataArray, setDataArray] = useState([]);

  const handleInputChange = (id, value) => {
    setInputs(inputs.map(input => input.id === id ? { ...input, value } : input));
  };

  const addInputs = () => {
    if (inputs.length === 0) {
      // Add the first set of inputs
      setInputs(initialInputSet());
    } else if (inputs.every(input => input.value.trim() !== '')) {
      // Add new set of inputs if the current ones are filled
      const newData = inputs.map(input => input.value);
      setDataArray([...dataArray, newData]);
      setInputs(initialInputSet());
    } else {
      alert('Please fill in all input fields before adding new ones.');
    }
  };

  return (
    <div>
      {inputs.map(input => (
        <div key={input.id}>
          <label>{input.label}</label>
          <input
            type="text"
            value={input.value}
            onChange={(e) => handleInputChange(input.id, e.target.value)}
          />
        </div>
      ))}
      <button onClick={addInputs}>Add Data and Inputs</button>
      <div>
        <h3>Data Array:</h3>
        <ul>
          {dataArray.map((data, index) => (
            <li key={index}>{data.join(', ')}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
