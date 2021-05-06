<p align="center">
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
npm install @quero-delivery/quero-components-web

# Utilizando yarn
yarn add @quero-delivery/quero-components-web
```


## 🏃 Como usar

```tsx
import React, { Component } from "react";

import { MyComponent } from "quero-components-web";
import "@quero-delivery/quero-components-web/dist/index.css";
import { registerLocale } from "react-datepicker";
import br from "date-fns/locale/pt-BR";
registerLocale("pt-BR", br);

function Example() {
    return <MyComponent />;
}
```

## :bar_chart: Usando gráficos

Os gráficos são utilizados a partir da biblioteca [Victory](https://formidable.com/open-source/victory/docs)

- Instalação

```bash
# Utilizando npm
npm install victory

# Utilizando yarn
yarn add victory
```
- Exemplo de uso

```tsx
import React from 'react';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme, VictoryStack } from 'victory';

const data2012 = [
  {quarter: 1, earnings: 13000},
  {quarter: 2, earnings: 16500},
  {quarter: 3, earnings: 14250},
  {quarter: 4, earnings: 19000}
];

const data2013 = [
  {quarter: 1, earnings: 15000},
  {quarter: 2, earnings: 12500},
  {quarter: 3, earnings: 19500},
  {quarter: 4, earnings: 13000}
];

const data2014 = [
  {quarter: 1, earnings: 11500},
  {quarter: 2, earnings: 13250},
  {quarter: 3, earnings: 20000},
  {quarter: 4, earnings: 15500}
];

const data2015 = [
  {quarter: 1, earnings: 18000},
  {quarter: 2, earnings: 13250},
  {quarter: 3, earnings: 15000},
  {quarter: 4, earnings: 12000}
];

function Example(){
    return (
      <div>
        <h1>Victory Tutorial</h1>
        <VictoryChart
          domainPadding={10}
          theme={VictoryTheme.material}
        >
          <VictoryAxis
            tickValues={["Quarter 1", "Quarter 2", "Quarter 3", "Quarter 4"]}
          />
          <VictoryAxis
            dependentAxis
            tickFormat={(x) => (`$${x / 1000}k`)}
          />
          <VictoryStack
            colorScale={"warm"}
          >
            <VictoryBar
              data={data2012}
              x={"quarter"}
              y={"earnings"}
            />
            <VictoryBar
              data={data2013}
              x={"quarter"}
              y={"earnings"}
            />
            <VictoryBar
              data={data2014}
              x={"quarter"}
              y={"earnings"}
            />
            <VictoryBar
              data={data2015}
              x={"quarter"}
              y={"earnings"}
            />
          </VictoryStack>
        </VictoryChart>
      </div>
    );
}
```
- Cores utilizadas no padrão da biblioteca

```css
brand: #9b4dee;
brandPink: #e0457b;
brandYellow: #f7ea48;
brandDark: #6700a2;
brandLight: #d8b8f9;
```


> Confira a documentação da biblioteca para mais detalhes de uso [Documentação victory](https://formidable.com/open-source/victory/docs).


## 📝 Documentação

Para verificar a documentação click [aqui](https://querodelivery.github.io/quero-components-web/)

- Verificar em desenvolvimento
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
