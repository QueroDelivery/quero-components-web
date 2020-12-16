import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";
import { Dropdown } from "quero-components-web";
import { Props } from "./Interface";

import "quero-components-web/dist/index.css";

export default {
    title: "Example/Dropdown",
    component: Dropdown,
} as Meta;

const Template: Story<Props> = (args) => <Dropdown {...args} />;

const options = [
    { key: "1", text: "1", value: "1" },
    { key: "2", text: "2", value: "2" },
    { key: "3", text: "3", value: "3" },
    { key: "4", text: "4", value: "4" },
    { key: "5", text: "5", value: "5" },
    { key: "6", text: "6", value: "6" },
    { key: "7", text: "7", value: "7" },
    { key: "teste", text: "teste", value: "teste" },
];

export const Default = Template.bind({});
Default.args = {
    options: options,
    placeholder: "Selecione",
    onChange: (_ev, data) => {
        console.log(data.value);
    },
};

export const Brand = Template.bind({});
Brand.args = {
    options: options,
    placeholder: "Selecione",
    brand: true,
};

export const Search = Template.bind({});
Search.args = {
    options: options,
    placeholder: "Selecione",
    brand: true,
    search: true,
};

export const Clearable = Template.bind({});
Clearable.args = {
    options: options,
    placeholder: "Selecione",
    brand: true,
    clearable: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
    options: options,
    placeholder: "Selecione",
    brand: true,
    disabled: true,
};

export const Loading = Template.bind({});
Loading.args = {
    options: options,
    placeholder: "Selecione",
    brand: true,
    loading: true,
};

export const TextAlign = Template.bind({});
TextAlign.args = {
    options: options,
    placeholder: "Selecione",
    brand: true,
    textAlign: "center",
};

export const Multiple = Template.bind({});
Multiple.args = {
    options: options,
    placeholder: "Selecione",
    brand: true,
    multiple: true,
};

export const Label = Template.bind({});
Label.args = {
    options: options,
    placeholder: "Selecione",
    brand: true,
    label: "Teste",
};

export const Erro = Template.bind({});
Erro.args = {
    options: options,
    placeholder: "Selecione",
    brand: true,
    errorMessage: "errado",
};
