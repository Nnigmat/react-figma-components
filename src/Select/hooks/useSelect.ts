import {
  KeyboardEventHandler,
  useState,
  useEffect,
  ReactNode,
  Children,
} from 'react';
import { useUniqId } from './useUniqId';

export type SelectOption = {
  option?: any;
  value: any;
};

export type UseSelectStateProps = {
  children: ReactNode;
  multiple?: boolean;
  selected: SelectOption[];
  onChange: (selected: SelectOption[]) => void;
};

export function useSelectState(props: UseSelectStateProps) {
  const { children, multiple = false, selected, onChange: setSelected } = props;
  const selectedIndexDefault = Array(Children.count(children)).fill(false);

  const [isOpened, setOpened] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const [selectedIndex, setSelectedIndex] = useState(selectedIndexDefault);

  const total = Children.count(children) - 1;
  const $collection =
    Children.map(children, (child: any, index: any) => {
      return {
        key: index,
        index,
        value: child.props.value,
        children: child.props.children,
      };
    }) || [];

  useEffect(() => {
    if (!selected) {
      return;
    }

    $collection.forEach(({ value }, index) => {
      if (selected.some(({ value: _value }) => value === _value)) {
        setSelectedIndex((prev) => {
          const copy = [...prev];
          copy[index] = true;
          return copy;
        });
      }
    });
  }, [selected]);

  return {
    collection: $collection,

    isOpened,
    selected,
    toggleOpened: () => {
      setOpened(!isOpened);
    },
    setOpened: () => {
      const firstSelected = selectedIndex.indexOf(true);

      setOpened(true);
      setFocusedIndex(firstSelected > 0 ? firstSelected : 0);
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
      if (!multiple) {
        if (index !== undefined) {
          setSelectedIndex(
            selectedIndex.map((el, i) => (i === index ? !el : false))
          );
          setFocusedIndex(index);
        } else {
          setSelectedIndex(
            selectedIndex.map((el, i) => (i === focusedIndex ? !el : false))
          );
        }

        const target = $collection[index ?? focusedIndex];

        setSelected([
          {
            value: target.value,
            option: target.children,
          },
        ]);

        setOpened(false);

        return;
      }

      if (index !== undefined) {
        setSelectedIndex(
          selectedIndex.map((el, i) => (i === index ? !el : el))
        );
        setFocusedIndex(index);
      } else {
        setSelectedIndex(
          selectedIndex.map((el, i) => (i === focusedIndex ? !el : el))
        );
      }

      const target = $collection[index ?? focusedIndex];

      // If `target.value` in selected array -> remove it
      // Otherwise -> add to the selected array
      setSelected(
        selected.some(({ value }) => value === target.value)
          ? selected.filter(({ value }) => value !== target.value)
          : [...selected, { value: target.value, option: target.children }]
      );
    },
    isFocused: (index: number) => {
      return focusedIndex === index;
    },
    isSelected: (index: number) => {
      return selectedIndex[index];
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
