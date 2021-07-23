import { Button } from '.';
import { Story } from '@storybook/react/types-6-0';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    view: {
      options: ['primary', 'secondary', 'tertiary'],
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
};

export const Base: Story = ({ children = 'Button', ...args }) => (
  <Button {...args}>{children}</Button>
);
