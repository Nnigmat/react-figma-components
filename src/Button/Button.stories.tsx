import React from 'react';
import { Button } from '.';
import { Story } from '@storybook/react/types-6-0';

export default {
  title: 'Components/Button',
  component: Button,
  argType: {
    view: {
      options: ['primary', 'secondary', 'tertiary'],
    },
  },
};

export const Base: Story = ({ children = 'Button', ...args }) => (
  <Button {...args}>{children}</Button>
);
