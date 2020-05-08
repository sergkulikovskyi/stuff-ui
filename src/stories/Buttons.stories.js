import React from 'react';
import STButton from '../ui/core/button';
import STSwitch from '../ui/core/switch';
import STCheckbox from '../ui/core/checkbox';
import STStatus from '../ui/core/status';
import { action } from '@storybook/addon-actions';

export default {
  title: '1-Buttons',
  component: STButton,
};

export const PrimaryButtonStorybook = () => (
  <>
    <div style={{ marginBottom: 10 }}>
      <STButton onClick={action('clicked')}>Active btn</STButton>
    </div>
    <div>
      <STButton disabled onClick={action('clicked')}>
        Inactive btn
      </STButton>
    </div>
  </>
);

export const SecondaryButtonStorybook = () => (
  <>
    <div style={{ marginBottom: 10 }}>
      <STButton color="secondary" onClick={action('clicked')}>
        Active btn
      </STButton>
    </div>
    <div>
      <STButton color="secondary" disabled onClick={action('clicked')}>
        Inactive btn
      </STButton>
    </div>
  </>
);

//selectable
export const SelectableButtonStorybook = () => (
  <>
    <div style={{ marginBottom: 10 }}>
      <STButton type="toggle" selected={true} onClick={action('clicked')}>
        Selected
      </STButton>
    </div>
    <div>
      <STButton type="toggle" onClick={action('clicked')}>
        Not selected
      </STButton>
    </div>
  </>
);
export const SwithStorybook = () => (
  <>
    <div style={{ marginBottom: 10 }}>
      <STSwitch checked={true} onChange={action('changed')} />
    </div>
    <div style={{ marginBottom: 10 }}>
      <STSwitch checked={false} onChange={action('changed')} />
    </div>
    <div style={{ marginBottom: 10 }}>
      <STSwitch disabled checked={false} onChange={action('changed')} />
    </div>
    <div style={{ marginBottom: 10 }}>
      <STSwitch checked={true} label="On with text" onChange={action('changed')} />
    </div>
    <div style={{ marginBottom: 10 }}>
      <STSwitch label="Off with text" checked={false} onChange={action('changed')} />
    </div>
  </>
);

export const STCheckboxStorybook = () => (
  <>
    <div style={{ marginBottom: 10 }}>
      <STCheckbox checked={true} label="On state" name="checkbox1" onChange={action('changed')} />
    </div>
    <div>
      <STCheckbox checked={false} label="Off state" name="checkbox2" onChange={action('changed')} />
    </div>
  </>
);

//icon button and icon text button
export const IconButtonStorybook = () => (
  <>
    <div style={{ marginBottom: 10 }}>
      <STButton
        onClick={action('clicked')}
        icon={
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24px" height="24px">
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M12 2.02c-5.51 0-9.98 4.47-9.98 9.98s4.47 9.98 9.98 9.98 9.98-4.47 9.98-9.98S17.51 2.02 12 2.02zm0 17.96c-4.4 0-7.98-3.58-7.98-7.98S7.6 4.02 12 4.02 19.98 7.6 19.98 12 16.4 19.98 12 19.98zM12.75 5l-4.5 8.5h3.14V19l4.36-8.5h-3z" />
          </svg>
        }
      />
    </div>
    <div>
      <STButton
        onClick={action('clicked')}
        icon={
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24px" height="24px">
            <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
            <path d="M0 0h24v24H0z" fill="none" />
          </svg>
        }
        text="Add parameter"
      />
    </div>
  </>
);

export const STStatusStorybook = () => (
  <>
    <div style={{ marginBottom: 10 }}>
      <STStatus onChange={action('changed')} />
    </div>
    <div>
      <STStatus onChange={action('changed')} status={{ value: 1, label: 'Can’t be done' }} />
    </div>
  </>
);

PrimaryButtonStorybook.story = {
  name: '01.01.Primary',
};

SecondaryButtonStorybook.story = {
  name: '01.02.Secondary',
};

//selectable
SelectableButtonStorybook.story = {
  name: '01.03.Selectable',
};

SwithStorybook.story = {
  name: '01.04.Toggle',
};
//checbox
STCheckboxStorybook.story = {
  name: '01.05.Checkbox',
};

//icon
IconButtonStorybook.story = {
  name: '01.06.IconButton',
};
//status
STStatusStorybook.story = {
  name: '01.07.Status',
};
