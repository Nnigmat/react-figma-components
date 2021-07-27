import React, { FC, useRef, ReactNode } from 'react';
import cn from 'classnames';
import { useTextField, CommonTextFieldProps } from 'web-platform-alpha';

import './Input.css';

export type InputProps = CommonTextFieldProps & { renderIcon?: ReactNode };

export const Input: FC<InputProps> = (props) => {
  const { className, renderIcon, ...restProps } = props;
  const inputRef = useRef<HTMLInputElement>(null);
  const { ElementType, inputProps } = useTextField(restProps, inputRef);

  return (
    <div
      className={cn('input', className, {
        input__has_icon: renderIcon,
      })}
    >
      {renderIcon}
      <ElementType {...inputProps} className="input-field" ref={inputRef} />
    </div>
  );
};
