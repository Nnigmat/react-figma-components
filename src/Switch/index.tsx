import React, { useRef, FC, HTMLProps } from 'react';
import cn from 'classnames';
import { VisuallyHidden } from 'react-aria';
import { CommonCheckboxProps, useCheckbox } from 'web-platform-alpha';

import './Switch.css';

export type SwitchProps = CommonCheckboxProps & HTMLProps<HTMLInputElement>;

export const Switch: FC<SwitchProps> = (props) => {
  const { children, className, ...restProps } = props;
  const ref = useRef(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const { rootProps, inputProps } = useCheckbox(restProps, inputRef);
  const { disabled, checked } = inputProps;

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
