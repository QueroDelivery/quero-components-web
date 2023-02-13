import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions';
import {
  Selection,
  SelectionProps,
} from '@quero-delivery/quero-components-web';
import '@quero-delivery/quero-components-web/dist/index.css';

const selectionMeta: Meta = {
  title: 'Components/Selection',
  component: Selection,
  argTypes: {
    type: {
      control: {
        type: 'inline-radio',
        options: ['switch', 'toggle', 'activeInactive'],
      },
      description: 'Tipo do Select',
      defaultValue: {
        summary: 'O tipo padrão é o switch',
      },
      table: {
        type: {
          summary: 'required | switch | toggle | activeInactive',
        },
      },
    },
    size: {
      control: {
        type: 'inline-radio',
        options: ['xs', 'sm', 'md', 'lg', 'xl'],
      },
      description: 'Tamanho do Select',
      defaultValue: {
        summary: 'O tamanho padrão é o md',
      },
      table: {
        type: {
          summary: 'xs | sm | md | lg | xl',
        },
      },
    },
    checked: {
      control: 'boolean',
      description: 'Foi selecionado?',
      table: {
        type: {
          summary: 'boolean',
        },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'O Selection esta suspenso/desabilitado?',
      table: {
        type: {
          summary: 'boolean',
        },
      },
    },
    selectionRef: {
      control: 'string',
      description: 'Referencia de uma seleção',
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    onChange: {
      action: 'clicked',
      description: 'Função para manipular o Selection',
      table: {
        type: {
          summary: 'function',
        },
      },
    },
  },
  parameters: {
    docs: {
      source: {
        type: 'code',
      },
    },
  },
};

const Template: Story<SelectionProps> = args => <Selection {...args} />;

export const Switch = Template.bind({});
Switch.args = {
  checked: true,
  type: 'switch',
  onChange: action('checked/notChecked'),
};

Switch.parameters = {
  docs: {
    source: {
      code: `
<Selection
  checked={true}
  type="switch"
  onChange={() => {}}
/>`,
    },
  },
};

export const Toggle = Template.bind({});
Toggle.args = {
  checked: false,
  type: 'toggle',
  onChange: action('checked/notChecked'),
};

Toggle.parameters = {
  docs: {
    source: {
      code: `
<Selection
  checked={false}
  type="toggle"
  onChange={() => {}}
/>`,
    },
  },
};

export const ActiveInactive = Template.bind({});
ActiveInactive.args = {
  checked: false,
  type: 'activeInactive',
  onChange: action('checked/notChecked'),
};

ActiveInactive.parameters = {
  docs: {
    source: {
      code: `
<Selection
  checked={false}
  type="activeInactive"
  onChange={() => {}}
/>`,
    },
  },
};

export const Size = Template.bind({});
Size.args = {
  checked: false,
  type: 'switch',
  size: 'lg',
  onChange: action('checked/notChecked'),
};

Size.parameters = {
  docs: {
    source: {
      code: `
<Selection
  checked={false}
  type="switch"
  size="lg"
  onChange={() => {}}
/>`,
    },
  },
};

export const Disabled = Template.bind({});
Disabled.args = {
  checked: false,
  type: 'activeInactive',
  disabled: true,
  onChange: action('checked/notChecked'),
};

Disabled.parameters = {
  docs: {
    source: {
      code: `
<Selection
  checked={false}
  type="activeInactive"
  disabled
  onChange={() => {}}
/>`,
    },
  },
};

export default selectionMeta;
