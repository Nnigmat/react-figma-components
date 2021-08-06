import React, { FC, useRef, useEffect, useState, ReactNode } from 'react';
import cn from 'classnames';
import { useButton } from 'web-platform-alpha';

import { useSelect, useSelectState } from './hooks';
import { MenuBase } from './Menu';

import './Select.css';

type Item = {
  value: any;
  option: any;
};

export type SelectProps = {
  className?: string;
  children?: ReactNode;
  onChange?: (selected: Item[]) => void;
  disabled?: boolean;
  multiple?: boolean;
};

export const Select: FC<SelectProps> = (props) => {
  const { className, onChange, disabled, ...restProps } = props;
  const buttonRef = useRef<HTMLButtonElement>(null);
  const state = useSelectState(restProps);
  const { selected } = state;
  const { triggerProps, menuProps } = useSelect(restProps, state);
  // @ts-ignore
  const { buttonProps } = useButton({ ...triggerProps, disabled }, buttonRef);

  useEffect(() => {
    onChange?.(selected);
  }, [selected, onChange]);

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
