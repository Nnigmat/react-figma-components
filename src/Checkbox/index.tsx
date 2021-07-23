import React, { useRef, FC } from 'react';
import cn from 'classnames';
import { VisuallyHidden } from 'react-aria';
import { useCheckbox, useHover } from 'web-platform-alpha';

import { CheckboxProps } from '../../index';
import './Checkbox.css';

export const Checkbox: FC<CheckboxProps> = (props) => {
  const { children, className, ...restProps } = props;
  const ref = useRef(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const { isPressed, rootProps, inputProps } = useCheckbox(restProps, inputRef);
  const { disabled, checked } = inputProps;
  const { isHovered, hoverProps } = useHover(props);

  console.log(inputProps);

  return (
    <label
      {...rootProps}
      className={cn(className, 'checkbox', {
        checkbox__disabled: disabled,
        checkbox__checked: checked,
      })}
    >
      <VisuallyHidden>
        <input {...inputProps} ref={ref} />
      </VisuallyHidden>
      {children}
    </label>
  );
};
