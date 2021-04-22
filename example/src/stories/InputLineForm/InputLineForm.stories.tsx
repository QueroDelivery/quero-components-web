import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";
import { InputLineForm } from "quero-components-web";
import { InputFormProps } from "./Interface";

import "quero-components-web/dist/index.css";

export default {
    title: "Components/InputLineForm",
    parameters: {
      component: InputLineForm,
      componentSubtitle: "É necessário utilizar o React Hook Form. (https://react-hook-form.com/)", 
    },
    argTypes: {
      label: {
        control: "text",
        description: "Título do InputLineForm",
        defaultValue: "Título",
        table: {
          type: {
            summary: "string",
          },
        },
      },
      name: {
        control: "text", 
        description: "Descrição do InputLineForm",
        table: {
          type: {
            summary: "required | string",
          },
        },
      },
      required: {
        control: "boolean",
        description: "O InputLineForm é obrigatório?",
        table: {
          type: {
            summary: "boolean",
          },
        },
      },
      validate: {
        control: "text",
        description: "Função que valida o InputLineForm",
        table: {
          type: {
            summary: "function",
          },
        },
      },
      errors: {
        control: "string",
        description: "Mensagem de erro de acordo com a função validate",
        table: {
          type: {
            summary: "required | string | object", //ver se tem algum 0r 
          },
        },
      },
      register: {
        control: "string",
        description: "Faz o registro do InputLineForm",
        table: {
          type: {
            summary: "required | function",
          },
        },
      },
      values: {
        control: "string",
        description: "Para criar um componente controlado",
        table: {
          type: {
            summary: "function",
          },
        },
      },
      minimum: {
        control: "number",
        description: "Mínimo de caracteres",
        table: {
          type: {
            summary: "number",
          },
        },
      },
      limit: {
        control: "number",
        description: "Máximo de caracteres",
        table: {
          type: {
            summary: "number",
          },
        },
      },
    }
} as Meta;

const Template: Story<InputFormProps> = (args) => {
    return <InputLineForm {...args} />;
};

export const Default = Template.bind({});
Default.args = {
    label: "Titulo do InputLineForm",
    name: "Descrição do InputLineForm",
    errors: "",
    register: null,
    validate: () => {},
    required: false,
    values: () => {},
    limit: 100,
    minimum: 1,
};
