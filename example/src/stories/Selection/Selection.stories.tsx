import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";
import { action } from "@storybook/addon-actions";
import { Selection } from "@quero-delivery/quero-components-web";
import { SelectionProps } from "./Interface";
import "@quero-delivery/quero-components-web/dist/index.css";

export default {
    title: "Components/Selection",
    component: Selection,
    argTypes: {
        type: {
            control: {
                type: "inline-radio",
                options: [
                    "switch",
                    "toggle",
                    "activeInactive"
                ],
            },
            description: "Tipo do Select",
            defaultValue: {
                summary: 'O tipo padrão é o switch',
            },
            type: {
                summary: "required | switch | toggle | activeInactive",
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
            description: "Tamanho do Select",
            defaultValue: {
                summary: 'O tamanho padrão é o medium',
            },
            type: {
                summary: "mini | tiny | small | medium | large | big | huge | massive",
            },
        },
        checked: {
          control: "boolean",
          description: "Foi selecionado?",
          table: {
              type: {
                  summary: "boolean",
              },
          },
        },
        disabled: {
            control: "boolean",
            description: "O Selection esta suspenso/desabilitado?",
            table: {
                type: {
                  summary: "boolean",
                },
            },
        },
        selectionRef: {
            control: "string",
            description: "Referencia de uma seleção",
            table: {
                type: {
                    summary: "string",
                },
            },
        },
        onChange: {
            action: "clicked",
            description: "Função para manipular o Selection",
            table: {
            type: {
              summary: "function",
            },
          },
        },
    },
    parameters: {
      docs: {
        source: {
          type: 'code'
        }
      }
    }
} as Meta;

const Template: Story<SelectionProps> = (args) => <Selection {...args} />;

export const Switch = Template.bind({});
Switch.args = {
    checked: true,
    type: "switch",
    onChange: action("checked/notChecked"),
};

Switch.parameters = {
  docs: {
    source:{
      code:`<Selection
      checked={true}
      type="switch"
      onChange={() => {}}
    />`
    }
  }
};

export const Toggle = Template.bind({});
Toggle.args = {
    checked: false,
    type: "toggle",
    onChange: action("checked/notChecked"),
};

Toggle.parameters = {
  docs: {
    source:{
      code:`<Selection
      checked={false}
      type="toggle"
      onChange={() => {}}
    />`
    }
  }
};

export const ActiveInactive = Template.bind({});
ActiveInactive.args = {
    checked: false,
    type: "activeInactive",
    onChange: action("checked/notChecked"),
};

ActiveInactive.parameters = {
  docs: {
    source:{
      code:`<Selection
      checked={false}
      type="activeInactive"
      onChange={() => {}}
    />`
    }
  }
};

export const Size = Template.bind({});
Size.args = {
    checked: false,
    type: "switch",
    size: "big",
    onChange: action("checked/notChecked"),
};

Size.parameters = {
  docs: {
    source:{
      code:`<Selection
      checked={false}
      type="switch"
      size="big"
      onChange={() => {}}
    />`
    }
  }
};

export const Disabled = Template.bind({});
Disabled.args = {
    checked: false,
    type: "activeInactive",
    disabled: true,
    onChange: action("checked/notChecked"),
};

Disabled.parameters = {
  docs: {
    source:{
      code:`<Selection
      checked={false}
      type="activeInactive"
      disabled={true}
      onChange={() => {}}
    />`
    }
  }
};
