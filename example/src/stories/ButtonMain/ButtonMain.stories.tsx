import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";
import { action } from "@storybook/addon-actions";
import { ButtonMain } from "quero-components-web";
import { ButtonProps } from "./Interface";
import "quero-components-web/dist/index.css";
import { faPhone, faTimes } from "@fortawesome/pro-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default {
  title: "Components/ButtonMain",
  component: ButtonMain,
  argTypes: {
    textFirst: {
      control: "text",
      description: "Primeira palavra do botão",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    textEnd: {
      control: "text",
      description: "Ultima palavra do botão",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    firstStrong: {
      control: "boolean",
      description: "Deixar a primeira palavra como negrito",
      table: {
        type: {
          summary: "boolean",
        },
      },
    },
    notStrong: {
      control: "boolean",
      description: "Deixar nenhuma palavra em negrito",
      table: {
        type: {
          summary: "boolean",
        },
      },
    },
    strong: {
      control: "boolean",
      description: "Deixar todas as palavras em negrito",
      table: {
        type: {
          summary: "boolean",
        },
      },
    },
    loading: {
      control: "boolean",
      description: "Informar que o botão está em carregamento",
      table: {
        type: {
          summary: "boolean",
        },
      },
    },
    secondary: {
      control: "boolean",
      description: "Altera o botão para o estilo secundário",
      table: {
        type: {
          summary: "boolean",
        },
      },
    },
    tertiary: {
      control: "boolean",
      description: "Altera o botão para o estilo terciário",
      table: {
        type: {
          summary: "boolean",
        },
      },
    },
    rectangular: {
      control: "boolean",
      description: "Altera o botão para o estilo com bordas retangulares",
      table: {
        type: {
          summary: "boolean",
        },
      },
    },
    notification: {
      control: "boolean",
      description:
        "Altera o botão para o estilo de notificações. Precisando passar a propriedade amount com a quantidade",
      table: {
        type: {
          summary: "boolean",
        },
      },
    },
    amount: {
      control: "number",
      description:
        "Quantidade de mensagens quando o botão ta com estilo de notificações",
      table: {
        type: {
          summary: "number",
        },
      },
    },
    noBorder: {
      control: "boolean",
      description: "Altera o botão para o estilo sem bordas",
      table: {
        type: {
          summary: "boolean",
        },
      },
    },
    backPurple: {
      control: "boolean",
      description:
        "Alterar a cor da hover quando o fundo do botão for da cor roxa",
      table: {
        type: {
          summary: "boolean",
        },
      },
    },
    size: {
      control: {
        type: "inline-radio",
        options: [
          "mini",
          "tiny",
          "small",
          "medium",
          "large",
          "big",
          "huge",
          "massive",
        ],
      },
      description: "Alterar o tamanho do botão",
      table: {
        type: {
          summary:
            "mini | tiny | small | medium | large | big | huge | massive",
        },
      },
    },
    icon: {
      description:
        "Inserir ícone no botão. Ícone importado da biblioteca Fortawesome",
      table: {
        type: {
          summary: "IconDefinition",
        },
      },
    },
    customIcon: {
      description:
        "Inserir ícone no botão. Podendo usar ícones de qualquer biblioteca",
      table: {
        type: {
          summary: "ReactNode",
        },
      },
    },
    iconPosition: {
      control: {
        type: "inline-radio",
        options: ["left", "right"],
      },
      description: "Definir a posição do ícone",
      table: {
        type: {
          summary: "left | right",
        },
      },
    },
    width: {
      control: "text",
      description:
        "Largura do botão, em Number sendo definido como px; Ou em string",
      table: {
        type: {
          summary: "number | string ",
        },
      },
    },
    typeContent: {
      control: {
        type: "inline-radio",
        options: ["icon"],
      },
      description: "Tipo do conteúdo do botão",
      table: {
        type: {
          summary: "icon",
        },
      },
    },
    colorText: {
      control: "color",
      description: "Cor do texto",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    colorBackground: {
      control: "color",
      description: "Cor do background",
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
    hoverBackgroundColor: {
      control: "color",
      description: "Cor do background hover",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    hoverTextColor: {
      control: "color",
      description: "Cor do texto hover",
      table: {
        type: {
          summary: "string",
        },
      },
    },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => <ButtonMain {...args} />;

export const Default = Template.bind({});
Default.args = {
  textFirst: "Clique",
  textEnd: "aqui",
  onClick: action("click"),
};

export const Secondary = Template.bind({});
Secondary.args = {
  textFirst: "Clique",
  textEnd: "aqui",
  onClick: action("click"),
  secondary: true,
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  textFirst: "Clique",
  textEnd: "aqui",
  onClick: action("click"),
  tertiary: true,
};

export const FirstStrong = Template.bind({});
FirstStrong.args = {
  textFirst: "Clique",
  textEnd: "aqui",
  onClick: action("click"),
  firstStrong: true,
};

export const Strong = Template.bind({});
Strong.args = {
  textFirst: "Clique",
  textEnd: "aqui",
  onClick: action("click"),
  strong: true,
};

export const NotStrong = Template.bind({});
NotStrong.args = {
  textFirst: "Clique",
  textEnd: "aqui",
  onClick: action("click"),
  notStrong: true,
};

export const Loading = Template.bind({});
Loading.args = {
  textFirst: "Clique",
  textEnd: "aqui",
  loading: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  textFirst: "Clique",
  textEnd: "aqui",
  disabled: true,
};

export const BackPurple = Template.bind({});
BackPurple.args = {
  textFirst: "Clique",
  textEnd: "aqui",
  backPurple: true,
};

export const NoBorder = Template.bind({});
NoBorder.args = {
  textFirst: "Clique",
  textEnd: "aqui",
  noBorder: true,
};

export const Size = Template.bind({});
Size.args = {
  textFirst: "Clique",
  textEnd: "aqui",
  size: "mini",
};

export const ColorText = Template.bind({});
ColorText.args = {
  textFirst: "Clique",
  textEnd: "aqui",
  colorText: "black",
};

export const ColorBackground = Template.bind({});
ColorBackground.args = {
  textFirst: "Clique",
  textEnd: "aqui",
  colorText: "white",
  colorBackground: "black",
};

export const HoverColor = Template.bind({});
HoverColor.args = {
  textFirst: "Clique",
  textEnd: "aqui",
  secondary: true,
  hoverBackgroundColor: "black",
  hoverTextColor: "white",
};

export const Icon = Template.bind({});
Icon.args = {
  textFirst: "Clique",
  textEnd: "aqui",
  icon: faPhone,
};

export const IconPosition = Template.bind({});
IconPosition.args = {
  textFirst: "Clique",
  textEnd: "aqui",
  icon: faPhone,
  iconPosition: "left",
};

export const CustomIcon = Template.bind({});
CustomIcon.args = {
  textFirst: "Clique",
  textEnd: "aqui",
  customIcon: <FontAwesomeIcon icon={faPhone} />,
};

export const Width = Template.bind({});
Width.args = {
  textFirst: "Clique",
  textEnd: "aqui",
  width: "50%",
};

export const Notification = Template.bind({});
Notification.args = {
  textFirst: "Clique",
  textEnd: "aqui",
  notification: true,
  amount: 2,
};

export const Rectangular = Template.bind({});
Rectangular.args = {
  textFirst: "Clique",
  textEnd: "aqui",
  secondary: true,
  tertiary: false,
  rectangular: true,
};

export const TypeContent = Template.bind({});
TypeContent.args = {
  typeContent: "icon",
  colorBackground: "red",
  colorIcon: "black",
  icon: faTimes,
  rectangular: true,
  width: "10%",
};
