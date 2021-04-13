import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";
import { TextAreaForm } from "quero-components-web";
import { TextAreaFormProps } from "./Interface";

import "quero-components-web/dist/index.css";

export default {
    title: "Example/TextAreaForm",
    component: TextAreaForm,
    argTypes: {
      label: {
        control: "text",
        description: "Título do input",
        table: {
          type: {
            summary: "string",
          },
        },
      },
      name: {
        control: "text", 
        description: "Descrição do input",
        table: {
          type: {
            summary: "required | string",
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
      validate: {
        control: "text",
        description: "Função que valida o input",
        table: {
          type: {
            summary: "required | function",
          },
        },
      },
      required: {
        control: "boolean",
        description: "Informando input for obrigatório",
        table: {
          type: {
            summary: "boolean",
          },
        },
      },
      limit: {
        control: "number",
        description: "Limite de caracteres",
        table: {
          type: {
            summary: "number",
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
    }
} as Meta;

const Template: Story<TextAreaFormProps> = (args) => {
    return <TextAreaForm {...args} />;
};

export const Default = Template.bind({});
Default.args = {
    label: "teste",
    name: "",
    errors: "",
    register: null,
    validate: () => {},
    required: false,

    limit: 100,
    minimum: 1,
};
