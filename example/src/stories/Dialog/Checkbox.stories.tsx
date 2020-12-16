import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";
import { Dialog } from "quero-components-web";
import { DialogProps } from "./Interface";
import "quero-components-web/dist/index.css";
import { action } from "@storybook/addon-actions";

export default {
    title: "Example/Dialog",
    component: Dialog,
} as Meta;

const Template: Story<DialogProps> = (args) => (
    <Dialog {...args}>Escreva aqui</Dialog>
);

export const Default = Template.bind({});
Default.args = {
    open: true,
    onClose: action('fechar'),
};

export const Loading = Template.bind({});
Loading.args = {
    open: true,
    loading: true,
    onClose: action('fechar'),
};
