import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions';
import { Card, CardProps } from '@quero-delivery/quero-components-web';
import '@quero-delivery/quero-components-web/dist/index.css';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

const meta: Meta = {
  title: 'Components/Card',
  component: Card,
  argTypes: {
    type: {
      control: {
        type: 'inline-radio',
        options: ['shadow', 'button', 'min-shadow', 'border', 'none'],
      },
      description: 'Tipos do Card',
      table: {
        defaultValue: {
          summary: 'shadow',
        },
        type: {
          summary: 'shadow | button | min-shadow | border | none',
        },
      },
    },
    icon: {
      control: 'object',
      description: 'Icone do Card',
      table: {
        type: {
          summary: 'IconDefinition',
        },
      },
    },
    iconSize: {
      control: {
        type: 'inline-radio',
        options: [
          '1x',
          '2x',
          '3x',
          '4x',
          '5x',
          '6x',
          '7x',
          '8x',
          '9x',
          '10x',
          'lg',
          'sm',
          'xs',
        ],
      },
      description: 'Tamanho do icone no Card',
      type: 'string',
    },
    complement: {
      control: 'text',
      description: 'Elemento usado como complemento',
      table: {
        type: {
          summary: 'React.ReactNode',
        },
      },
    },
    width: {
      control: 'text',
      description: 'largura do Card',
      table: {
        defaultValue: {
          summary: 'O padrão é de 100%',
        },
        type: {
          summary: 'number | string',
        },
      },
    },
    onClick: {
      action: 'clicked',
      description: 'Função para capturar evento de clique',
      table: {
        type: {
          summary: 'function',
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
  },
};

const Template: Story<CardProps> = args => <Card {...args}>Escreve aqui</Card>;

export const Shadow = Template.bind({});
Shadow.args = {
  type: 'shadow',
};

Shadow.parameters = {
  docs: {
    source: {
      code: `
<Card
  type="shadow"
>
  Olá
</Card>`,
    },
  },
};

export const Button = Template.bind({});
Button.args = {
  type: 'button',
  children: 'Escreve aqui',
  onClick: () => action('click'),
};

Button.parameters = {
  docs: {
    source: {
      code: `
<Card
  type="button"
  onClick={() => {}}
>
  Escreve aqui
</Card>`,
    },
  },
};

export const MinShadow = Template.bind({});
MinShadow.args = {
  type: 'min-shadow',
};

MinShadow.parameters = {
  docs: {
    source: {
      code: `
<Card
  type="min-shadow"
>
  Escreve aqui
</Card>
`,
    },
  },
};

export const Icon = Template.bind({});
Icon.args = {
  type: 'button',
  icon: faPhone,
  onClick: () => action('click'),
};

Icon.parameters = {
  docs: {
    source: {
      code: `
<Card
  type="button"
  icon={faPhone}
  onClick={() => {}}
>
  Escreve aqui
</Card>`,
    },
  },
};

export const IconSize = Template.bind({});
IconSize.args = {
  type: 'button',
  icon: faPhone,
  iconSize: '2x',
  onClick: () => action('click'),
};

IconSize.parameters = {
  docs: {
    source: {
      code: `
<Card
  type="button"
  icon={faPhone}
  sizeIcon="2x"
  onClick={() => {}}
>
  Escreve aqui
</Card>`,
    },
  },
};

export const Width = Template.bind({});
Width.args = {
  type: 'shadow',
  width: '50%',
};

Width.parameters = {
  docs: {
    source: {
      code: `
<Card
  type="shadow"
  width="50"
  onClick={() => {}}
>
  Escreve aqui
</Card>`,
    },
  },
};

export const Loading = Template.bind({});
Loading.args = {
  type: 'shadow',
  loading: true,
};

Loading.parameters = {
  docs: {
    source: {
      code: `
<Card
  type="shadow"
  loading
>
  Escreve aqui
</Card>`,
    },
  },
};

export const CardWithComplement = Template.bind({});
CardWithComplement.args = {
  type: 'border',
  complement: (
    <p style={{ cursor: 'pointer', padding: '20px 0' }}> Complement </p>
  ),
};

CardWithComplement.parameters = {
  docs: {
    source: {
      code: `
<Card
  type="shadow"
  component={<p style={{ cursor: 'pointer';, padding: '20px 0' }}> Complement </p>}
>
  Escreve aqui
</Card>`,
    },
  },
};

export const Colors = Template.bind({});
Colors.args = {
  type: 'button',
  icon: faPhone,
  iconStyle: { color: 'blue' },
  childrenStyle: { color: 'green' },
  onClick: () => action('click'),
};

Colors.parameters = {
  docs: {
    source: {
      code: `
<Card
  type="button"
  icon={faPhone}
  iconStyle={{color: 'blue'}}
  childrenStyle={{color: 'green'}}
  onClick={() => {}}
>
  Olá
</Card>`,
    },
  },
};

export default meta;
