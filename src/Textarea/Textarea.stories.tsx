import { FC, useState, useCallback, ChangeEvent } from 'react';
import { Textarea } from './';
import { Story } from '@storybook/react/types-6-0';

export default {
  title: 'Components/Textarea',
  component: Textarea,
  argTypes: {
    disabled: { control: { type: 'boolean' } },
    renderIcon: {
      table: { disable: true },
    },
    placeholder: {
      control: { type: 'text' },
    },
  },
};

export const Base: FC<Story> = (args: any) => {
  const { placeholder = 'Placeholder' } = args;
  const [value, setValue] = useState('');
  const onChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  }, []);

  return (
    <Textarea
      {...args}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};
