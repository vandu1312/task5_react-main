/* ColorPicker.js */

import React, { useState } from 'react';
import './ColorPicker.css';

const ColorPicker = () => {
  const colors = [
    'red', 'green', 'blue', 'yellow', 'purple',
    'cyan', 'magenta', 'orange', 'pink', 'teal',
    'navy', 'brown', 'lime', 'indigo', 'violet'
  ];

  const [selectedColor, setSelectedColor] = useState(null);

  const handleColorClick = (color) => {
    setSelectedColor(color);
  };

  return (
    <div className="color-picker">
      <button onClick={() => handleColorClick(null)}>Pick a color</button>
      <div className="color-list">
        {colors.map((color, index) => (
          <div
            key={index}
            className={`color-square ${color}`}
            onClick={() => handleColorClick(color)}
          ></div>
        ))}
      </div>
      <div className="selected-color">
        {selectedColor && <p>You selected: {selectedColor}</p>}
      </div>
    </div>
  );
};

export default ColorPicker;
