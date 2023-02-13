import React from 'react';
import { useState } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { MoreLess, MoreLessProps } from '@quero-delivery/quero-components-web';
import '@quero-delivery/quero-components-web/dist/index.css';
import { action } from '@storybook/addon-actions';

const moreLessMeta: Meta = {
  title: 'Components/MoreLess',
  component: MoreLess,
  argTypes: {
    size: {
      control: {
        type: 'inline-radio',
        options: ['xs', 'sm', 'md', 'lg', 'xl'],
      },
      description: 'Tamanho do MoreLess',
      defaultValue: 'md',
      table: {
        type: {
          summary: 'xs | sm | md | lg | xl',
        },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'O MoreLess esta suspenso/desabilitado?',
      table: {
        type: {
          summary: 'boolean',
        },
      },
    },
    minimum: {
      control: 'number',
      description: 'Menor valor do MoreLess',
      defaultValue: 0,
      table: {
        defaultValue: {
          summary: '1',
        },
        type: {
          summary: 'number',
        },
      },
    },
    maximum: {
      control: 'number',
      description: 'Maior valor do MoreLess',
      table: {
        type: {
          summary: 'number',
        },
      },
    },
    value: {
      control: 'number',
      description: 'O valor do MoreLess',
      table: {
        type: {
          summary: 'requered | number',
        },
      },
    },
    quantityToChange: {
      control: 'number',
      description: 'Valor a ser alterado ao adicionar ou diminuir o value',
      defaultValue: 1,
      table: {
        defaultValue: {
          summary: '1',
        },
        type: {
          summary: 'number',
        },
      },
    },
    onChange: {
      control: 'string',
      description:
        'Função responsavel por manipular o MoreLess, recebendo o novo valor',
      table: {
        defaultValue: {
          summary: 'Recebe o valor do MoreLess',
        },
        type: {
          summary: 'function',
        },
      },
    },
  },
} as Meta;

const Template: Story<MoreLessProps> = args => {
  const [value, setValue] = useState(args.value);
  return (
    <MoreLess {...args} value={value} onChange={value => setValue(value)} />
  );
};

export const Default = Template.bind({});
Default.args = {
  value: 0,
  onChange: action('update'),
};

Default.parameters = {
  docs: {
    source: {
      code: `
<MoreLess
  value={0}
  onChange={() => {}}
/>`,
    },
  },
};

export const Size = Template.bind({});
Size.args = {
  value: 2,
  onChange: action('update'),
  size: 'md',
};

Size.parameters = {
  docs: {
    source: {
      code: `
<MoreLess
  value={2}
  onChange={() => {}}
  size="md"
/>`,
    },
  },
};

export const Disabled = Template.bind({});
Disabled.args = {
  value: 2,
  onChange: action('update'),
  disabled: true,
};

Disabled.parameters = {
  docs: {
    source: {
      code: `
<MoreLess
  value={2}
  onChange={() => {}}
  disabled={true}
/>`,
    },
  },
};

export const Minimum = Template.bind({});
Minimum.args = {
  value: 2,
  onChange: action('update'),
  minimum: 2,
};

Minimum.parameters = {
  docs: {
    source: {
      code: `
<MoreLess
  value={2}
  onChange={() => {}}
  minimum={2}
/>`,
    },
  },
};

export const Maximum = Template.bind({});
Maximum.args = {
  value: 10,
  onChange: action('update'),
  maximum: 10,
};

Maximum.parameters = {
  docs: {
    source: {
      code: `
<MoreLess
  value={10}
  onChange={() => {}}
  limit={10}
/>`,
    },
  },
};

export const OnChange = Template.bind({});
OnChange.args = {
  value: 4,
  onChange: action('update'),
};

OnChange.parameters = {
  docs: {
    source: {
      code: `
<MoreLess
  value={4}
  onChange={() => {}}
/>`,
    },
  },
};

export default moreLessMeta;
