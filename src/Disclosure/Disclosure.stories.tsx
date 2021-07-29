import React, { useState } from 'react';
import { Disclosure } from '.';
import { Story } from '@storybook/react/types-6-0';

export default {
  title: 'Components/Disclosure',
  component: Disclosure,
  argTypes: {
    disabled: {
      table: { disable: true },
    },
    checked: {
      table: { disable: true },
    },
  },
};

export const Base: Story = ({ children = 'Hidden content', ...args }) => {
  const [checked, setChecked] = useState(false);
  const handleChange = () => setChecked((prev) => !prev);

  return (
    <Disclosure
      onChange={handleChange}
      label="Section"
      {...args}
      checked={checked}
    >
      {children}
    </Disclosure>
  );
};
