import { KeyboardEventHandler, useState } from 'react';
import { useUniqId } from './useUniqId';

export function useSelectState(props: any) {
  const { children } = props;
  const [isOpened, setOpened] = useState(false);
  const [selected, setSelected] = useState<{ option: any; value: any }>(
    {} as any
  );
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const total = children.length - 1;
  const $collection = children.map((child: any, index: any) => {
    return {
      key: index,
      index,
      value: child.props.value,
      children: child.props.children,
    };
  });

  return {
    collection: $collection,

    isOpened,
    selected,
    toggleOpened: () => {
      setOpened(!isOpened);
    },
    setOpened: () => {
      setOpened(true);
      setFocusedIndex(selectedIndex > 0 ? selectedIndex : 0);
    },
    setClosed: () => {
      setOpened(false);
      setFocusedIndex(-1);
    },
    focusNext: () => {
      const next = focusedIndex + 1;
      setFocusedIndex(next > total ? 0 : next);
    },
    focusPrev: () => {
      const next = focusedIndex - 1;
      setFocusedIndex(next < 0 ? total : next);
    },
    select: (index?: number) => {
      if (index !== undefined) {
        setSelectedIndex(index);
        setFocusedIndex(index);
      } else {
        setSelectedIndex(focusedIndex);
      }

      const target = $collection[index ?? focusedIndex];

      setSelected({
        value: target.value,
        option: target.children,
      });
      setOpened(false);
    },
    isFocused: (index: number) => {
      return focusedIndex === index;
    },
    isSelected: (index: number) => {
      return selectedIndex === index;
    },
  };
}

export type MenuProps = {
  id: string;
  state: any;
  role: 'listbox';
  onBlur: (event: any) => void;
};

export type UseSelectResult = {
  triggerProps: {
    'aria-haspopup':
      | boolean
      | 'listbox'
      | 'dialog'
      | 'menu'
      | false
      | true
      | 'tree'
      | 'grid'
      | undefined;
    'aria-expanded': boolean;
    'aria-controls': string | undefined;
    onPressStart: KeyboardEventHandler<HTMLButtonElement>;
    onKeyDown: KeyboardEventHandler<HTMLButtonElement>;
  };
  menuProps: MenuProps;
};

export function useSelect(props: any, state: any): UseSelectResult {
  const uniqId = useUniqId();

  return {
    triggerProps: {
      'aria-haspopup': 'listbox',
      'aria-expanded': state.isOpened,
      'aria-controls': state.isOpened ? uniqId : undefined,
      onPressStart: () => {
        if (state.isOpened) {
          state.setClosed();
        } else {
          state.setOpened();
        }
      },
      onKeyDown: (event: any) => {
        if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
          state.setOpened();
        }
      },
    },
    menuProps: {
      id: uniqId,
      state,
      role: 'listbox',
      onBlur: (event: any) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          event.preventDefault();
          state.setClosed();
        }
      },
    },
  };
}
