import React from 'react';
import STStatus from '../ui/core/status';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Stuff Status',
  component: STStatus,
};

export const DoneSTStatusStorybook = () => <STStatus onChange={action('changed')} />;
export const NotDoneSTStatusStorybook = () => (
  <STStatus onChange={action('changed')} status={{ value: 1, label: 'Can’t be done' }} />
);

DoneSTStatusStorybook.story = {
  name: 'Status done',
};
NotDoneSTStatusStorybook.story = {
  name: 'Status Can’t be done',
};
