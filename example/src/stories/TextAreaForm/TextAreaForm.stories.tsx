import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import {
  TextAreaForm,
  TextAreaFormProps,
} from '@quero-delivery/quero-components-web';

import '@quero-delivery/quero-components-web/dist/index.css';

export default {
  title: 'Components/TextAreaForm',
  component: TextAreaForm,
  parameters: {
    docs: {
      description: {
        component: `É necessário utilizar a lib [React Hook Form](https://react-hook-form.com/).`,
      },
    },
  },
  argTypes: {
    label: {
      control: 'text',
      description: 'Título do TextArea',
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    name: {
      control: 'string',
      description: 'Descrição do TextArea',
      table: {
        defaultValue: {
          summary: 'Fica registrado no HTML',
        },
        type: {
          summary: 'number | string',
        },
      },
    },
    lengthInfo: {
      control: 'boolean',
      description:
        'Deseja ter a informação de quantidade de quantos caracteres estão dentro do TextAreaForm?',
      table: {
        type: {
          summary: 'boolean | number',
        },
      },
    },
    required: {
      control: 'boolean',
      description: 'O TextArea é obrigatório?',
      table: {
        type: {
          summary: 'boolean',
        },
      },
    },
    validate: {
      control: 'function',
      description: 'Função que valida o TextArea',
      table: {
        type: {
          summary: 'required | function',
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
      control: 'function',
      description: 'Faz o registro no formulário',
      table: {
        type: {
          summary: 'required | function',
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

const Template: Story<TextAreaFormProps> = args => {
  return <TextAreaForm {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  label: 'Título do TextArea',
  name: '',
  lengthInfo: true,
  required: false,
  validate: () => {},
  errors: '',
  register: () => {},
  minimum: 1,
  limit: 100,
};

Default.parameters = {
  docs: {
    source: {
      code: `<TextAreaForm
        label="Título do TextArea"
        name="example"
        lengthInfo={true}
        required={register}
        validate={() => {}}
        errors={errors.example}
        register={register}
        minimum={1}
        limit={100}
     />`,
    },
  },
};
