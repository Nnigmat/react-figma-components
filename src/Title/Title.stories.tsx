import { Title } from '.';
import { Story } from '@storybook/react/types-6-0';

export default {
  title: 'Components/Title',
  component: Title,
  argTypes: {
    size: {
      options: ['s', 'm', 'l'],
      control: { type: 'radio' },
    },
  },
};

export const Base: Story = ({ children = 'Toggle Me', ...args }) => {
  return <Title {...args}>{children}</Title>;
};
