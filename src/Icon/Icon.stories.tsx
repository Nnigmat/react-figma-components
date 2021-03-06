import React from 'react';
import { Icon } from '.';
import { IconType } from './Icon.d';
import { Story } from '@storybook/react/types-6-0';

const icons: IconType[] = [
  'adjust',
  'alert',
  'angle',
  'arrow-left-right',
  'up-down',
  'auto-layout-horizontal',
  'auto-layout-vertical',
  'back',
  'blend-empty',
  'blend',
  'break',
  'caret-down',
  'caret-left',
  'caret-right',
  'caret-up',
  'check',
  'close',
  'component',
  'corner-radius',
  'corners',
  'distribute-horizontal-spacing',
  'distribute-vertical-spacing',
  'draft',
  'effects',
  'ellipses',
  'eyedropper',
  'forward',
  'frame',
  'group',
  'hidden',
  'horizontal-padding',
  'hyperlink',
  'image',
  'instance',
  'key',
  'layout-align-bottom',
  'align-horizontal-centers',
  'align-left',
  'align-right',
  'align-top',
  'align-vertical-centers',
  'layout-grid-columns',
  'layout-grid-rows',
  'layout-grid-uniform',
  'library',
  'link-broken',
  'link-connected',
  'list-detailed',
  'list-tile',
  'list',
  'lock-off',
  'lock-on',
  'minus',
  'play',
  'plus',
  'random',
  'recent',
  'resize-to-fit',
  'resolve-filled',
  'resolve',
  'reverse',
  'search-large',
  'search',
  'settings',
  'share',
  'smiley',
  'sort-alpha-asc',
  'sort-alpha-dsc',
  'sort-top-bottom',
  'spacing',
  'spinner',
  'star-off',
  'star-on',
  'stroke-weight',
  'styles',
  'swap',
  'theme',
  'tidy-up-grid',
  'tidy-up-list-horizontal',
  'tidy-up-list-vertical',
  'timer',
  'trash',
  'vertical-padding',
  'visible',
  'warning-large',
  'warning',
];

const colors = [
  'blue',
  'purple',
  'purple4',
  'hot-pink',
  'green',
  'red',
  'yellow',
  'black',
  'black8',
  'black3',
  'white',
  'white8',
  'white4',
];

export default {
  title: 'Components/Icon',
  component: Icon,
  argTypes: {
    name: {
      options: icons,
      control: { type: 'select' },
      defaultValue: 'library',
    },
    color: {
      options: colors,
      control: { type: 'select' },
      defaultValue: 'black3',
    },
  },
};

export const Base: Story = ({ ...args }) => {
  // @ts-ignore
  return <Icon {...args} />;
};

export const All: Story = ({ ...args }) => {
  return (
    <>
      <style>
        {`
        .Icons {
          display: flex;
          flex-wrap: wrap;
        }

        .IconWrapper {
          flex: 0 0 50px;
        }

        .IconWrapper:hover .Tooltip {
          display:block;
        }
      
        .Tooltip {
          display: none;
          position: absolute;
          z-index: 1000;
          background: #0e1111;
          padding: 6px;
          border-radius: 2px;
          color: white;
        }
        `}
      </style>
      <div className="Icons">
        {icons.map((name) => (
          <div className="IconWrapper">
            <Icon {...args} name={name} />
            <span className="Tooltip">{name}</span>
          </div>
        ))}
      </div>
    </>
  );
};
