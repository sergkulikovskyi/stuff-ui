import React from 'react';
import './App.scss';
import STButton from './ui/core/button';
import STSwitch from './ui/core/switch';
function App() {
  return (
    <div>
      <STButton>Button</STButton>
      <STButton type="toggle">Button</STButton>
      <STSwitch checked={false} />
      <STSwitch disabled label="disabled" checked={false} />
      <STSwitch label="text" checked={true} />
    </div>
  );
}

export default App;
