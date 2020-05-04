import React from 'react';
import './App.scss';
import STButton from './ui/core/button';
import STSwitch from './ui/core/switch';
import STCheckbox from './ui/core/checkbox';
import STStatus from './ui/core/status';
import STDropdown from './ui/core/dropdown';

function App() {
  return (
    <div>
      <STButton>Button</STButton>
      <STButton type="toggle">Button</STButton>
      <STSwitch checked={false} />
      <STSwitch disabled label="disabled" checked={false} />
      <STSwitch label="text" checked={true} />
      <STCheckbox checked={true} label="On state" name="checkbox1" />
      <STCheckbox checked={false} label="Off state" name="checkbox2" />
      <STCheckbox disabled />
      <STButton
        icon={
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24px" height="24px">
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M12 2.02c-5.51 0-9.98 4.47-9.98 9.98s4.47 9.98 9.98 9.98 9.98-4.47 9.98-9.98S17.51 2.02 12 2.02zm0 17.96c-4.4 0-7.98-3.58-7.98-7.98S7.6 4.02 12 4.02 19.98 7.6 19.98 12 16.4 19.98 12 19.98zM12.75 5l-4.5 8.5h3.14V19l4.36-8.5h-3z" />
          </svg>
        }
      />
      <STButton
        icon={
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24px" height="24px">
            <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
            <path d="M0 0h24v24H0z" fill="none" />
          </svg>
        }
        text="Add parameter"
      />
      <STStatus />
      <STDropdown
        options={[
          { label: 'Add option', value: 0 },
          {
            label: 'Remove option',
            value: [{ label: 'Option 1', value: 1 }, { label: 'Option 2', value: 2 }, { label: 'Option 3', value: 3 }],
          },
          {
            label: 'Add parameter',
            suggest: true,
            value: [{ label: 'Option 4', value: 4 }, { label: 'Option 5', value: 5 }, { label: 'Option 6', value: 6 }],
          },
        ]}
      />
      <div style={{ marginTop: '40px' }}>
        <STDropdown
          options={[
            { label: 'Option 1', value: 0 },
            { label: 'Option 2', value: 1 },
            { label: 'Option 3', value: 2 },
            { label: 'I’m the longest term in the options', value: 3 },
          ]}
        />
      </div>
      <div style={{ marginTop: '40px' }}>
        <STDropdown
          options={[
            { label: 'Add option', value: 0 },
            {
              label: 'Remove option',
              value: [
                { label: 'Option 1', value: 1 },
                { label: 'Option 2', value: 2 },
                { label: 'Option 3', value: 3 },
              ],
            },
            {
              label: 'Add parameter',
              suggest: true,
              value: [
                { label: 'Option 4', value: 4 },
                { label: 'Option 5', value: 5 },
                { label: 'Option 6', value: 6 },
              ],
            },
          ]}
        />
      </div>

      <div style={{ marginTop: '700px' }}>
        <STDropdown
          options={[
            { label: 'Add option', value: 0 },
            {
              label: 'Remove option',
              value: [
                { label: 'Option 1', value: 1 },
                { label: 'Option 2', value: 2 },
                { label: 'Option 3', value: 3 },
              ],
            },
            {
              label: 'Add parameter',
              suggest: true,
              value: [
                { label: 'Option 4', value: 4 },
                { label: 'Option 5', value: 5 },
                { label: 'Option 6', value: 6 },
              ],
            },
          ]}
        />
      </div>
    </div>
  );
}

export default App;
