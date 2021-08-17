import React, { useState } from 'react';
import { Story } from '@storybook/react/types-6-0';

import { Select, Item, Divider } from './';

export default {
  title: 'Components/Select',
  component: Select,
  argTypes: {
    disabled: {
      control: { type: 'boolean' },
    },
    multiple: {
      control: { type: 'boolean' },
    },
    checked: {
      table: { disable: true },
    },
    onChange: {
      table: { disable: true },
    },
  },
};

export const Base: Story = (args) => {
  const [selected, setSelected] = useState([
    { option: 'Element 1', value: 'element 1' },
  ]);

  const handleChange = (selected) => {
    setSelected(selected);
    console.log(selected);
  };

  return (
    <Select {...args} selected={selected} onChange={handleChange}>
      <Item value="element 1">Element 1</Item>
      <Item value="element 2">Element 2</Item>
      <Divider />
      <Item value="element 3">Element 3</Item>
      <Item value="element 4">Element 4</Item>
      <Divider>Group A</Divider>
      <Item value="element 5">Element 5</Item>
      <Item value="element 6">Element 6</Item>
    </Select>
  );
};
