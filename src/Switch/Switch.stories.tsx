import { useState } from 'react';
import { Switch } from '.';
import { Story } from '@storybook/react/types-6-0';

export default {
  title: 'Components/Switch',
  component: Switch,
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
    <Switch {...args} checked={checked} onChange={handleChange}>
      {children}
    </Switch>
  );
};
