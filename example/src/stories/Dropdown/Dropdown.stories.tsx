import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Dropdown, DropdownProps } from '@quero-delivery/quero-components-web';

import '@quero-delivery/quero-components-web/dist/esm/index.css';

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
  parameters: {
    docs: {
      description: {
        component: `É necessário utilizar a lib [Semantic UI React](https://react.semantic-ui.com).`,
      },
    },
  },
  argTypes: {
    label: {
      control: 'text',
      description: 'Título do Dropdown',
      defaultValue: 'Título do Dropdown',
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    placeholder: {
      control: 'text',
      description: 'Texto do Dropdown',
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    options: {
      control: 'array',
      description: 'Opções do Dropdown',
      table: {
        defaultValue: {
          summary: 'Opções',
          detail: 'Key | Chave | Value ',
        },
        type: {
          summary: 'OptionsProp[]',
        },
      },
    },
    errorMessage: {
      control: 'text',
      description: 'Mensagem de erro',
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    search: {
      control: 'boolean',
      description: 'Deseja permitir que pesquise dentro do Dropdown',
      table: {
        type: {
          summary: 'boolean',
        },
      },
    },
    clearable: {
      control: 'boolean',
      description: 'Deseja remover a seleção dentro do Dropdown?',
      table: {
        type: {
          summary: 'boolean',
        },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'O Dropdown esta suspenso/desabilitado?',
      table: {
        type: {
          summary: 'boolean',
        },
      },
    },
    loading: {
      control: 'boolean',
      description: 'Esta carregando?',
      table: {
        type: {
          summary: 'boolean',
        },
      },
    },
    multiple: {
      control: 'boolean',
      description: 'Deseja permitir varias seleções dentro do Dropdown?',
      table: {
        type: {
          summary: 'boolean',
        },
      },
    },
    brand: {
      control: 'boolean',
      description: 'Deseja o tema da marca no Dropdown?',
      table: {
        defaultValue: {
          summary: 'Tem como padrão a cor tema da QueroDelivery',
        },
        type: {
          summary: 'boolean',
        },
      },
    },
    onChange: {
      action: 'changed',
      description: 'Função para manipular o Dropdown',
      table: {
        type: {
          summary: 'function',
        },
      },
    },
    textAlign: {
      control: 'string',
      description: 'Alinhamento do texto',
      table: {
        type: {
          summary: 'center',
        },
      },
    },
    line: {
      control: 'boolean',
      description: 'Deseja o estilo do Dropdown em linha?',
      table: {
        type: {
          summary: 'boolean',
        },
      },
    },
    colorLabel: {
      control: 'color',
      description: 'Cor do título do Dropdown',
      table: {
        type: {
          summary: 'string',
        },
      },
    },
  },
} as Meta;

const Template: Story<DropdownProps> = args => <Dropdown {...args} />;

const options = [
  { key: '1', text: '1', value: '1' },
  { key: '2', text: '2', value: '2' },
  { key: '3', text: '3', value: '3' },
  { key: '4', text: '4', value: '4' },
  { key: '5', text: '5', value: '5' },
  { key: '6', text: '6', value: '6' },
  { key: '7', text: '7', value: '7' },
  { key: 'teste', text: 'teste', value: 'teste' },
];

export const Default = Template.bind({});
Default.args = {
  options: options,
  placeholder: 'Selecione',
  onChange: (_ev, data) => {
    console.log(data.value);
  },
};

Default.parameters = {
  docs: {
    source: {
      code: `
<Dropdown
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
  placeholder="Selecione"
  onChange={() => {}}
/>`,
    },
  },
};

export const Label = Template.bind({});
Label.args = {
  options: options,
  placeholder: 'Selecione',
  label: 'Título do Dropdown',
};

Label.parameters = {
  docs: {
    source: {
      code: `
<Dropdown
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
  placeholder="Selecione"
  label="Título do Dropdown"
/>`,
    },
  },
};

export const Erro = Template.bind({});
Erro.args = {
  options: options,
  placeholder: 'Selecione',
  errorMessage: 'Erro',
};

Erro.parameters = {
  docs: {
    source: {
      code: `
<Dropdown
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
  placeholder="Selecione"
  errorMessage="Erro"
/>`,
    },
  },
};

export const Search = Template.bind({});
Search.args = {
  options: options,
  placeholder: 'Selecione',
  search: true,
};

Search.parameters = {
  docs: {
    source: {
      code: `
<Dropdown
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
  placeholder="Selecione"
  search
/>`,
    },
  },
};

export const Clearable = Template.bind({});
Clearable.args = {
  options: options,
  placeholder: 'Selecione',
  clearable: true,
};

Clearable.parameters = {
  docs: {
    source: {
      code: `
<Dropdown
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
  placeholder="Selecione"
  clearable
/>`,
    },
  },
};

export const Disabled = Template.bind({});
Disabled.args = {
  options: options,
  placeholder: 'Selecione',
  disabled: true,
};

Disabled.parameters = {
  docs: {
    source: {
      code: `
<Dropdown
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
  placeholder="Selecione"
  disabled
/>`,
    },
  },
};

export const Loading = Template.bind({});
Loading.args = {
  options: options,
  placeholder: 'Selecione',
  loading: true,
};

Loading.parameters = {
  docs: {
    source: {
      code: `
<Dropdown
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
  placeholder="Selecione"
  loading
/>`,
    },
  },
};

export const Multiple = Template.bind({});
Multiple.args = {
  options: options,
  placeholder: 'Selecione',
  multiple: true,
};

Multiple.parameters = {
  docs: {
    source: {
      code: `
<Dropdown
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
  placeholder="Selecione"
  multiple
/>`,
    },
  },
};

export const Brand = Template.bind({});
Brand.args = {
  options: options,
  placeholder: 'Selecione',
  brand: true,
};

Brand.parameters = {
  docs: {
    source: {
      code: `
<Dropdown
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
  placeholder="Selecione"
  brand
/>`,
    },
  },
};

export const TextAlign = Template.bind({});
TextAlign.args = {
  options: options,
  placeholder: 'Selecione',
  textAlign: 'center',
};

TextAlign.parameters = {
  docs: {
    source: {
      code: `
<Dropdown
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
  placeholder="Selecione"
  textAlign="center"
/>`,
    },
  },
};

export const Line = Template.bind({});
Line.args = {
  options: options,
  placeholder: 'Selecione',
  line: true,
  label: 'Título do Dropdown',
  errorMessage: 'Erro',
};

Line.parameters = {
  docs: {
    source: {
      code: `
<Dropdown
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
  placeholder="Selecione"
  line
  label="Título do Dropdown"
  errorMessage="Erro"
/>`,
    },
  },
};
