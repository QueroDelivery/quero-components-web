# quero-components-web

> Biblioteca de components wev do Quero Delivery

[![NPM](https://img.shields.io/npm/v/quero-components-web.svg)](https://www.npmjs.com/package/quero-components-web) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save https://github.com/QueroDelivery/quero-components-web
```

## Usage

```tsx
import React, { Component } from 'react'

import { MyComponent } from 'quero-components-web'
import 'quero-components-web/dist/index.css'
import { registerLocale } from 'react-datepicker'
import br from 'date-fns/locale/pt-BR'
registerLocale('pt-BR', br)

class Example extends Component {
  render() {
    return <MyComponent />
  }
}
```

## Dev
```bash
npm run start # runs rollup with watch flag
```
```bash
cd example
npm run storybook # runs create-react-app dev server
```

## License

MIT © [QueroDelivery](https://github.com/QueroDelivery)
