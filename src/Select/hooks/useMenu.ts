import { HTMLAttributes } from 'react';

import { usePress, useFocusable } from 'web-platform-alpha';

export type UseMenuResult = {
  menuProps: HTMLAttributes<HTMLElement>;
};

export function useMenu(props: any, state: any, menuRef: any): UseMenuResult {
  const { autoFocus, id, role = 'menu', onBlur, tabIndex = 0 } = props;
  const { focusableProps } = useFocusable({ autoFocus }, menuRef);

  const menuProps: HTMLAttributes<HTMLElement> = {
    onKeyDown: (event) => {
      if (event.key === 'ArrowDown') {
        event.preventDefault();
        state.focusNext();
      }
      if (event.key === 'ArrowUp') {
        event.preventDefault();
        state.focusPrev();
      }
      if (event.key === 'Space') {
        event.preventDefault();
        state.select();
      }
    },
  };

  return {
    menuProps: {
      onBlur,
      id,
      ...focusableProps,
      ...menuProps,
      tabIndex: state.isVirtualFocus ? undefined : tabIndex,
      role,
    },
  };
}

export function useMenuItem(props: any, state: any, ref: any) {
  const { index, id } = props;
  const isFocused = state.isFocused(index);
  const isSelected = state.isSelected(index);
  const autoFocus = state.isVirtualFocus ? false : isFocused;
  const { focusableProps } = useFocusable({ autoFocus }, ref);
  const { pressProps } = usePress({
    onPress: () => {
      state.select(index);
    },
  });

  return {
    isFocused,
    isSelected,
    itemProps: {
      id,
      ...pressProps,
      ...focusableProps,
      'aria-selected': isSelected,
      role: 'option',
      // eslint-disable-next-line no-nested-ternary
      tabIndex: state.isVirtualFocus ? undefined : isFocused ? 0 : -1,
    },
  };
}
