import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";
import { action } from "@storybook/addon-actions";
import { Card } from "quero-components-web";
import { CardProps } from "./Interface";
import "quero-components-web/dist/index.css";
import { faPhone } from "@fortawesome/pro-solid-svg-icons";

export default {
    title: "Example/Card",
    component: Card,
    argTypes: {
        onClick: {
            action: "clicked",
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
        },
        colorText: {
            control: "color",
        },
        colorIcon: {
            control: "color",
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

export const Colors = Template.bind({});
Colors.args = {
    type: "button",
    text: "olá",
    icon: faPhone,
    colorIcon: "blue",
    colorText: "green",
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
