# react-figma-components

[![npm](https://img.shields.io/npm/v/react-figma-components?logo=npm&cacheSeconds=1800)](https://www.npmjs.com/package/react-figma-components)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/react-figma-components?cacheSeconds=1800)](https://www.npmjs.com/package/react-figma-components)
[![npm](https://img.shields.io/npm/dt/react-figma-components?cacheSeconds=1800)](https://www.npmjs.com/package/react-figma-components)

React components of Figma design system based on [thomas-lowry/figma-components](https://github.com/thomas-lowry/figma-components) and [alexandrtovmach/react-figma-plugin-ds](https://github.com/alexandrtovmach/react-figma-plugin-ds), and implements [UI2: Figma Design System](https://www.figma.com/community/file/768283795272784978).

The library provides a11y components. It uses [web-platform](https://github.com/bem/web-platform) as the base for all components.

## Installation

Currently package has development name `web-platform-alpha` and will change in the future.

```sh
npm i -PE react-figma-components
```

## Usage

All components available from root public API. More examples you can find in [storybook](nnigmat.github.io/react-figma-components).

```tsx
import { Button } from 'react-figma-components';

export const Page = (props) => {
  return <Button view="primary">Submit</Button>;
};
```

[npm]: https://www.npmjs.com/package/react-figma-components
[storybook]: https://nnigmat.github.io/react-figma-components

## License

This project develop under [MPL-2.0](./LICENSE) license.
