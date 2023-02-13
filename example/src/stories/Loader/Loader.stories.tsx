import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Loader, LoaderProps } from '@quero-delivery/quero-components-web';
import '@quero-delivery/quero-components-web/dist/index.css';

export default {
  title: 'Components/Loader',
  component: Loader,
  argTypes: {
    className: {
      control: 'text',
      description: 'Nome da classe para do Loader',
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    size: {
      control: {
        type: 'inline-radio',
        options: ['xs', 'sm', 'md', 'lg', 'xl'],
      },
      description: 'Tamanhos do Loader',
      defaultValue: 'md',
      table: {
        defaultValue: {
          summary: 'md',
        },
        type: {
          summary: 'xs | sm | md | lg | xl',
        },
      },
    },
    position: {
      control: {
        type: 'inline-radio',
        options: ['left', 'center', 'right'],
      },
      description: 'Posições do Loader',
      defaultValue: 'center',
      table: {
        defaultValue: {
          summary: 'center',
        },
        type: {
          summary: 'left | center | right',
        },
      },
    },
    color: {
      control: 'color',
      description: 'Cor do Loader',
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    style: {
      control: 'object',
      description: 'Estilização do Loader',
      table: {
        type: {
          summary: 'React.CSSProperties',
        },
      },
    },
  },
} as Meta;

const Template: Story<LoaderProps> = args => <Loader {...args} />;

export const Default = Template.bind({});
Default.args = {};

Default.parameters = {
  docs: {
    source: {
      code: `
<Loader />`,
    },
  },
};

export const Position = Template.bind({});
Position.args = {
  position: 'left',
};

Position.parameters = {
  docs: {
    source: {
      code: `
<Loader
  position="left"
/>`,
    },
  },
};

export const Size = Template.bind({});
Size.args = {
  size: 'sm',
};

Size.parameters = {
  docs: {
    source: {
      code: `
<Loader
  size="sm"
/>`,
    },
  },
};

export const Color = Template.bind({});
Color.args = {
  color: 'blue',
};

Color.parameters = {
  docs: {
    source: {
      code: `
<Loader
  color="blue"
/>`,
    },
  },
};
