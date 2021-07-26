import { FC, useRef } from 'react';
import cn from 'classnames';
import {
  useAutoResize,
  useTextField,
  CommonTextFieldProps,
} from 'web-platform-alpha';

import './Textarea.css';

export type TextareaProps = CommonTextFieldProps & {
  autoFocus?: boolean;
  autoResize?: boolean;
  cols?: number;
  rows?: number;
};

export const Textarea: FC<TextareaProps> = (props) => {
  const { autoResize, className, ...restProps } = props;
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const { ElementType, inputProps } = useTextField(
    { as: 'textarea', ...restProps },
    inputRef
  );
  useAutoResize({ enabled: Boolean(autoResize), ...restProps }, inputRef);

  return (
    <ElementType
      {...inputProps}
      ref={inputRef}
      className={cn('textarea', className)}
    />
  );
};
