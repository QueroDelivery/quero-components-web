import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";
import { action } from "@storybook/addon-actions";
import { ButtonMain } from "quero-components-web";
import { ButtonProps } from "./Interface";
import "quero-components-web/dist/index.css";
import { faPhone, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default {
  title: "Components/ButtonMain",
  component: ButtonMain,
    parameters: {
      docs: {
        description: {
              component: "Button padronizado do HTML, recebendo todas as suas propriedades",
            }
        },
      },
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
    width: {
      control: "text",
      description:
        "Largura do botão",
      table: {
        defaultValue: {
          summary: "Opções",
          detail: "String | Number (definido como px)",
        },
        type: {
          summary: "number | string ",
        },
      },
    },
    firstStrong: {
      control: "boolean",
      description: "Deseja deixar a primeira palavra em negrito?",
      table: {
        type: {
          summary: "boolean",
        },
      },
    },
    notStrong: {
      control: "boolean",
      description: "Deseja deixar nenhuma palavra em negrito?",
      table: {
        type: {
          summary: "boolean",
        },
      },
    },
    strong: {
      control: "boolean",
      description: "Deseja deixar todas as palavras em negrito?",
      table: {
        type: {
          summary: "boolean",
        },
      },
    },
    loading: {
      control: "boolean",
      description: "O botão está em carregamento?",
      table: {
        type: {
          summary: "boolean",
        },
      },
    },
    secondary: {
      control: "boolean",
      description: "Deseja altera o botão para o estilo secundário?",
      table: {
        type: {
          summary: "boolean",
        },
      },
    },
    noBorder: {
      control: "boolean",
      description: "Deseja altera o botão para o estilo sem bordas?",
      table: {
        type: {
          summary: "boolean",
        },
      },
    },
    backPurple: {
      control: "boolean",
      description:
        "Deseja alterar a cor da hover quando o fundo do botão for da cor roxa?",
      table: {
        type: {
          summary: "boolean",
        },
      },
    },
    tertiary: {
      control: "boolean",
      description: "Deseja altera o botão para o estilo terciário?",
      table: {
        type: {
          summary: "boolean",
        },
      },
    },
    rectangular: {
      control: "boolean",
      description: "Deseja altera o botão para o estilo com bordas retangulares?",
      table: {
        type: {
          summary: "boolean",
        },
      },
    },
    notification: {
      control: "boolean",
      description:
        "Deseja altera o botão para o estilo de notificações?",
      table: {
        defaultValue: {
          summary: "Precisa passar a propriedade amount com a quantidade",
        },
        type: {
          summary: "boolean",
        },
      },
    },
    amount: {
      control: "number",
      description:
        "Quantidade de mensagens quando o botão esta com estilo de notificações",
      table: {
        type: {
          summary: "number",
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
    icon: {
      description:
        "Inserir ícone no botão",
      table: {
        defaultValue: {
          summary: "Ícone importado da biblioteca Fortawesome",
        },
        type: {
          summary: "IconDefinition",
        },
      },
    },
    customIcon: {
      description:
        "Inserir ícone no botão",
      table: {
        defaultValue: {
          summary: "Podendo usar ícones de qualquer biblioteca",
        },
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
    colorIcon: {
      control: "color",
      description: "Cor do ícone",
      table: {
        type: {
          summary: "string",
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

Default.parameters = {
  docs: {
    source:{
      code:`<ButtonMain 
      textFirst="Clique"
      textEnd="aqui"
      onClick={() => {}}
    />`
    }
  }
};

export const Size = Template.bind({});
Size.args = {
  textFirst: "Clique",
  textEnd: "aqui",
  size: "mini",
};

Size.parameters = {
  docs: {
    source:{
      code:`<ButtonMain 
      textFirst="Clique"
      textEnd="aqui"
      size="mini"
    />`
    }
  }
};

export const Width = Template.bind({});
Width.args = {
  textFirst: "Clique",
  textEnd: "aqui",
  width: "50%",
};

Width.parameters = {
  docs: {
    source:{
      code:`<ButtonMain 
      textFirst="Clique"
      textEnd="aqui"
      width="50%"
    />`
    }
  }
};

export const FirstStrong = Template.bind({});
FirstStrong.args = {
  textFirst: "Clique",
  textEnd: "aqui",
  onClick: action("click"),
  firstStrong: true,
};

FirstStrong.parameters = {
  docs: {
    source:{
      code:`<ButtonMain 
      textFirst="Clique"
      textEnd="aqui"
      onClick={() => {}}
      firstStrong={true}
    />`
    }
  }
};

export const NotStrong = Template.bind({});
NotStrong.args = {
  textFirst: "Clique",
  textEnd: "aqui",
  onClick: action("click"),
  notStrong: true,
};

NotStrong.parameters = {
  docs: {
    source:{
      code:`<ButtonMain 
      textFirst="Clique"
      textEnd="aqui"
      onClick={() => {}}
      notStrong={true}
    />`
    }
  }
};

export const Strong = Template.bind({});
Strong.args = {
  textFirst: "Clique",
  textEnd: "aqui",
  onClick: action("click"),
  strong: true,
};


Strong.parameters = {
  docs: {
    source:{
      code:`<ButtonMain 
      textFirst="Clique"
      textEnd="aqui"
      onClick={() => {}}
      Strong={true}
    />`
    }
  }
};

export const Loading = Template.bind({});
Loading.args = {
  textFirst: "Clique",
  textEnd: "aqui",
  loading: true,
};

Loading.parameters = {
  docs: {
    source:{
      code:`<ButtonMain 
      textFirst="Clique"
      textEnd="aqui"
      loading={true}
    />`
    }
  }
};

export const Secondary = Template.bind({});
Secondary.args = {
  textFirst: "Clique",
  textEnd: "aqui",
  onClick: action("click"),
  secondary: true,
};

Secondary.parameters = {
  docs: {
    source:{
      code:`<ButtonMain 
      textFirst="Clique"
      textEnd="aqui"
      onClick={() => {}}
      secondary={true}
    />`
    }
  }
};

export const NoBorder = Template.bind({});
NoBorder.args = {
  textFirst: "Clique",
  textEnd: "aqui",
  noBorder: true,
};

NoBorder.parameters = {
  docs: {
    source:{
      code:`<ButtonMain 
      textFirst="Clique"
      textEnd="aqui"
      noBorder={true}
    />`
    }
  }
};

export const BackPurple = Template.bind({});
BackPurple.args = {
  textFirst: "Clique",
  textEnd: "aqui",
  backPurple: true,
};

BackPurple.parameters = {
  docs: {
    source:{
      code:`<ButtonMain 
      textFirst="Clique"
      textEnd="aqui"
      backPurple={true}
    />`
    }
  }
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  textFirst: "Clique",
  textEnd: "aqui",
  onClick: action("click"),
  tertiary: true,
};

Tertiary.parameters = {
  docs: {
    source:{
      code:`<ButtonMain 
      textFirst="Clique"
      textEnd="aqui"
      onClick={() => {}}
      tertiary={true}
    />`
    }
  }
};

export const Notification = Template.bind({});
Notification.args = {
  textFirst: "Clique",
  textEnd: "aqui",
  notification: true,
  amount: 2,
};

Notification.parameters = {
  docs: {
    source:{
      code:`<ButtonMain 
      textFirst="Clique"
      textEnd="aqui"
      notification={true}
      amount={2}
    />`
    }
  }
};

export const Rectangular = Template.bind({});
Rectangular.args = {
  textFirst: "Clique",
  textEnd: "aqui",
  secondary: true,
  tertiary: false,
  rectangular: true,
};

Rectangular.parameters = {
  docs: {
    source:{
      code:`<ButtonMain 
      textFirst="Clique"
      textEnd="aqui"
      secondary={true}
      tertiary={false}
      rectangular={true}
    />`
    }
  }
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

TypeContent.parameters = {
  docs: {
    source:{
      code:`<ButtonMain 
      typeContent="icon"
      colorBackground="red"
      colorIcon="black"
      icon={faTimes}
      rectangular={true}
      width="10%"
    />`
    }
  }
};

export const Icon = Template.bind({});
Icon.args = {
  textFirst: "Clique",
  textEnd: "aqui",
  icon: faPhone,
};

Icon.parameters = {
  docs: {
    source:{
      code:`<ButtonMain 
      textFirst="Clique"
      textEnd="aqui"
      icon={faPhone}
    />`
    }
  }
}

export const CustomIcon = Template.bind({});
CustomIcon.args = {
  textFirst: "Clique",
  textEnd: "aqui",
  customIcon: <FontAwesomeIcon icon={faPhone} />,
};

CustomIcon.parameters = {
  docs: {
    source:{
      code:`<ButtonMain 
      textFirst="Clique"
      textEnd="aqui"
      customIcon={<FontAwesomeIcon icon={faPhone}/>}
    />`
    }
  }
};

export const IconPosition = Template.bind({});
IconPosition.args = {
  textFirst: "Clique",
  textEnd: "aqui",
  icon: faPhone,
  iconPosition: "left",
};

IconPosition.parameters = {
  docs: {
    source:{
      code:`<ButtonMain 
      textFirst="Clique"
      textEnd="aqui"
      icon={faPhone}
      iconPosition="left"
    />`
    }
  }
};

export const ColorIcon = Template.bind({});
ColorIcon.args = {
  textFirst: "Clique",
  textEnd: "aqui",
  colorIcon: "black",
  icon: faPhone,
};

ColorIcon.parameters = {
  docs: {
    source:{
      code:`<ButtonMain 
      textFirst="Clique"
      textEnd="aqui"
      colorIcon="black"
      icon={faPhone}
    />`
    }
  }
};

export const ColorText = Template.bind({});
ColorText.args = {
  textFirst: "Clique",
  textEnd: "aqui",
  colorText: "black",
};

ColorText.parameters = {
  docs: {
    source:{
      code:`<ButtonMain 
      textFirst="Clique"
      textEnd="aqui"
      colorText="black"
    />`
    }
  }
};

export const ColorBackground = Template.bind({});
ColorBackground.args = {
  textFirst: "Clique",
  textEnd: "aqui",
  colorText: "white",
  colorBackground: "black",
};

ColorBackground.parameters = {
  docs: {
    source:{
      code:`<ButtonMain 
      textFirst="Clique"
      textEnd="aqui"
      colorText="white"
      colorBackground="black"
    />`
    }
  }
}

export const HoverColor = Template.bind({});
HoverColor.args = {
  textFirst: "Clique",
  textEnd: "aqui",
  secondary: true,
  hoverBackgroundColor: "black",
  hoverTextColor: "white",
};

HoverColor.parameters = {
  docs: {
    source:{
      code:`<ButtonMain 
      textFirst="Clique"
      textEnd="aqui"
      secondary={true}
      hoverBackgroundColor="black"
      hoverTextColor="white"
    />`
    }
  }
};