import { useRef, FC, HTMLProps } from 'react';
import cn from 'classnames';
import { VisuallyHidden } from 'react-aria';
import { useCheckbox, CommonCheckboxProps } from 'web-platform-alpha';

import './Checkbox.css';

export type CheckboxProps = CommonCheckboxProps & HTMLProps<HTMLInputElement>;

export const Checkbox: FC<CheckboxProps> = (props) => {
  const { children, className, ...restProps } = props;
  const ref = useRef(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const { rootProps, inputProps } = useCheckbox(restProps, inputRef);
  const { disabled, checked } = inputProps;

  return (
    <label
      {...rootProps}
      className={cn(className, 'checkbox', {
        checkbox__disabled: disabled,
        checkbox__checked: checked,
      })}
    >
      <VisuallyHidden>
        <input {...inputProps} ref={ref} />
      </VisuallyHidden>
      {children}
    </label>
  );
};
