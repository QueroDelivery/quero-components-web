import React, { useState } from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";
import { action } from "@storybook/addon-actions";
import { Checkbox } from "quero-components-web";
import { InputProps } from "./Interface";
import "quero-components-web/dist/index.css";

export default {
    title: "Components/Checkbox",
    component: Checkbox,
    argTypes: {
    label: {
      control: "text",
      defaultValue: "Título do Checkbox",
      description: "Título do Checkbox",
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
      description: "Tamanho do CheckBox",
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
      description: "O Checkbox esta selecionado?",
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
  return <Checkbox {...args} onChange={() => setChecked(!checked)} checked={checked}/>
};

export const Default = Template.bind({});
Default.args = {
    checked: false,
    onChange: action("checked/notChecked"),
};

Default.parameters = {
  docs: {
    source:{
      code:`<Checkbox
      checked={false}
      onChange={() => {}}
    />`
    }
  }
};

export const Label = Template.bind({});
Label.args = {
    checked: false,
    label: "Título do Checkbox",
    labelStyle: { marginRight: 20 },
    onChange: action("checked/notChecked"),
};

Label.parameters = {
  docs: {
    source:{
      code:`<Checkbox
      checked={false}
      label="Título do Checkbox"
      labelStyle={{ marginRight: 20 }}
      onChange={() => {}}
    />`
    }
  }
};

export const SizeBox = Template.bind({});
SizeBox.args = {
    checked: true,
    label: "Título do Checkbox",
    sizeBox: "big",
    onChange: action("checked/notChecked"),
};

SizeBox.parameters = {
  docs: {
    source:{
      code:`<Checkbox
      checked={false}
      label="Título do Checkbox"
      sizeBox="big"
      onChange={() => {}}
    />`
    }
  }
};