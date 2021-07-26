import { FC, useState, useCallback, ChangeEvent } from 'react';
import { Input } from './';
import { Icon as IconComponent } from '../Icon';
import { Story } from '@storybook/react/types-6-0';

export default {
  title: 'Components/Input',
  component: Input,
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
    <Input
      {...args}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

export const Icon: FC<Story> = (args: any) => {
  const { placeholder = 'Placeholder' } = args;
  const [value, setValue] = useState('');
  const onChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  }, []);

  return (
    <Input
      {...args}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      renderIcon={<IconComponent name="search" color="black" />}
    />
  );
};
