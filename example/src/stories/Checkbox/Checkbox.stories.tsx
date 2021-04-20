import React from "react";
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
      defaultValue: "Titulo do Checkbox",
      description: "Titulo do Checkbox",
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
      description: "Seleção do Checkbox",
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

const Template: Story<InputProps> = (args) => <Checkbox {...args} />;

export const Default = Template.bind({});
Default.args = {
    checked: false,
    onChange: action("checked/notChecked"),
};

export const Label = Template.bind({});
Label.args = {
    checked: false,
    label: "teste",
    labelStyle: { marginRight: 20 },
    onChange: action("checked/notChecked"),
};

export const SizeBox = Template.bind({});
SizeBox.args = {
    checked: true,
    label: "teste",
    sizeBox: "big",
    onChange: action("checked/notChecked"),
};
