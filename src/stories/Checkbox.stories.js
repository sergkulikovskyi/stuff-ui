import React from 'react';
import STCheckbox from '../ui/core/checkbox';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Stuff Checkbox',
  component: STCheckbox,
};

export const OnSTCheckboxStorybook = () => (
  <STCheckbox checked={true} label="On state" name="checkbox1" onChange={action('changed')} />
);
export const OffSTCheckboxStorybook = () => (
  <STCheckbox checked={false} label="Off state" name="checkbox2" onChange={action('changed')} />
);

OnSTCheckboxStorybook.story = {
  name: 'On state',
};
OffSTCheckboxStorybook.story = {
  name: 'Off state',
};
