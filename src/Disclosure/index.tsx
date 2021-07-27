import React, { FC, useRef, HTMLProps } from 'react';
import cn from 'classnames';
import { VisuallyHidden } from 'react-aria';
import { CommonToggleProps, useToggle } from 'web-platform-alpha';

import './Disclosure.css';

export type DisclosureProps = CommonToggleProps &
  HTMLProps<HTMLInputElement> & {
    /**
     * @default 'default'
     */
    view?: 'default' | 'section';
  };

export const Disclosure: FC<DisclosureProps> = (props) => {
  const { view = 'default', label, children, className, ...restProps } = props;
  const ref = useRef(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const { rootProps, inputProps } = useToggle(restProps, inputRef);
  const { checked } = inputProps;

  return (
    <div
      className={cn(className, 'disclosure', {
        disclosure__expanded: checked,
        disclosure__section: view === 'section',
      })}
    >
      <label {...rootProps} className="disclosure-label">
        <VisuallyHidden>
          <input {...inputProps} ref={ref} />
        </VisuallyHidden>
        {label}
      </label>
      <div className="disclosure-content">{children}</div>
    </div>
  );
};
