import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";
import { ButtonMain, Modal } from "quero-components-web";
import { ModalProps } from "./Interface";
import "quero-components-web/dist/index.css";
import { action } from "@storybook/addon-actions";

export default {
    title: "Example/Modal",
    component: Modal,
} as Meta;

const Template: Story<ModalProps> = (args) => (
    <Modal {...args}>Escreva aqui</Modal>
);

export const Default = Template.bind({});
Default.args = {
    open: true,
    title: "teste",
    closeOnDimerClick: false,
    onClose: action("fechar"),
};

export const Actions = Template.bind({});
Actions.args = {
    open: true,
    title: "teste",
    actions: (
        <div>
            <ButtonMain textFirst="click aqui" />{" "}
        </div>
    ),
    onClose: action("fechar"),
};

export const OnBack = Template.bind({});
OnBack.args = {
    open: true,
    title: "teste",
    onBack: action('voltar'),
    onClose: action("fechar"),
};

export const Loading = Template.bind({});
Loading.args = {
    open: true,
    loading: true,
    title: 'teste',
    onClose: action("fechar"),
};

export const Width = Template.bind({});
Width.args = {
    open: true,
    witdh: 50,
    title: 'teste',
    onClose: action("fechar"),
};
