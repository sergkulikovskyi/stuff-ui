import React from 'react';
import STSwitch from '../ui/core/switch';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Stuff Toggle',
  component: STSwitch,
};

export const OnSwithStorybook = () => <STSwitch checked={true} onChange={action('changed')} />;
export const OffSwithStorybook = () => <STSwitch checked={false} onChange={action('changed')} />;
export const DisabledSwithStorybook = () => <STSwitch disabled checked={false} onChange={action('changed')} />;

export const WithTextOnSwithStorybook = () => (
  <STSwitch checked={true} label="On with text" onChange={action('changed')} />
);
export const WithTextOffSwithStorybook = () => (
  <STSwitch label="Off with text" checked={false} onChange={action('changed')} />
);

OnSwithStorybook.story = {
  name: 'On toggle',
};
OffSwithStorybook.story = {
  name: 'Off toggle',
};
DisabledSwithStorybook.story = {
  name: 'Disabled toggle',
};

WithTextOnSwithStorybook.story = {
  name: 'On with text',
};
WithTextOffSwithStorybook.story = {
  name: 'Off with text',
};
