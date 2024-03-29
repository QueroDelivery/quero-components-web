import React from 'react';
import { useState } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions';
import { Radio, RadioProps } from '@quero-delivery/quero-components-web';
import '@quero-delivery/quero-components-web/dist/index.css';

const radioMeta: Meta = {
  title: 'Components/Radio',
  component: Radio,
  argTypes: {
    label: {
      control: 'text',
      defaultValue: 'Título do Radio',
      description: 'Título do Radio',
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    sizeBox: {
      control: {
        type: 'inline-radio',
        options: ['xs', 'sm', 'md', 'lg', 'xl'],
      },
      description: 'Tamanho do Radio',
      table: {
        type: {
          summary: 'xs | sm | md | lg | xl ',
        },
      },
    },
    onChange: {
      action: 'clicked',
      description: 'Função para capturar evento de clique',
      table: {
        type: {
          summary: 'function',
        },
      },
    },
    checked: {
      control: 'boolean',
      description: 'O Radio esta selecionado?',
      table: {
        type: {
          summary: 'bollean',
        },
      },
    },
    labelStyle: {
      control: 'object',
      description: 'Estilização do Checkbox',
      table: {
        type: {
          summary: 'React.CSSProperties',
        },
      },
    },
  },
} as Meta;

const Template: Story<RadioProps> = args => {
  const [checked, setChecked] = useState(false);
  return (
    <Radio {...args} onChange={() => setChecked(!checked)} checked={checked} />
  );
};

export const Default = Template.bind({});
Default.args = {
  checked: false,
  onChange: action('checked/notChecked'),
};

Default.parameters = {
  docs: {
    source: {
      code: `
<Radio
  checked={false}
  onChange={() => {}}
/>`,
    },
  },
};

export const Label = Template.bind({});
Label.args = {
  checked: false,
  label: 'Título do Radio',
  labelStyle: { marginRight: 20 },
  onChange: action('checked/notChecked'),
};

Label.parameters = {
  docs: {
    source: {
      code: `
<Radio
  checked={false}
  label="Título do Radio"
  labelStyle={{ marginRight: 20 }}
  onChange={() => {}}
/>`,
    },
  },
};

export const SizeBox = Template.bind({});
SizeBox.args = {
  checked: true,
  label: 'Título do Radio',
  sizeBox: 'lg',
  onChange: action('checked/notChecked'),
};

SizeBox.parameters = {
  docs: {
    source: {
      code: `
<Radio
  checked={true}
  label="Título do Radio"
  sizeBox="big"
  onChange={() => {}}
/>`,
    },
  },
};

export default radioMeta;
