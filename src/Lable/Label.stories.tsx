import { Label } from '.';
import { Story } from '@storybook/react/types-6-0';

export default {
  title: 'Components/Label',
  component: Label,
  argTypes: {
    size: {
      options: ['s', 'm', 'l'],
      control: { type: 'radio' },
    },
  },
};

export const Base: Story = ({ children = 'Label', ...args }) => {
  return <Label {...args}>{children}</Label>;
};
