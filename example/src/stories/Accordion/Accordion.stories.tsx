import React from 'react';
import { useState } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions';
import { Accordion } from '@quero-delivery/quero-components-web';
import { AccordionProps } from '../../../../src/components/Accordion/Accordion';
import '@quero-delivery/quero-components-web/dist/index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

export default {
  title: 'Components/Accordion',
  component: Accordion,
  argTypes: {
    title: {
      control: 'text',
      description: 'Título do Accordion',
      table: {
        type: {
          summary: 'required | string',
        },
      },
    },
    subtitle: {
      control: 'text',
      description: 'Texto do subtítulo do Accordion',
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    width: {
      control: 'text',
      description: 'Largura do accordion',
      table: {
        defaultValue: {
          summary: 'Opções',
          detail: 'String | Number (definido como px)',
        },
        type: {
          summary: 'number | string',
        },
      },
    },
    icon: {
      description: 'Definir ícone no accordion',
      table: {
        defaultValue: {
          summary: 'Ícone importado da biblioteca Fortawesome',
        },
        type: {
          summary: 'IconDefinition',
        },
      },
    },
    value: {
      control: 'text',
      description: 'Texto que representa um valor do Accordion',
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    open: {
      control: 'boolean',
      description: 'O Accordion esta aberto?',
      table: {
        type: {
          summary: 'required | boolean',
        },
      },
    },
    onClick: {
      action: 'clicked',
      description: 'Função para abrir ou fechar Accordion',
      table: {
        type: {
          summary: 'required | function',
        },
      },
    },
    colorTitle: {
      control: 'color',
      description: 'Cor do título',
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    colorSubtitle: {
      control: 'color',
      description: 'Cor do subtítulo',
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    colorIcon: {
      control: 'color',
      description: 'Cor do ícone',
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    colorValue: {
      control: 'color',
      description: 'Cor do valor',
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    secondary: {
      control: 'boolean',
      description: 'Deseja o estilo secundário do Accordion?',
      defaultValue: false,
      table: {
        type: {
          summary: 'boolean',
        },
      },
    },
    customIcon: {
      description: 'Estilização do ícone no accordion',
      table: {
        defaultValue: {
          summary: 'Podendo usar ícones de qualquer biblioteca',
        },
        type: {
          summary: 'ReactNode',
        },
      },
    },
    fontSizeTitle: {
      control: 'number',
      description: 'Tamanho do título',
      table: {
        defaultValue: {
          summary: 'Opções',
          detail: 'String | Number (definido como px)',
        },
        type: {
          summary: 'number | string',
        },
      },
    },
  },
} as Meta;

const Template: Story<AccordionProps> = args => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Accordion {...args} onClick={() => setIsOpen(!isOpen)} open={isOpen}>
      Escreve aqui
    </Accordion>
  );
};

export const Default = Template.bind({});
Default.args = {
  title: 'Título',
  open: false,
  onClick: action('abrir/fechar'),
};

Default.parameters = {
  docs: {
    source: {
      code: `<Accordion
      title="Título"
      open={false}
      onClick={() => {}}
    />`,
    },
  },
};

export const Subtitle = Template.bind({});
Subtitle.args = {
  title: 'Título',
  subtitle: 'Subtítulo',
  open: false,
  secondary: false,
  onClick: action('abrir/fechar'),
};

Subtitle.parameters = {
  docs: {
    source: {
      code: `<Accordion
      title="Título"
      subtitle="Subtítulo"
      open={false}
      onClick={() => {}}
    />`,
    },
  },
};

export const Width = Template.bind({});
Width.args = {
  title: 'Título',
  open: false,
  secondary: false,
  width: '50%',
  onClick: action('abrir/fechar'),
};

Width.parameters = {
  docs: {
    source: {
      code: `<Accordion
      title="Título"
      open={false}
      width="50%"
      onClick={() => {}}
    />`,
    },
  },
};

export const Icon = Template.bind({});
Icon.args = {
  title: 'Título',
  open: false,
  secondary: false,
  icon: faPhone,
  onClick: action('abrir/fechar'),
};

Icon.parameters = {
  docs: {
    source: {
      code: `<Accordion
      title="Titulo"
      open={false}
      icon={faPhone}
      onClick={() => {}}
    />`,
    },
  },
};

export const Value = Template.bind({});
Value.args = {
  title: 'Título',
  value: 'R$10,00',
  open: false,
  secondary: false,
  onClick: action('abrir/fechar'),
};

Value.parameters = {
  docs: {
    source: {
      code: `<Accordion
      title="Título"
      value="R$10,00"
      open={false}
      onClick={() => {}}
    />`,
    },
  },
};

export const Colors = Template.bind({});
Colors.args = {
  title: 'Título',
  subtitle: 'Subtítulo',
  value: 'R$10,00',
  open: false,
  secondary: false,
  icon: faPhone,
  colorIcon: 'blue',
  colorSubtitle: 'green',
  colorTitle: 'red',
  colorValue: 'orange',
  onClick: action('abrir/fechar'),
};

Colors.parameters = {
  docs: {
    source: {
      code: `<Accordion
      title="Título"
      subtitle="Subtítulo"
      value="R$10,00"
      open={false}
      icon={faPhone}
      colorIcon="blue"
      colorSubtitle="green"
      colorTitle="red"
      colorValue="orange"
      onClick={() => {}}
    />`,
    },
  },
};

export const Secondary = Template.bind({});
Secondary.args = {
  title: 'Título',
  open: false,
  secondary: true,
  onClick: action('abrir/fechar'),
};

Secondary.parameters = {
  docs: {
    source: {
      code: `<Accordion
      title="Título"
      open={false}
      secondary
      onClick={() => {}}
    />`,
    },
  },
};

export const CustomIcon = Template.bind({});
CustomIcon.args = {
  title: 'Título',
  open: false,
  secondary: false,
  customIcon: <FontAwesomeIcon icon={faPhone} />,
  onClick: action('abrir/fechar'),
};

CustomIcon.parameters = {
  docs: {
    source: {
      code: `<Accordion
      title="Título"
      open={false}
      customIcon={<FontAwesomeIcon icon={faPhone}/>}
      onClick={() => {}}
    />`,
    },
  },
};

export const fontSizeTitle = Template.bind({});
fontSizeTitle.args = {
  title: 'Título',
  open: false,
  secondary: false,
  fontSizeTitle: 10,
  onClick: action('abrir/fechar'),
};

fontSizeTitle.parameters = {
  docs: {
    source: {
      code: `<Accordion
      title="Título"
      open={false}
      fontSizeTitle={10}
      onClick={() => {}}
    />`,
    },
  },
};
