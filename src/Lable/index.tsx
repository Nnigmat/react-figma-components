import React, { FC, ReactNode } from 'react';
import cn from 'classnames';

import './Label.css';

export type LabelProps = {
  className?: string;
  children?: ReactNode;

  /**
   * @default 'm'
   */
  size?: 's' | 'm' | 'l';

  /**
   * @default 'normal'
   */
  weight?: 'normal' | 'bold';
};

export const Label: FC<LabelProps> = ({
  className,
  children,
  size = 'm',
  weight = 'normal',
}) => {
  return (
    <div
      className={cn('label', className, {
        [`label__${size}`]: size,
        [`label__${weight}`]: weight,
      })}
    >
      {children}
    </div>
  );
};
