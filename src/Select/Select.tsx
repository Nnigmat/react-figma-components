import React, { FC, useRef } from 'react';
import cn from 'classnames';
import { useButton } from 'web-platform-alpha';

import {
  useSelect,
  useSelectState,
  UseSelectStateProps,
  SelectOption,
} from './hooks';
import { MenuBase } from './Menu';

import './Select.css';

export type SelectProps = UseSelectStateProps & {
  className?: string;
  onChange: (selected: SelectOption[]) => void;
  disabled?: boolean;
};

export const Select: FC<SelectProps> = (props) => {
  const { className, disabled, ...restProps } = props;
  const buttonRef = useRef<HTMLButtonElement>(null);
  const state = useSelectState(restProps);
  const { selected } = state;
  const { triggerProps, menuProps } = useSelect(restProps, state);
  // @ts-ignore
  const { buttonProps } = useButton({ ...triggerProps, disabled }, buttonRef);

  const label = selected.map(({ option }) => option).join(', ');

  return (
    <div className={cn('select-menu', className)}>
      <button {...buttonProps} className="select-menu__button">
        <span className="select-menu__label">
          {Boolean(label) ? label : 'Select option'}
        </span>
        <span className="select-menu__caret" />
      </button>
      <MenuBase {...menuProps} visible={state.isOpened} />
    </div>
  );
};
