import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";
import { action } from "@storybook/addon-actions";
import { InputLine } from "quero-components-web";
import { InputProps } from "./Interface";
import "quero-components-web/dist/index.css";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

export default {
    title: "Components/InputLine",
    parameters: {
      component: InputLine,
      componentSubtitle: "Input padronizado do HTML, recebendo todas as suas propriedades", 
    },
    argTypes: {
        label: {
          control: "text",
          description: "Título do InputLine",
          defaultValue: "Título do InputLine",
          table: {
            type: {
              summary: "string",
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
          description: "Largura do InputLine",
          defaultValue: "100%",
          table: {
            defaultValue: {
              summary: "O padrão é 100%",
            },
            type: {
              summary: "string", 
            },
          },
        },
        inputRef: {
          control: "string",
          description: "Referencia do InputLine",
          table: {
            type: {
              summary: "RefObject",
            },
          },
        },
        action: {
          control: "object",
          description: "Ação do InputLine",
          table: {
            defaultValue: {
              summary: "Ação",
              detail: "Podendo adicionar um icone a esquerda ou a direita recebendo o evento de click.",
            },
            type: {
              summary: "Object",
            },
          },
        },
        onChange: {
            action: "changed",
            description: "Função para manipular o InputLine",
            table: {
            type: {
                summary: "function",
            },
          },
        },
        icon: {
          control: "object", 
          description: "Icone do InputLine",
          table: {
            type: {
                summary: "IconDefinition",
            },
          },
        },
        iconPosition: {
            control: {
                type: "inline-radio",
                options: ["left", "right"],
            },
            description: "Posição do icone no InputLine",
            table: {
            type: {
                summary: "left | right",
            },
          },
        },
        textColor: {
            control: "color",
            description: "Cor do InputLine",
            table: {
              type: {
                  summary: "string",
              },
            },
        },
        iconColor: {
            control: "color",
            description: "Cor do icone do InputLine",
            table: {
              type: {
                  summary: "string",
              },
            },
        },
        containerStyle: {
          control: "object",
          description: "Estilização do container do InputLine",
          table: {
            type: {
              summary: "React.CSSProperties",
            },
          },
        },
        labelStyle: { 
          control: "object",
          description: "Estilização do label",
          table: {
            type: {
              summary: "React.CSSProperties",
            },
          },
        },
    },
} as Meta;

const Template: Story<InputProps> = (args) => <InputLine {...args} />;

export const Default = Template.bind({});
Default.args = {
    label: "Título do InputLine",
    onChange: action("mudar valor"),
};

Default.parameters = {
  docs: {
    source:{
      code:`<InputLine 
      label="Título do InputLine"
      onChange={() => {}}
    />`
    }
  }
};

export const ErrorMessage = Template.bind({});
ErrorMessage.args = {
    label: "Título do InputLine",
    placeholder: "escreva",
    errorMessage: "errado",
    onChange: action("mudar valor"),
    action: undefined
};

ErrorMessage.parameters = {
  docs: {
    source:{
      code:`<InputLine 
      label="Título do InputLine"
      placeholder="escreva"
      errorMessage="errado"
      onChange={() => {}}
    />`
    }
  }
};

export const Width = Template.bind({});
Width.args = {
    label: "Título do InputLine",
    placeholder: "escreva",
    width: "50%",
    onChange: action("mudar valor"),
    action: undefined
};

Width.parameters = {
  docs: {
    source:{
      code:`<InputLine 
      label="Título do InputLine"
      placeholder="escreva"
      width="50%"
      onChange={() => {}}
    />`
    }
  }
};

export const Action = Template.bind({});
Action.args = {
    label: "Título do InputLine",
    placeholder: "escreva",
    action: {
        icon: faTimes,
        onClick: action("acao ao clicar"),
        position: "right",
    },
    onChange: action("mudar valor"),
};

Action.parameters = {
  docs: {
    source:{
      code:`<InputLine 
      label="Título do InputLine"
      placeholder="escreva"
      action={
        icon={faTimes}
        onClick={() => {}}
        position="right"
      }
      onChange={() => {}}
    />`
    }
  }
};

export const Icon = Template.bind({});
Icon.args = {
    label: "Título do InputLine",
    placeholder: "escreva",
    icon: faUser,
    onChange: action("mudar valor"),
    action: undefined
};

Icon.parameters = {
  docs: {
    source:{
      code:`<InputLine 
      label="Título do InputLine"
      placeholder="escreva"
      icone={faUser}
      onChange={() => {}}
    />`
    }
  }
}

export const IconPosition = Template.bind({});
IconPosition.args = {
    label: "Título do InputLine",
    placeholder: "escreva",
    icon: faUser,
    iconPosition: "left",
    onChange: action("mudar valor"),
    action: undefined
};

IconPosition.parameters = {
  docs: {
    source:{
      code:`<InputLine 
      label="Título do InputLine"
      placeholder="escreva"
      icon={faUser}
      iconPosition="left"
      onChange={() => {}}
    />`
    }
  }
};

export const Colors = Template.bind({});
Colors.args = {
    label: "Título do InputLine",
    placeholder: "escreva",
    textColor: "blue",
    iconColor: "green",
    icon: faUser,
    onChange: action("mudar valor"),
    action: undefined
};

Colors.parameters = {
  docs: {
    source:{
      code:`<InputLine 
      label="Título do InputLine"
      placeholder="escreva"
      textColor="blue"
      iconColor="green"
      icon={faUser}
      onChange={() => {}}
    />`
    }
  }
};