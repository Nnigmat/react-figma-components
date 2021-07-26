import { forwardRef, useRef, FC } from 'react';
import cn from 'classnames';
import { useHover, useForkRef, UseHoverProps } from 'web-platform-alpha';

import { Icon } from '../Icon';
import { useMenu, useMenuItem, MenuProps } from './hooks';

export const MenuBase = forwardRef<
  HTMLElement,
  MenuProps & { visible: boolean }
>((props, ref) => {
  const { state } = props;
  const menuRef = useRef(null);
  const { menuProps } = useMenu(props, state, ref);
  const forkedRef = useForkRef(menuRef, ref);

  return (
    <ul
      {...menuProps}
      ref={forkedRef}
      className={cn('select-menu__menu', {
        'select-menu__button--active': props.visible,
        'select-menu__menu--active': props.visible,
      })}
    >
      {state.collection?.map((item: any, index: number) =>
        // Когда у элемента есть `value`, то это кликабельный элемент селекта
        // Когда его нет, то это разделитель
        item.value ? (
          <MenuItem {...item} state={state} />
        ) : (
          <MenuDivider key={index}>{item.children}</MenuDivider>
        )
      )}
    </ul>
  );
});

export type MenuItemProps = UseHoverProps & {
  state: any;
  divider: boolean;
};

const MenuItem: FC<MenuItemProps> = (props) => {
  const { children, state, divider } = props;

  if (divider) {
    <span className="select-menu__divider-label">{divider}</span>;
  }

  const ref = useRef(null);
  const { itemProps, isFocused, isSelected } = useMenuItem(props, state, ref);
  const { isHovered, hoverProps } = useHover(props);

  return (
    <li
      {...itemProps}
      {...hoverProps}
      ref={ref}
      data-selected={isSelected}
      data-focused={isFocused}
      data-hovered={isHovered}
      className="select-menu__item"
    >
      {isSelected && <Icon name="check" color="white" />}
      {children}
    </li>
  );
};

const MenuDivider: FC<{ children: string }> = ({ children }) => (
  <>
    {children && <span className="select-menu__divider-label">{children}</span>}
    <div className="select-menu__divider" />
  </>
);
