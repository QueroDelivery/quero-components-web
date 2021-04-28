import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";
import { DropdownForm } from "quero-components-web";
import { DropdownFormProps } from "./Interface";

import "quero-components-web/dist/index.css";

export default {
    title: "Components/DropdownForm",
    component: DropdownForm,
    parameters: {
        docs: {
          description: {
                component: `É necessário utilizar as lib [Semantic UI React](https://semantic-ui.com) e [React Hook Form](https://react-hook-form.com/).`
              }
    }
    },
    argTypes: {
      label: {
        control: "text",
        description: "Título do DropdownForm",
        defaultValue: "Título",
        table: {
          type: {
            summary: "string",
          },
        },
      },
      name: {
        control: "text", 
        description: "Descrição do DropdownForm",
        defaultValue: "Descrição do DropdownForm",
        table: {
          type: {
            summary: "required | string",
          },
        },
      },
      options: {
        control: "array", 
        description: "Opções do Dropdown",
        table: {
          defaultValue: {
            summary: "Opções",
            detail: "Key | Chave | Value ",
          },
          type: {
            summary: "OptionsProp[]",
          },
        },
      },
      required: {
        control: "boolean",
        description: "O DropdownForm é obrigatório?",
        table: {
          type: {
            summary: "boolean",
          },
        },
      },
      errors: {
        control: "text", 
        description: "Mensagem de erro de acordo com a função validate",
        table: {
          type: {
            summary: "required | string", 
          },
        },
      },
      validate: {
        control: "string",
        description: "Função que valida o DropdownForm",
        table: {
          type: {
            summary: "function",
          },
        },
      },
      register: {
        control: "string",
        description: "Faz o registro do DropdownForm",
        table: {
          type: {
            summary: "required | function",
          },
        },
      },
      setValue: {
        control: "string",
        description: "Função para alterar o valor do DropdownForm",
        table: {
          type: {
            summary: "required | function",
          },
        },
      },
      clearError: {
        control: "string",
        description: "Função para limpar o erro do DropdownForm",
        table: {
          type: {
            summary: "required | function",
          },
        },
      },
      value: {
        control: "string",
        description: "Para criar um componente controlado",
        table: {
          type: {
            summary: "function",
          },
        },
      },
      line: {
        control: "boolean",
        description: "Deseja o estilo do DropdownForm em linha?",
        table: {
          type: {
            summary: "boolean",
          },
        },
      },
    } 
} as Meta;

const Template: Story<DropdownFormProps> = (args) => {
    return <DropdownForm {...args} />;
};

const options = [
    { key: "1", text: "1", value: "1b" },
    { key: "2", text: "2", value: "2" },
    { key: "3", text: "3", value: "3" },
    { key: "4", text: "4", value: "4" },
    { key: "5", text: "5", value: "5" },
    { key: "6", text: "6", value: "6" },
    { key: "7", text: "7", value: "7" },
    { key: "teste", text: "teste", value: "teste" },
];

export const Default = Template.bind({});
Default.args = {
    name: "Descrição do DropdownForm",
    errors: "Error",
    register: null,
    setValue: () => {},
    validate: () => {},
    required: false,
    clearError: () => {},
    options: options,
};

Default.parameters = {
  docs: {
    source:{
      code:`<DropdownForm 
      name="example"
      errors={errors.example}
      register={register}
      setValue={setValue}
      validate={() => {}}
      required={false}
      clearError={clearErrors}
      options={[{
        key: "1",
        text: "1",
        value: "1"
      },
      {
        key: "2",
        text: "2",
        value: "2"
      }]}
    />`
    }
  }
};