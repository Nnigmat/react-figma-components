import React from 'react';
import cn from 'classnames';

import { InputProps, InputWithIconProps } from '../index';
import { Icon } from './';

const InputComponent: React.FunctionComponent<InputProps> = ({
  className = '',
  type,
  defaultValue,
  placeholder,
  disabled,
  onChange,
}) => (
  <input
    type={type}
    className={className}
    placeholder={placeholder}
    defaultValue={defaultValue}
    disabled={disabled}
    onChange={(event) => onChange && onChange(event.target.value, event)}
  />
);

const Input: React.FunctionComponent<InputWithIconProps> = ({
  className,
  type = 'text',
  icon,
  iconColor = 'black3',
  defaultValue,
  placeholder,
  disabled,
  onChange,
}) => {
  const inputClass = 'input__field';

  if (icon) {
    return (
      <div className="input input--with-icon">
        <Icon name={icon} color={iconColor} disabled={disabled} />
        <InputComponent
          className={cn(inputClass, className)}
          type={type}
          defaultValue={defaultValue}
          placeholder={placeholder}
          disabled={disabled}
          onChange={onChange}
        />
      </div>
    );
  } else {
    return (
      <div className="input">
        <InputComponent
          className={cn(inputClass, className)}
          type={type}
          defaultValue={defaultValue}
          placeholder={placeholder}
          disabled={disabled}
          onChange={onChange}
        />
      </div>
    );
  }
};

export default Input;
