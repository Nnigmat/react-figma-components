import React, { useRef, FC, HTMLProps } from 'react';
import cn from 'classnames';
import { useButton, UseButtonProps } from 'web-platform-alpha';

import './Button.css';

export type ButtonProps = HTMLProps<HTMLButtonElement> &
  UseButtonProps & {
    /**
     * @default 'primary'
     */
    view?: 'primary' | 'secondary' | 'tertiary';
    /**
     * @default false
     */
    destructive?: boolean;
  };

export const Button: FC<ButtonProps> = (props) => {
  const {
    className,
    view = 'primary',
    destructive,
    children,
    ...restProps
  } = props;
  const ref = useRef(null);
  const { buttonProps } = useButton(restProps, ref);

  return (
    <button
      {...buttonProps}
      className={cn(className, 'button', {
        button__destructive: destructive,
        button__primary: view === 'primary',
        button__secondary: view === 'secondary',
        button__tertiary: view === 'tertiary',
      })}
      ref={ref}
    >
      {children}
    </button>
  );
};
