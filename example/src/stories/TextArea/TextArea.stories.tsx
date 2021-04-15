import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";
import { action } from "@storybook/addon-actions";
import { TextArea } from "quero-components-web";
import { TextAreaProps } from "./Interface";
import "quero-components-web/dist/index.css";

export default {
    title: "Components/TextArea", 
    subtitle: "TextArea customizado",
    component: TextArea,
    argTypes: {
      label: {
        control: "text",
        description: "Título do TextArea",
        table: {
          type: {
            summary: "string",
          },
        },
      },
      lengthInfo: {
        control: "boolean",
        description: "Quantidade de caracteres dentro do TextArea",
        table: {
          type: {
            summary: "boolean | number",
          },
        },
      },
      errorMessage: {
        control: "text",
        description: "Mensagem de erro",
        table: {
          type: {
            summary: "string",
          },
        },
      },
      width: {
        control: "text",
        description: "Largura do TextArea",
        table: {
          type: {
            summary: "string", 
          },
        },
      },
      height: {
        control: "text", 
        description: "Altura do TextArea",
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
      textAreaRef: {
        control: "string",
        description: "Controle de entrada de texto",
        table: {
          type: {
            summary: "RefObject",
          },
        },
      },
      labelColor: {
        control: "color",
        description: "Cor do título do TextArea",
        table: {
          type: {
            summary: "string",
          },
        },
      },
      textColor: {
        control: "color",
        description: "Cor do texto no TextArea",
        table: {
          type: {
            summary: "string",
          },
        },
      }, 
      errorColor: {
        control: "color",
        description: "Cor do erro", 
        table: {
          type: {
            summary: "string",
          },
        },
      },
      containerStyle: {
        control: "object",
        description: "Estilização do container do TextArea",
        table: {
          type: {
            summary: "React.CSSProperties",
          },
        },
      },
      labelStyle: { 
        control: "object",
        description: "Estilização do titulo",
        table: {
          type: {
            summary: "React.CSSProperties",
          },
        },
      },
      onChange: {
          action: "changed",
          description: "Função para manipular o TextArea",
          table: {
          type: {
            summary: "function",
          },
        },
      },
    },
} as Meta;

const Template: Story<TextAreaProps> = (args) => <TextArea {...args}/>;

export const Default = Template.bind({});
Default.args = {
    onChange: action("mudar valor"),
};

export const Label = Template.bind({});
Label.args = {
    label: "teste",
    onChange: action("mudar valor"),
};

export const LengthInfo = Template.bind({});
LengthInfo.args = {
    maxLength: 400,
    lengthInfo: true,
    value: 'oi',
};

export const ErrorMessage = Template.bind({});
ErrorMessage.args = {
    errorMessage: "errado",
    onChange: action("mudar valor"),
};

export const Width = Template.bind({});
Width.args = {
    width: "50%",
    onChange: action("mudar valor"),
};

export const Height = Template.bind({});
Height.args = {
    height: 200,
    onChange: action("mudar valor"),
};

export const Colors = Template.bind({});
Colors.args = {
    label: "teste",
    labelColor: "blue",
    textColor: "green",
    onChange: action("mudar valor"),
};