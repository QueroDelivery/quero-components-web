import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";
import { action } from "@storybook/addon-actions";
import { TextArea } from "quero-components-web";
import { TextAreaProps } from "./Interface";
import "quero-components-web/dist/index.css";

export default {
    title: "Components/TextArea", 
    parameters: {
      component: TextArea,
      componentSubtitle: "TextArea padronizado do HTML, recebendo todas as suas propriedades", 
    },
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
        description: "Deseja ter a informação de quantidade de quantos caracteres estão dentro do TextArea?",
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
        description: "Estilização do Título",
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
    label: "Título do TextArea",
    onChange: action("mudar valor"),
};

export const LengthInfo = Template.bind({});
LengthInfo.args = {
    maxLength: 400,
    lengthInfo: true,
    value: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
};

export const ErrorMessage = Template.bind({});
ErrorMessage.args = {
    errorMessage: "Erro",
    onChange: action("mudar valor"),
};

export const Width = Template.bind({});
Width.args = {
    width: "50%",
    onChange: action("mudar valor"),
    value: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
};

export const Height = Template.bind({});
Height.args = {
    height: 200,
    onChange: action("mudar valor"),
    value: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance."
};

export const Colors = Template.bind({});
Colors.args = {
    label: "Título do TextArea",
    labelColor: "blue",
    textColor: "green",
    onChange: action("mudar valor"),
    value: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
};