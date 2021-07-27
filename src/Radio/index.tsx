import React, { useRef, FC, HTMLProps } from 'react';
import cn from 'classnames';
import { VisuallyHidden } from 'react-aria';
import { CommonCheckboxProps, useCheckbox } from 'web-platform-alpha';

import './Radio.css';

export type RadioProps = CommonCheckboxProps & HTMLProps<HTMLInputElement>;

export const Radio: FC<RadioProps> = (props) => {
  const { children, className, ...restProps } = props;
  const ref = useRef(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const { rootProps, inputProps } = useCheckbox(restProps, inputRef);
  const { disabled, checked } = inputProps;

  return (
    <label
      {...rootProps}
      className={cn(className, 'radio', {
        radio__disabled: disabled,
        radio__checked: checked,
      })}
    >
      <VisuallyHidden>
        <input {...inputProps} ref={ref} />
      </VisuallyHidden>
      {children}
    </label>
  );
};
