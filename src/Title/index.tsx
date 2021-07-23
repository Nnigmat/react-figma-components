import { FC, createElement, HTMLProps } from 'react';
import cn from 'classnames';

import './Title.css';

export type TitleProps = HTMLProps<HTMLHeadingElement> & {
  /**
   * @default 'h1'
   */
  component?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

  /**
   * @default 'm'
   */
  size?: 's' | 'm' | 'l';

  /**
   * @default 'normal'
   */
  weight?: 'normal' | 'bold';
};

export const Title: FC<TitleProps> = ({
  className,
  children,
  component = 'h1',
  size = 'm',
  weight,
  ...restProps
}) => {
  return createElement(component, {
    ...restProps,
    className: cn('title', className, {
      [`title__${size}`]: size,
      [`title__${weight}`]: weight,
    }),
    children,
  });
};

export default Title;
