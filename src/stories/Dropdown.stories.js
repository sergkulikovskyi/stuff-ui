import React from 'react';
import STDropdown from '../ui/core/dropdown';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Stuff Dropdown',
  component: STDropdown,
};

export const DefaultSTDropdownStorybook = () => (
  <STDropdown options={[{ label: 'Default', value: 0 }]} onChange={action('changed')} />
);
export const SelectedSTDropdownStorybook = () => (
  <STDropdown
    onChange={action('changed')}
    options={[{ label: 'Add option', value: 0 }]}
    selected={{ label: 'Selected', value: 1 }}
  />
);

export const MaxWidthSTDropdownStorybook = () => (
  <STDropdown
    onChange={action('changed')}
    options={[
      { label: 'Add option', value: 0 },
      { label: 'I’m the longest term in the options', value: 1 },
      { label: 'Option 2', value: 2 },
    ]}
  />
);

export const SubMenuSTDropdownStorybook = () => (
  <STDropdown
    onChange={action('changed')}
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
);

DefaultSTDropdownStorybook.story = {
  name: 'Dropdown default',
};
SelectedSTDropdownStorybook.story = {
  name: 'Dropdown  Hover/selected',
};
MaxWidthSTDropdownStorybook.story = {
  name: 'Dropdown  Width is set according to the longest term + 20px',
};
SubMenuSTDropdownStorybook.story = {
  name: 'Dropdown  Menu with devider and/or sub-menu',
};
