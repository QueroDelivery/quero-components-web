import React, { useState } from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";
import { action } from "@storybook/addon-actions";
import { Radio } from "@quero-delivery/quero-components-web";
import { InputProps } from "./Interface";
import "@quero-delivery/quero-components-web/dist/index.css";

export default {
    title: "Components/Radio",
    component: Radio,
      argTypes: {
        label: {
        control: "text",
        defaultValue: "Título do Radio",
        description: "Título do Radio",
        table: {
          type: {
            summary: "string",
          },
        },
      },
      sizeBox: {
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
        description: "Tamanho do Radio",
        type: {
        summary: "mini | tiny | small | medium | large | big | huge | massive",
      },
      },
      onChange: {
          action: "clicked",
          description: "Função para capturar evento de clique",
          table: {
          type: {
            summary: "function",
          },
        },
      },
      checked: {
        control: "boolean",
        description: "O Radio esta selecionado?",
        table: {
          type: {
            summary: "bollean",
          },
        },
      },
      labelStyle: {
        control: "object",
        description: "Estilização do Checkbox",
        table: {
          type: {
            summary: "React.CSSProperties",
          },
        },
      },
    },
} as Meta;

const Template: Story<InputProps> = (args) => {
  const [checked, setChecked] = useState(false)
  return <Radio {...args} onChange={() => setChecked(!checked)} checked={checked}/>
};

export const Default = Template.bind({});
Default.args = {
    checked: false,
    onChange: action("checked/notChecked"),
};

Default.parameters = {
  docs: {
    source:{
      code:`<Radio
      checked={false}
      onChange={() => {}}
    />`
    }
  }
};

export const Label = Template.bind({});
Label.args = {
    checked: false,
    label: "Título do Radio",
    labelStyle: { marginRight: 20 },
    onChange: action("checked/notChecked"),
};

Label.parameters = {
  docs: {
    source:{
      code:`<Radio
      checked={false}
      label="Título do Radio"
      labelStyle={{ marginRight: 20 }}
      onChange={() => {}}
    />`
    }
  }
};

export const SizeBox = Template.bind({});
SizeBox.args = {
    checked: true,
    label: "Título do Radio",
    sizeBox: "big",
    onChange: action("checked/notChecked"),
};

SizeBox.parameters = {
  docs: {
    source:{
      code:`<Radio
      checked={true}
      label="Título do Radio"
      sizeBox="big"
      onChange={() => {}}
    />`
    }
  }
};
