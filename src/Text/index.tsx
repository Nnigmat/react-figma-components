import React, { HTMLProps, FC } from 'react';
import cn from 'classnames';

import './Text.css';

export type TextProps = HTMLProps<HTMLParagraphElement> & {
  /**
   * @default 'm'
   */
  size?: 's' | 'm' | 'l';

  /**
   * @default 'normal'
   */
  weight?: 'normal' | 'bold';
};

export const Text: FC<TextProps> = ({
  className,
  children,
  size = 'm',
  weight = 'normal',
  ...restProps
}) => {
  return (
    <p
      {...restProps}
      className={cn('text', className, {
        [`text__${size}`]: size,
        [`text__${weight}`]: weight,
      })}
    >
      {children}
    </p>
  );
};
