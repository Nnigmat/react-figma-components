import { useState } from 'react';
import { Radio } from '.';
import { Story } from '@storybook/react/types-6-0';

export default {
  title: 'Components/Radio',
  component: Radio,
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
    <Radio {...args} checked={checked} onChange={handleChange}>
      {children}
    </Radio>
  );
};
