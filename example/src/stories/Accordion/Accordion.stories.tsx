import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";
import { action } from "@storybook/addon-actions";
import { Accordion } from "quero-components-web";
import { AccordionProps } from "./Interface";
import "quero-components-web/dist/index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

export default {
  title: "Components/Accordion",
  component: Accordion,
  argTypes: {
    title: {
      control: "text",
      description: "Texto do titulo",
      table: {
        type: {
          summary: "required | string",
        },
      },
    },
    open: {
      control: "boolean",
      description: "Informa que so accordion está aberto ou fechado",
      table: {
        type: {
          summary: "required | string",
        },
      },
    },
    onChange: {
      action: "clicked",
      description: "Função para abrir ou fechar accordion",
      table: {
        type: {
          summary: "required | function",
        },
      },
    },
    secondary: {
      control: "boolean",
      description: "Definir estilo secundário do accordion",
      defaultValue: false,
      table: {
        type: {
          summary: "boolean",
        },
      },
    },
    subtitle: {
      control: "text",
      description: "Texto do subtitulo",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    value: {
      control: "text",
      description: "Texto que representa um valor",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    width: {
      control: "string",
      description:
        "Largura do accordion, em Number sendo definido como px; Ou em string",
      table: {
        type: {
          summary: "number | string ",
        },
      },
    },
    icon: {
      description:
        "Definir ícone no accordion. Ícone importado da biblioteca Fortawesome",
      table: {
        type: {
          summary: "IconDefinition",
        },
      },
    },
    customIcon: {
      description:
        "Definir ícone no accordion. Podendo usar ícones de qualquer biblioteca",
      table: {
        type: {
          summary: "ReactNode",
        },
      },
    },
    fontSizeTitle: {
      control: "number",
      description: "Tamanho do titulo, em Number sendo definido como px;",
      table: {
        type: {
          summary: "number",
        },
      },
    },
    colorTitle: {
      control: "color",
      description: "Cor do titulo",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    colorSubtitle: {
      control: "color",
      description: "Cor do subtitulo",
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
    colorIcon: {
      control: "color",
      description: "Cor do ícone",
      table: {
        type: {
          summary: "string",
        },
      },
    },
  },
} as Meta;

const Template: Story<AccordionProps> = (args) => (
  <Accordion {...args}>Escreve aqui</Accordion>
);

export const Default = Template.bind({});
Default.args = {
  title: "Titulo",
  open: false,
  onChange: action("abrir/fechar"),
};

export const Secondary = Template.bind({});
Secondary.args = {
  title: "Titulo",
  open: false,
  secondary: true,
  onChange: action("abrir/fechar"),
};

export const Subtitle = Template.bind({});
Subtitle.args = {
  title: "Titulo",
  subtitle: "Subtitulo",
  open: false,
  secondary: false,
  onChange: action("abrir/fechar"),
};

export const Value = Template.bind({});
Value.args = {
  title: "Titulo",
  value: "R$10,00",
  open: false,
  secondary: false,
  onChange: action("abrir/fechar"),
};

export const Icon = Template.bind({});
Icon.args = {
  title: "Titulo",
  open: false,
  secondary: false,
  icon: faPhone,
  onChange: action("abrir/fechar"),
};

export const CustomIcon = Template.bind({});
CustomIcon.args = {
  title: "Titulo",
  open: false,
  secondary: false,
  customIcon: <FontAwesomeIcon icon={faPhone} />,
  onChange: action("abrir/fechar"),
};

export const Colors = Template.bind({});
Colors.args = {
  title: "Titulo",
  subtitle: "Subtitulo",
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

export const Width = Template.bind({});
Width.args = {
  title: "Titulo",
  open: false,
  secondary: false,
  width: "50%",
  onChange: action("abrir/fechar"),
};

export const fontSizeTitle = Template.bind({});
fontSizeTitle.args = {
  title: "Titulo",
  open: false,
  secondary: false,
  fontSizeTitle: 10,
  onChange: action("abrir/fechar"),
};
