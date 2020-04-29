import React from 'react';
import './App.scss';
import STButton from './ui/core/button';
import STSwitch from './ui/core/switch';
function App() {
  return (
    <div>
      <STButton>Button</STButton>
      <STButton type="toggle">Button</STButton>
      <STSwitch />
      <STSwitch disabled label="disabled" />
      <STSwitch label="text" />
    </div>
  );
}

export default App;
