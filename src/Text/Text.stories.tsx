import { Text } from '.';
import { Story } from '@storybook/react/types-6-0';

export default {
  title: 'Components/Text',
  component: Text,
  argTypes: {
    size: {
      options: ['s', 'm', 'l'],
      control: { type: 'radio' },
    },
  },
};

export const Base: Story = ({ children = 'This is text', ...args }) => {
  return <Text {...args}>{children}</Text>;
};
