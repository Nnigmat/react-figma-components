import React from 'react';
import cn from 'classnames';

import { IconProps } from '../index';

const Icon: React.FunctionComponent<IconProps> = ({
  className,
  name,
  color,
  text,
  isSelected,
  disabled,
  onClick,
}) => {
  const iconClass = text ? '' : `icon--${name}`;
  const colorClass = !disabled && color ? `icon--${color}` : 'icon--black-3';
  const selectedClass = isSelected ? 'icon-button--selected' : '';

  if (onClick) {
    return (
      <button
        style={{
          padding: 0,
          cursor: 'default',
        }}
        disabled={disabled}
        onClick={onClick}
        className={cn('icon-button', selectedClass, className)}
      >
        <div className={cn('icon', iconClass)}>{text}</div>
      </button>
    );
  } else {
    return (
      <div className={cn('icon', iconClass, colorClass, className)}>{text}</div>
    );
  }
};

export default Icon;
