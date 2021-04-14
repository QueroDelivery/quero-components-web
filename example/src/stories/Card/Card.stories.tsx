import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";
import { action } from "@storybook/addon-actions";
import { Card } from "quero-components-web";
import { CardProps } from "./Interface";
import "quero-components-web/dist/index.css";
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
            "min-shadow"
          ],
      },
        description: "Tipos do Card",
        table: {
          type: {
            summary: 'required | shadow | button | min-shadow',
          },
        },
      },
      text: {
        control: "text", 
        description: "Texto do Card",
        table: {
          type: {
            summary: "string",
          },
        },
      },
      icon: {
        control: "object",
        description: "Icone do Card",
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
      width: {
        control: "text", 
        description: "largura do Card",
        table: {
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
        description: "Recurso visual de carregamento",
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

export const Button = Template.bind({});
Button.args = {
    type: "button",
    text: "olá",
    onClick: () => action("click"),
};

export const MinShadow = Template.bind({});
MinShadow.args = {
    type: "min-shadow",
};

export const Icon = Template.bind({});
Icon.args = {
    type: "button",
    text: "olá",
    icon: faPhone,
    onClick: () => action("click"),
};

export const SizeIcon = Template.bind({});
SizeIcon.args = {
    type: "button",
    text: "olá",
    icon: faPhone,
    sizeIcon: "lg",
    onClick: () => action("click"),
};

export const Width = Template.bind({});
Width.args = {
    type: "shadow",
    text: "olá",
    width: "50",
};

export const Loading = Template.bind({});
Loading.args = {
    type: "shadow",
    text: "olá",
    loading: true,
};

export const Colors = Template.bind({});
Colors.args = {
    type: "button",
    text: "olá",
    icon: faPhone,
    colorIcon: "blue",
    colorText: "green",
    onClick: () => action("click"),
};