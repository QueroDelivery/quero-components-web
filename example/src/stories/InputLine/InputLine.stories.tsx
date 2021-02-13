import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";
import { action } from "@storybook/addon-actions";
import { InputLine } from "quero-components-web";
import { InputProps } from "./Interface";
import "quero-components-web/dist/index.css";
import { faUser } from "@fortawesome/pro-solid-svg-icons";
import { faTimes } from "@fortawesome/pro-light-svg-icons";

export default {
    title: "Example/InputLine",
    component: InputLine,
    argTypes: {
        onChange: {
            action: "changed",
        },
        iconPosition: {
            control: {
                type: "inline-radio",
                options: ["left", "right"],
            },
        },
        textColor: {
            control: "color",
        },
        iconColor: {
            control: "color",
        },
    },
} as Meta;

const Template: Story<InputProps> = (args) => <InputLine {...args} />;

export const Default = Template.bind({});
Default.args = {
    label: "teste",
    placeholder: "escreva",
    onChange: action("mudar valor"),
    type: "date",
};

export const Icon = Template.bind({});
Icon.args = {
    label: "teste",
    placeholder: "escreva",
    icon: faUser,
    onChange: action("mudar valor"),
};

export const IconPosition = Template.bind({});
IconPosition.args = {
    label: "teste",
    placeholder: "escreva",
    icon: faUser,
    iconPosition: "left",
    onChange: action("mudar valor"),
};

export const Action = Template.bind({});
Action.args = {
    label: "teste",
    placeholder: "escreva",
    action: {
        icon: faTimes,
        onClick: action("acao ao clicar"),
        position: "right",
    },
    onChange: action("mudar valor"),
};

export const Colors = Template.bind({});
Colors.args = {
    label: "teste",
    placeholder: "escreva",
    textColor: "blue",
    iconColor: "green",
    icon: faUser,
    onChange: action("mudar valor"),
};

export const Width = Template.bind({});
Width.args = {
    label: "teste",
    placeholder: "escreva",
    width: "50%",
    onChange: action("mudar valor"),
};

export const ErrorMessage = Template.bind({});
ErrorMessage.args = {
    label: "teste",
    placeholder: "escreva",
    errorMessage: "errado",
    onChange: action("mudar valor"),
};
