import React from 'react';
import STSwitch from '../ui/core/switch';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Stuff Toggle',
  component: STSwitch,
};

export const OnSwithStorybook = () => <STSwitch checked={true} />;
export const OfSwithStorybook = () => <STSwitch />;
export const DisabledSwithStorybook = () => <STSwitch disabled />;

export const WithTextOnSwithStorybook = () => <STSwitch checked={true} label="On with text" />;
export const WithTextOffSwithStorybook = () => <STSwitch label="Off with text" />;

OnSwithStorybook.story = {
  name: 'On toggle',
};
OfSwithStorybook.story = {
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
