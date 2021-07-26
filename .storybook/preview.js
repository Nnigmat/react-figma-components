import React from 'react';
import '../src/globals.css';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: { 
    default: 'figma',
    values: [
      {
        name: 'figma',
        value: 'rgba(0,0,0,0.03)'
      }
    ]
  }
}

export const decorators = [
  (Story) => (
    <div style={{ margin: '30px'}}>
      <Story />
    </div>
  )
]
