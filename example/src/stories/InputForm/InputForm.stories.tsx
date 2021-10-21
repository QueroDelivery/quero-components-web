import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import {
  InputForm,
  InputFormProps,
} from '@quero-delivery/quero-components-web';

import '@quero-delivery/quero-components-web/dist/index.css';

export default {
  title: 'Components/InputForm',
  component: InputForm,
  parameters: {
    docs: {
      description: {
        component: `É necessário utilizar o [React Hook Form](https://react-hook-form.com/).`,
      },
    },
  },
  argTypes: {
    label: {
      control: 'text',
      description: 'Título do InputForm',
      defaultValue: 'Título',
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    name: {
      control: 'string',
      description: 'Descrição do InputForm',
      table: {
        defaultValue: {
          summary: 'Fica registrado no HTML',
        },
        type: {
          summary: 'number | string',
        },
      },
    },
    required: {
      control: 'boolean',
      description: 'O InputForm é obrigatório?',
      table: {
        type: {
          summary: 'boolean',
        },
      },
    },
    validate: {
      control: 'string',
      description: 'Função que valida o InputForm',
      table: {
        type: {
          summary: 'function',
        },
      },
    },
    errors: {
      control: 'string',
      description: 'Mensagem de erro de acordo com a função validate',
      table: {
        type: {
          summary: 'required | string | object',
        },
      },
    },
    register: {
      control: 'string',
      description: 'Faz o registro do InputForm',
      table: {
        type: {
          summary: 'required | function',
        },
      },
    },
    values: {
      control: 'string',
      description: 'Para criar um componente controlado',
      table: {
        type: {
          summary: 'function',
        },
      },
    },
    minimum: {
      control: 'number',
      description: 'Mínimo de caracteres',
      table: {
        type: {
          summary: 'number',
        },
      },
    },
    limit: {
      control: 'number',
      description: 'Máximo de caracteres',
      table: {
        type: {
          summary: 'number',
        },
      },
    },
  },
} as Meta;

const Template: Story<InputFormProps> = args => {
  return <InputForm {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  label: 'Título do InputForm',
  name: 'Descrição do InputForm',
  errors: '',
  register: null,
  validate: () => {},
  required: false,
  values: () => {},
  minimum: 1,
  limit: 100,
};

Default.parameters = {
  docs: {
    source: {
      code: `<InputForm
      label="Título do InputForm"
      name="example"
      errors={errors.example}
      register={register}
      validate={() => {}}
      required={false}
      values={getValues}
      minimum={1}
      limit={100}
    />`,
    },
  },
};
