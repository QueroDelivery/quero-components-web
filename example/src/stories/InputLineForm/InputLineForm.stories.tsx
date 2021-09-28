import { Story, Meta } from '@storybook/react/types-6-0';
import { InputLineForm } from '@quero-delivery/quero-components-web';
import { InputFormProps } from './Interface';

import '@quero-delivery/quero-components-web/dist/index.css';

export default {
  title: 'Components/InputLineForm',
  component: InputLineForm,
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
      description: 'Título do InputLineForm',
      defaultValue: 'Título',
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    name: {
      control: 'string',
      description: 'Descrição do InputLineForm',
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
      description: 'O InputLineForm é obrigatório?',
      table: {
        type: {
          summary: 'boolean',
        },
      },
    },
    validate: {
      control: 'string',
      description: 'Função que valida o InputLineForm',
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
      description: 'Faz o registro do InputLineForm',
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
  return <InputLineForm {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  label: 'Título do InputLineForm',
  name: 'Descrição do InputLineForm',
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
      code: `<InputLineForm
      label="Título do InputLineForm"
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
