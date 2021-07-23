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
      control: { type: 'boolean' },
    },
  },
};

export const Base: Story = ({ children = 'Toggle Me', ...args }) => {
  return <Checkbox {...args}>{children}</Checkbox>;
};
