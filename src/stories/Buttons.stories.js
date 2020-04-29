import React from 'react';
import STButton from '../ui/core/button';
import STSwitch from '../ui/core/switch';
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
