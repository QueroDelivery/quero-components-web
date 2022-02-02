import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Input, InputProps } from '@quero-delivery/quero-components-web';
import '@quero-delivery/quero-components-web/dist/index.css';

export default {
  title: 'Components/Input',
  component: Input,
  parameters: {
    docs: {
      description: {
        component:
          'Input padronizado do HTML, recebendo todas as suas propriedades',
      },
    },
  },
  argTypes: {
    label: {
      control: 'text',
      description: 'Título do Input',
      defaultValue: 'Título do Input',
      table: {
        type: {
          summary: 'string',
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
    width: {
      control: 'text',
      description: 'Largura do Input',
      defaultValue: '100%',
      table: {
        defaultValue: {
          summary: 'Opções',
          detail: 'String | Number (definido como px)',
        },
        type: {
          summary: 'string | number',
        },
      },
    },
    inputRef: {
      control: 'string',
      description: 'Referencia do Input',
      table: {
        type: {
          summary: 'Ref',
        },
      },
    },
    action: {
      control: 'object',
      description: 'Ação do Input',
      table: {
        defaultValue: {
          summary: 'Ação',
          detail:
            'Podendo adicionar um icone a esquerda ou a direita recebendo o evento de click.',
        },
        type: {
          summary: 'Object',
        },
      },
    },
    onChange: {
      action: 'changed',
      description: 'Função para manipular o Input',
      table: {
        type: {
          summary: 'function',
        },
      },
    },
    icon: {
      control: 'object',
      description: 'Icone do Input',
      table: {
        type: {
          summary: 'IconDefinition',
        },
      },
    },
    iconPosition: {
      control: {
        type: 'inline-radio',
        options: ['left', 'right'],
      },
      description: 'Posição do icone no Input',
      table: {
        type: {
          summary: 'left | right',
        },
      },
    },
    textColor: {
      control: 'color',
      description: 'Cor do Input',
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    labelStyle: {
      control: 'object',
      description: 'Estilização do label',
      table: {
        type: {
          summary: 'React.CSSProperties',
        },
      },
    },
  },
} as Meta;

const Template: Story<InputProps> = args => {
  return (
    <>
      <Input {...args} />
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  label: 'Título do Input',
  onChange: action('mudar valor'),
};

Default.parameters = {
  docs: {
    source: {
      code: `
<Input
  label="Título do Input"
  onChange={() => {}}
/>`,
    },
  },
};

export const ErrorMessage = Template.bind({});
ErrorMessage.args = {
  label: 'Título do Input',
  placeholder: 'escreva',
  errorMessage: 'errado',
  onChange: action('mudar valor'),
  action: undefined,
};

ErrorMessage.parameters = {
  docs: {
    source: {
      code: `
<Input
  label="Título do Input"
  placeholder="escreva"
  errorMessage="errado"
  onChange={() => {}}
/>`,
    },
  },
};

export const Width = Template.bind({});
Width.args = {
  label: 'Título do Input',
  placeholder: 'escreva',
  width: '50%',
  onChange: action('mudar valor'),
  action: undefined,
};

Width.parameters = {
  docs: {
    source: {
      code: `
<Input
  label="Título do Input"
  placeholder="escreva"
  width="50%"
  onChange={() => {}}
/>`,
    },
  },
};

export const Action = Template.bind({});
Action.args = {
  label: 'Título do Input',
  placeholder: 'escreva',
  action: {
    icon: faTimes,
    onClick: action('acao ao clicar'),
    position: 'right',
  },
  onChange: action('mudar valor'),
};

Action.parameters = {
  docs: {
    source: {
      code: `
<Input
  label="Título do Input"
  placeholder="escreva"
  action={
    icon={faTimes}
    onClick={() => {}}
    position="right"
  }
  onChange={() => {}}
/>`,
    },
  },
};

export const Icon = Template.bind({});
Icon.args = {
  label: 'Título do Input',
  placeholder: 'escreva',
  icon: faUser,
  onChange: action('mudar valor'),
  action: undefined,
};

Icon.parameters = {
  docs: {
    source: {
      code: `
<Input
  label="Título do Input"
  placeholder="escreva"
  icone={faUser}
  onChange={() => {}}
/>`,
    },
  },
};

export const IconPosition = Template.bind({});
IconPosition.args = {
  label: 'Título do Input',
  placeholder: 'escreva',
  icon: faUser,
  iconPosition: 'left',
  onChange: action('mudar valor'),
  action: undefined,
};

IconPosition.parameters = {
  docs: {
    source: {
      code: `
<Input
  label="Título do Input"
  placeholder="escreva"
  icon={faUser}
  iconPosition="left"
  onChange={() => {}}
/>`,
    },
  },
};

export const Colors = Template.bind({});
Colors.args = {
  style: { color: 'green' },
  label: 'Título do Input',
  labelStyle: { color: 'red' },
  placeholder: 'escreva',
  icon: faUser,
  iconStyle: { color: 'blue' },
  onChange: action('mudar valor'),
  action: undefined,
};

Colors.parameters = {
  docs: {
    source: {
      code: `
<Input
  style={{ color: 'green' }}
  label="Título do Input"
  labelStyle={{ color: 'red' }}
  placeholder="escreva"
  textColor="blue"
  icon={faUser}
  iconStyle={{ color: 'blue' }}
  onChange={() => {}}
/>`,
    },
  },
};
