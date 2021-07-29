import React, { useState } from 'react';
import { Checkbox } from '.';
import { Story } from '@storybook/react/types-6-0';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  argTypes: {
    disabled: {
      control: { type: 'boolean' },
    },
    checked: {
      table: { disable: true },
    },
  },
};

export const Base: Story = ({ children = 'Toggle Me', ...args }) => {
  const [checked, setChecked] = useState(false);
  const handleChange = () => setChecked((prev) => !prev);

  return (
    <Checkbox {...args} checked={checked} onChange={handleChange}>
      {children}
    </Checkbox>
  );
};
