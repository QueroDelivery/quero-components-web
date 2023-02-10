import React from 'react';
import { useState } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions';
import { Checkbox, CheckboxProps } from '@quero-delivery/quero-components-web';

import '@quero-delivery/quero-components-web/dist/esm/index.css';

const checkboxMeta: Meta =  {
  title: 'Components/Checkbox',
  component: Checkbox,
  argTypes: {
    label: {
      control: 'text',
      defaultValue: 'Título do Checkbox',
      description: 'Título do Checkbox',
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
      description: 'Tamanho do CheckBox',
      type: 'string'
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
      description: 'O Checkbox esta selecionado?',
      table: {
        type: {
          summary: 'boolean',
        },
      },
    },
  },
};

const Template: Story<CheckboxProps> = args => {
  const [checked, setChecked] = useState(false);
  return (
    <Checkbox
      {...args}
      onChange={() => setChecked(!checked)}
      checked={checked}
    />
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
<Checkbox
  checked={false}
  onChange={() => {}}
/>`,
    },
  },
};

export const Label = Template.bind({});
Label.args = {
  checked: false,
  label: 'Título do Checkbox',
  labelStyle: { marginRight: 20 },
  onChange: action('checked/notChecked'),
};

Label.parameters = {
  docs: {
    source: {
      code: `
<Checkbox
  checked={false}
  label="Título do Checkbox"
  labelStyle={{ marginRight: 20 }}
  onChange={() => {}}
/>`,
    },
  },
};

export const SizeBox = Template.bind({});
SizeBox.args = {
  checked: true,
  label: 'Título do Checkbox',
  sizeBox: 'lg',
  onChange: action('checked/notChecked'),
};

SizeBox.parameters = {
  docs: {
    source: {
      code: `
<Checkbox
  checked={false}
  label="Título do Checkbox"
  sizeBox="lg"
  onChange={() => {}}
/>`,
    },
  },
};

export default checkboxMeta;
