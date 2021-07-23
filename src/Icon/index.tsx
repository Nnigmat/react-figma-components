import React from 'react';
import cn from 'classnames';

import { IconProps } from './Icon.d';

import './Icon.css';

export const Icon: React.FunctionComponent<IconProps> = ({
  className,
  name,
  color = 'black3',
  ...restProps
}) => {
  return (
    <div
      {...restProps}
      className={cn('icon', className, `icon--${name}`, `icon--${color}`)}
    />
  );
};
