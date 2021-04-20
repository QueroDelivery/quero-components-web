import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";
import { TextAreaForm } from "quero-components-web";
import { TextAreaFormProps } from "./Interface";

import "quero-components-web/dist/index.css";

export default {
    title: "Components/TextAreaForm",
    parameters: {
      component: TextAreaForm,
      componentSubtitle: "É necessário utilizar o React Hook Form. (https://react-hook-form.com/)", 
    },
    argTypes: {
      label: {
        control: "text",
        description: "Título do TextArea",
        table: {
          type: {
            summary: "string",
          },
        },
      },
      name: {
        control: "text", 
        description: "Descrição do TextArea",
        table: {
          type: {
            summary: "required | string",
          },
        },
      },
      lengthInfo: {
        control: "boolean",
        description: "Quantidade de caracteres dentro do TextArea",
        table: {
          type: {
            summary: "boolean | number",
          },
        },
      },
      required: {
        control: "boolean",
        description: "Informando TextArea for obrigatório",
        table: {
          type: {
            summary: "boolean",
          },
        },
      },
      validate: {
        control: "text",
        description: "Função que valida o TextArea",
        table: {
          type: {
            summary: "required | function",
          },
        },
      },
      errors: {
        control: "string",
        description: "Mensagem de erro de acordo com a função validate",
        table: {
          type: {
            summary: "required | string or object",
          },
        },
      },
      register: {
        control: "text",
        description: "Faz o registro no formulário",
        table: {
          type: {
            summary: "required | function",
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

const Template: Story<TextAreaFormProps> = (args) => {
    return <TextAreaForm {...args} />;
};

export const Default = Template.bind({});
Default.args = {
    label: "teste",
    name: "",
    lengthInfo: true,
    required: false,
    validate: () => {},
    errors: "",
    register: null,
    minimum: 1,
    limit: 100,
};
