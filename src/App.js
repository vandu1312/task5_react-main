// App.js

import React from 'react';
import ColorPicker from './components/ColorPicker';
import './App.css';

const App = () => {
  const colors = ['red', 'green', 'blue'];  // Replace with your actual colors

  return (
    <div className="App">
      <ColorPicker colors={colors} />
    </div>
  );
};

export default App;
