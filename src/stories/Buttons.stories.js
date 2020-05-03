import React from 'react';
import STButton from '../ui/core/button';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Stuff Buttons',
  component: STButton,
};

export const ActivePrimaryButtonStorybook = () => <STButton onClick={action('clicked')}>Active btn</STButton>;
export const DisabledPrimaryButtonStorybook = () => (
  <STButton disabled onClick={action('clicked')}>
    Inactive btn
  </STButton>
);
export const SecondaryButtonStorybook = () => (
  <STButton color="secondary" onClick={action('clicked')}>
    Active btn
  </STButton>
);
export const DisabledSecondaryButtonStorybook = () => (
  <STButton color="secondary" disabled onClick={action('clicked')}>
    Inactive btn
  </STButton>
);
//selectable
export const SelectedSelectableButtonStorybook = () => (
  <STButton type="toggle" selected={true} onClick={action('clicked')}>
    Selected
  </STButton>
);
export const DefaultSelectableButtonStorybook = () => (
  <STButton type="toggle" onClick={action('clicked')}>
    Selected
  </STButton>
);

//icon button and icon text button
export const IconButtonStorybook = () => (
  <STButton
    onClick={action('clicked')}
    icon={
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24px" height="24px">
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M12 2.02c-5.51 0-9.98 4.47-9.98 9.98s4.47 9.98 9.98 9.98 9.98-4.47 9.98-9.98S17.51 2.02 12 2.02zm0 17.96c-4.4 0-7.98-3.58-7.98-7.98S7.6 4.02 12 4.02 19.98 7.6 19.98 12 16.4 19.98 12 19.98zM12.75 5l-4.5 8.5h3.14V19l4.36-8.5h-3z" />
      </svg>
    }
  />
);

export const IconTextButtonStorybook = () => (
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
);

ActivePrimaryButtonStorybook.story = {
  name: 'Primary btn',
};

DisabledPrimaryButtonStorybook.story = {
  name: 'Inactive primary btn',
};

SecondaryButtonStorybook.story = {
  name: 'Secondary btn',
};

DisabledSecondaryButtonStorybook.story = {
  name: 'Inactive secondary btn',
};

//selectable
SelectedSelectableButtonStorybook.story = {
  name: 'Selected selectable btn',
};

DefaultSelectableButtonStorybook.story = {
  name: 'Not selected selectable btn',
};

//icon
IconButtonStorybook.story = {
  name: 'Icon button',
};

IconTextButtonStorybook.story = {
  name: 'Icon button with text',
};
