import { FC, useRef, useEffect, useState, ReactNode } from 'react';
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
  onChange?: (selected: Item) => void;
  disabled?: boolean;
};

export const Select: FC<SelectProps> = (props) => {
  const [prevSelected, setPrevSelected] = useState<Item>();
  const { className, onChange, disabled, ...restProps } = props;
  const buttonRef = useRef<HTMLButtonElement>(null);
  const state = useSelectState(restProps);
  const { triggerProps, menuProps } = useSelect(restProps, state);
  // @ts-ignore
  const { buttonProps } = useButton({ ...triggerProps, disabled }, buttonRef);

  useEffect(() => {
    if (state.selected.value !== prevSelected?.value) {
      onChange?.(state.selected);
      setPrevSelected(state.selected);
    }
  }, [state, onChange, prevSelected]);

  return (
    <div className={cn('select-menu', className)}>
      <button {...buttonProps} className="select-menu__button">
        <span className="select-menu__label">
          {state.selected.option ?? 'Select option'}
        </span>
        <span className="select-menu__caret" />
      </button>
      <MenuBase {...menuProps} visible={state.isOpened} />
    </div>
  );
};
