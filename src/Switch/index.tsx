import React, { useRef, FC } from 'react';
import cn from 'classnames';
import { VisuallyHidden } from 'react-aria';
import { useCheckbox, useHover } from 'web-platform-alpha';

import { CheckboxProps } from '../../index';
import './Switch.css';

export const Switch: FC<CheckboxProps> = (props) => {
  const { children, className } = props;
  const ref = useRef(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const { isPressed, rootProps, inputProps } = useCheckbox(props, inputRef);
  const { disabled, checked } = inputProps;
  // const { isHovered, hoverProps } = useHover(props);

  return (
    <label
      {...rootProps}
      className={cn(className, 'switch', {
        switch__disabled: disabled,
        switch__checked: checked,
      })}
    >
      <VisuallyHidden>
        <input {...inputProps} ref={ref} />
      </VisuallyHidden>
      {children}
    </label>
  );
};
