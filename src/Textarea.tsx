import React, { ChangeEventHandler } from 'react';
import cn from 'classnames';

import { TextareaProps } from '../index';

const Textarea: React.FunctionComponent<TextareaProps> = ({
  className,
  rows = 2,
  defaultValue,
  placeholder,
  disabled,
  onChange,
}) => {
  const handleChange: ChangeEventHandler<HTMLTextAreaElement> = (event) =>
    onChange?.(event.target.value, event);

  return (
    <textarea
      rows={rows}
      className={cn('textarea', className)}
      placeholder={placeholder}
      defaultValue={defaultValue}
      disabled={disabled}
      onChange={handleChange}
    />
  );
};

export default Textarea;
