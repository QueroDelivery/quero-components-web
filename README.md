<p align="center">
   <img src=".github/querolabs.png" alt="querolabs" width="180"/>
   <h2 align="center">
    Quero Components Web
    </h2>
</p>

<p align="center">
  Biblioteca de components web do Quero Delivery
</p>

<p align="center">
 <img alt="Repository size" src="https://img.shields.io/github/repo-size/querodelivery/quero-components-web?color=4e5acf">

  <a aria-label="Last Commit" href="https://github.com/querodelivery/quero-components-web/commits/master">
    <img alt="Last commit on GitHub" src="https://img.shields.io/github/last-commit/querodelivery/quero-components-web?color=4e5acf">
  <img alt="License" src="https://img.shields.io/badge/license-MIT-4e5acf">
  </a>
</p>
<p align="center">
  <a target="_blank" href="https://www.typescriptlang.org">
    <img src="https://img.shields.io/static/v1?color=blue&label=Typescript&message=TS&?style=plastic&logo=Typescript">
  </a>
  <a target="_blank" href="https://reactjs.org/">
    <img alt="ReactJS" src="https://img.shields.io/static/v1?color=blue&label=React&message=JS&?style=plastic&logo=React">
  </a>
  <a target="_blank" href="https://storybook.js.org/docs/react/get-started/introduction">
    <img src="https://img.shields.io/static/v1?color=red&label=Storybook&message=SB&?style=plastic&logo=Storybook">
  </a>
</p>


## 👨‍💻 Instalação

```bash
# Utilizando npm
npm install https://github.com/QueroDelivery/quero-components-web

# Utilizando yarn
yarn add https://github.com/QueroDelivery/quero-components-web
```


## 🏃 Como usar

```tsx
import React, { Component } from "react";

import { MyComponent } from "quero-components-web";
import "quero-components-web/dist/index.css";
import { registerLocale } from "react-datepicker";
import br from "date-fns/locale/pt-BR";
registerLocale("pt-BR", br);

function Example() {
    return <MyComponent />;
}
```

## 📝 Documentação

Para verificar a documentação

```bash
npm run start ou yarn start
```

```bash
cd example
npm run storybook ou yarn storybook

## A documentação será aberta na porta:6006 - acesse http://localhost:6006
```

## 🤔 Como contribuir para o projeto

- Faça um **fork** do projeto;
- Salve as alterações e crie uma mensagem de commit contando o que você fez.
- Envie as suas alterações.
- Realize um pull request para que seja analisado.

> Caso tenha alguma dúvida confira este [guia de como contribuir no GitHub](https://github.com/firstcontributions/first-contributions).
