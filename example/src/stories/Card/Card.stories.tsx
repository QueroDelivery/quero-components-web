import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";
import { action } from "@storybook/addon-actions";
import { Card } from "@quero-delivery/quero-components-web";
import { CardProps } from "./Interface";
import "@quero-delivery/quero-components-web/dist/index.css";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

export default {
    title: "Components/Card",
    component: Card,
    argTypes: {
      type: {
        control: {
          type: "inline-radio",
          options: [
            "shadow", 
            "button", 
            "min-shadow", 
            "border", 
            "none"
          ],
      },
        description: "Tipos do Card",
        table: {
          type: {
            summary: 'shadow | button | min-shadow | border | none',
          },
        },
      },
      text: {
        control: "text",
        description: "Texto do Card",
        table: {
          defaultValue: {
            summary: "Observação",
            detail: "Só fica disponível quando o tipo for Button",
          },
          type: {
            summary: "string",
          },
        },
      },
      icon: {
        control: "object",
        description: "Icone do Card",
        defaultValue: faPhone,
        table: {
          type: {
            summary: "IconDefinition",
          },
        },
      },
      sizeIcon: {
          control: {
              type: "inline-radio",
              options: [
                  "1x",
                  "2x",
                  "3x",
                  "4x",
                  "5x",
                  "6x",
                  "7x",
                  "8x",
                  "9x",
                  "10x",
                  "lg",
                  "sm",
                  "xs",
              ],
          },
          description: "Tamanho do icone no Card",
          type: {
            summary: "string",
          },
      },
      complement: {
        control: "text",
        description: "Elemento usado como complemento",
        table: {
          type: {
            summary: "React.ReactNode",
          },
        },
      },
      width: {
        control: "text",
        description: "largura do Card",
        table: {
          defaultValue: {
            summary: 'O padrão é de 100%',
          },
          type: {
            summary: "number | string",
          },
        },
      },
      onClick: {
        action: "clicked",
        description: "Função para capturar evento de clique",
        table: {
        type: {
          summary: "function",
        },
      },
      },
      loading: {
        control: "boolean",
        description: "Esta carregando?",
        table: {
          type: {
            summary: "boolean",
          },
        },
      },
      colorText: {
          control: "color",
          description: "Cor do texto do Card",
          table: {
            type: {
              summary: "string",
            },
      },
      },
      colorIcon: {
          control: "color",
          description: "Cor do icone do Card",
          table: {
            type: {
              summary: "string",
            },
          },
      },
      style: {
        control: "object",
        description: "Estilização do Card",
        table: {
          type: {
            summary: "React.CSSProperties",
          },
        },
      },
    },
} as Meta;

const Template: Story<CardProps> = (args) => (
    <Card {...args}>Escreve aqui</Card>
);

export const Shadow = Template.bind({});
Shadow.args = {
    type: "shadow",
};

Shadow.parameters = {
  docs: {
    source:{
      code:`<Card
      type="shadow"
    />`
    }
  }
};

export const Button = Template.bind({});
Button.args = {
    type: "button",
    text: "Olá",
    onClick: () => action("click"),
};

Button.parameters = {
  docs: {
    source:{
      code:`<Card
      type="button"
      text="Olá"
      onClick={() => {}}
    />`
    }
  }
};

export const MinShadow = Template.bind({});
MinShadow.args = {
    type: "min-shadow",
};

MinShadow.parameters = {
  docs: {
    source:{
      code:`<Card
      type="min-shadow"
    />`
    }
  }
};

export const Icon = Template.bind({});
Icon.args = {
    type: "button",
    text: "Olá",
    icon: faPhone,
    onClick: () => action("click"),
};

Icon.parameters = {
  docs: {
    source:{
      code:`<Card
      type="button"
      text="Olá"
      icon={faPhone}
      onClick={() => {}}
    />`
    }
  }
};

export const SizeIcon = Template.bind({});
SizeIcon.args = {
    type: "button",
    text: "Olá",
    icon: faPhone,
    sizeIcon: "lg",
    onClick: () => action("click"),
};

SizeIcon.parameters = {
  docs: {
    source:{
      code:`<Card
      type="button"
      text="Olá"
      icon={faPhone}
      sizeIcon="lg"
      onClick={() => {}}
    />`
    }
  }
};

export const Width = Template.bind({});
Width.args = {
    type: "shadow",
    text: "Olá",
    width: "50",
};

Width.parameters = {
  docs: {
    source:{
      code:`<Card
      type="shadow"
      text="Olá"
      width="50"
      onClick={() => {}}
    />`
    }
  }
};

export const Loading = Template.bind({});
Loading.args = {
    type: "shadow",
    text: "Olá",
    loading: true,
};

Loading.parameters = {
  docs: {
    source:{
      code:`<Card
      type="shadow"
      text="Olá"
      loading={true}
    />`
    }
  }
};

export const CardWithComplement = Template.bind({});
CardWithComplement.args = {
    type: "border",
    text: "Escreve Aqui",
    complement: <p style={{ cursor: "pointer" }}> Complement </p>,
};

CardWithComplement.parameters = {
    docs: {
        source: {
            code: `<Card
      type="shadow"
      text="Escreve Aqui"
      component={<p style={{ cursor: "pointer" }}> Complement </p>}
    />`,
        },
    },
};

export const Colors = Template.bind({});
Colors.args = {
    type: "button",
    text: "Olá",
    icon: faPhone,
    colorIcon: "blue",
    colorText: "green",
    onClick: () => action("click"),
};

Colors.parameters = {
  docs: {
    source:{
      code:`<Card
      type="button"
      text="Olá"
      icon={faPhone}
      colorIcon="blue"
      colorText="green"
      onClick={() => {}}
    />`
    }
  }
};
