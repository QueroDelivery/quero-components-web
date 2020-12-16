import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";
import { action } from "@storybook/addon-actions";
import { Accordion } from "quero-components-web";
import { AccordionProps } from "./Interface";
import "quero-components-web/dist/index.css";
import { faPhone } from "@fortawesome/pro-solid-svg-icons";

export default {
    title: "Example/Accordion",
    component: Accordion,
    argTypes: {
        onChange: {
            action: "clicked",
        },
        colorTitle: {
            control: "color",
        },
        colorSubtitle: {
            control: "color",
        },
        colorValue: {
            control: "color",
        },
        colorIcon: {
            control: "color",
        },
    },
} as Meta;

const Template: Story<AccordionProps> = (args) => <Accordion {...args}>Escreve aqui</Accordion>;

export const Default = Template.bind({});
Default.args = {
    title: "teste",
    open: false,
    onChange: action("abrir/fechar"),
};

export const Secundary = Template.bind({});
Secundary.args = {
    title: "teste",
    open: false,
    secundary: true,
    onChange: action("abrir/fechar"),
};

export const Subtitle = Template.bind({});
Subtitle.args = {
    title: "Teste",
    subtitle: 'Olá',
    open: false,
    secundary: false,
    onChange: action("abrir/fechar"),
};

export const Value = Template.bind({});
Value.args = {
    title: "Teste",
    value: "RS10,00",
    open: false,
    secundary: false,
    onChange: action("abrir/fechar"),
};

export const Icon = Template.bind({});
Icon.args = {
    title: "Teste",
    open: false,
    secundary: false,
    icon: faPhone,
    onChange: action("abrir/fechar"),
};

export const Colors = Template.bind({});
Colors.args = {
    title: "Teste",
    subtitle: 'olá',
    value: 'RS10,00',
    open: false,
    secundary: false,
    icon: faPhone,
    colorIcon: 'blue',
    colorSubtitle: 'green',
    colorTitle: 'red',
    colorValue: 'orange',
    onChange: action("abrir/fechar"),
};

export const Width = Template.bind({});
Width.args = {
    title: "Teste",
    open: false,
    secundary: false,
    width: 50,
    onChange: action("abrir/fechar"),
};

export const fontSizeTitle = Template.bind({});
fontSizeTitle.args = {
    title: "Teste",
    open: false,
    secundary: false,
    fontSizeTitle: 10,
    onChange: action("abrir/fechar"),
};
