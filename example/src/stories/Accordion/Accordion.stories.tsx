import React, { useState } from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";
import { action } from "@storybook/addon-actions";
import { Accordion } from "@quero-delivery/quero-components-web";
import { AccordionProps } from "./Interface";
import "@quero-delivery/quero-components-web/dist/index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

export default {
  title: "Components/Accordion",
  component: Accordion,
  argTypes: {
    title: {
      control: "text",
      description: "Título do Accordion",
      table: {
        type: {
          summary: "required | string",
        },
      },
    },
    subtitle: {
      control: "text",
      description: "Texto do subtítulo do Accordion",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    width: {
      control: "text",
      description:
        "Largura do accordion",
      table: {
        defaultValue: {
          summary: "Opções",
          detail: "String | Number (definido como px)",
        },
        type: {
          summary: "number | string",
        },
      },
    },
    icon: {
      description:
        "Definir ícone no accordion",
      table: {
        defaultValue: {
          summary: "Ícone importado da biblioteca Fortawesome",
        },
        type: {
          summary: "IconDefinition",
        },
      },
    },
    value: {
      control: "text",
      description: "Texto que representa um valor do Accordion",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    open: {
      control: "boolean",
      description: "O Accordion esta aberto?",
      table: {
        type: {
          summary: "required | boolean",
        },
      },
    },
    onChange: {
      action: "clicked",
      description: "Função para abrir ou fechar Accordion",
      table: {
        type: {
          summary: "required | function",
        },
      },
    },
    colorTitle: {
      control: "color",
      description: "Cor do título",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    colorSubtitle: {
      control: "color",
      description: "Cor do subtítulo",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    colorIcon: {
      control: "color",
      description: "Cor do ícone",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    colorValue: {
      control: "color",
      description: "Cor do valor",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    secondary: {
      control: "boolean",
      description: "Deseja o estilo secundário do Accordion?",
      defaultValue: false,
      table: {
        type: {
          summary: "boolean",
        },
      },
    },
    customIcon: {
      description:
        "Estilização do ícone no accordion",
      table: {
        defaultValue: {
          summary: "Podendo usar ícones de qualquer biblioteca",
        },
        type: {
          summary: "ReactNode",
        },
      },
    },
    fontSizeTitle: {
      control: "number",
      description: "Tamanho do título",
      table: {
        defaultValue: {
          summary: "Opções",
          detail: "String | Number (definido como px)",
        },
        type: {
          summary: "number | string",
        },
      },
    },
  },
} as Meta;

const Template: Story<AccordionProps> = (args) => {
  const [isOpen, setIsOpen] = useState (false)
  return <Accordion {...args} onChange={() => setIsOpen(!isOpen)} open={isOpen}>
    Escreve aqui
  </Accordion>
};

export const Default = Template.bind({});
Default.args = {
  title: "Título",
  open: false,
  onChange: action("abrir/fechar"),
};

Default.parameters = {
  docs: {
    source:{
      code:`<Accordion
      title="Título"
      open={false}
      onChange={() => {}}
    />`
    }
  }
};

export const Subtitle = Template.bind({});
Subtitle.args = {
  title: "Título",
  subtitle: "Subtítulo",
  open: false,
  secondary: false,
  onChange: action("abrir/fechar"),
};

Subtitle.parameters = {
  docs: {
    source:{
      code:`<Accordion
      title="Título"
      subtitle="Subtítulo"
      open={false}
      secondary={false}
      onChange={() => {}}
    />`
    }
  }
};

export const Width = Template.bind({});
Width.args = {
  title: "Título",
  open: false,
  secondary: false,
  width: "50%",
  onChange: action("abrir/fechar"),
};

Width.parameters = {
  docs: {
    source:{
      code:`<Accordion
      title="Título"
      open={false}
      secondary={false}
      width="50%"
      onChange={() => {}}
    />`
    }
  }
};

export const Icon = Template.bind({});
Icon.args = {
  title: "Título",
  open: false,
  secondary: false,
  icon: faPhone,
  onChange: action("abrir/fechar"),
};

Icon.parameters = {
  docs: {
    source:{
      code:`<Accordion
      title="Titulo"
      open={false}
      secondary={false}
      icon={faPhone}
      onChange={() => {}}
    />`
    }
  }
};

export const Value = Template.bind({});
Value.args = {
  title: "Título",
  value: "R$10,00",
  open: false,
  secondary: false,
  onChange: action("abrir/fechar"),
};

Value.parameters = {
  docs: {
    source:{
      code:`<Accordion
      title="Título"
      value="R$10,00"
      open={false}
      secondary={false}
      onChange={() => {}}
    />`
    }
  }
};

export const Colors = Template.bind({});
Colors.args = {
  title: "Título",
  subtitle: "Subtítulo",
  value: "R$10,00",
  open: false,
  secondary: false,
  icon: faPhone,
  colorIcon: "blue",
  colorSubtitle: "green",
  colorTitle: "red",
  colorValue: "orange",
  onChange: action("abrir/fechar"),
};

Colors.parameters = {
  docs: {
    source:{
      code:`<Accordion
      title="Título"
      subtitle="Subtítulo"
      value="R$10,00"
      open={false}
      secondary={false}
      icon={faPhone}
      colorIcon="blue"
      colorSubtitle="green"
      colorTitle="red"
      colorValue="orange"
      onChange={() => {}}
    />`
    }
  }
};

export const Secondary = Template.bind({});
Secondary.args = {
  title: "Título",
  open: false,
  secondary: true,
  onChange: action("abrir/fechar"),
};

Secondary.parameters = {
  docs: {
    source:{
      code:`<Accordion
      title="Título"
      open={false}
      secondary={true}
      onChange={() => {}}
    />`
    }
  }
};

export const CustomIcon = Template.bind({});
CustomIcon.args = {
  title: "Título",
  open: false,
  secondary: false,
  customIcon: <FontAwesomeIcon icon={faPhone} />,
  onChange: action("abrir/fechar"),
};

CustomIcon.parameters = {
  docs: {
    source:{
      code:`<Accordion
      title="Título"
      open={false}
      secondary={false}
      customIcon={<FontAwesomeIcon icon={faPhone}/>}
      onChange={() => {}}
    />`
    }
  }
};

export const fontSizeTitle = Template.bind({});
fontSizeTitle.args = {
  title: "Título",
  open: false,
  secondary: false,
  fontSizeTitle: 10,
  onChange: action("abrir/fechar"),
};

fontSizeTitle.parameters = {
  docs: {
    source:{
      code:`<Accordion
      title="Título"
      open={false}
      secondary={false}
      fontSizeTitle={10}
      onChange={() => {}}
    />`
    }
  }
};
