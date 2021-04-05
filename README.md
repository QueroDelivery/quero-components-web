# quero-components-web

> Made with create-react-library

[![NPM](https://img.shields.io/npm/v/quero-components-web.svg)](https://www.npmjs.com/package/quero-components-web) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save FONTAWESOME_NPM_AUTH_TOKEN=${FONTAWESOME_NPM_AUTH_TOKEN} https://github.com/QueroDelivery/quero-components-web
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
npm start # runs rollup with watch flag
```
```bash
cd example
npm storybook # runs create-react-app dev server
```

## License

MIT © [QueroDelivery](https://github.com/QueroDelivery)
