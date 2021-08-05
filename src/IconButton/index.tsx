import React, { HTMLProps, useRef } from 'react';
import cn from 'classnames';
import { useButton, UseButtonProps } from 'web-platform-alpha';

import { IconProps } from '../Icon/Icon.d';
import { Icon } from '../Icon';
import './IconButton.css';

export type IconButtonProps = HTMLProps<HTMLButtonElement> &
  UseButtonProps &
  IconProps;

export const IconButton: React.FunctionComponent<IconButtonProps> = ({
  className,
  name,
  color = 'black3',
  children,
  ...restProps
}) => {
  const ref = useRef(null);
  const { buttonProps, isPressed } = useButton(restProps, ref);

  return (
    <button
      {...buttonProps}
      className={cn(className, 'icon-button', {
        'icon-button--selected': isPressed,
      })}
      ref={ref}
    >
      <Icon name={name} color={color} />
    </button>
  );
};
