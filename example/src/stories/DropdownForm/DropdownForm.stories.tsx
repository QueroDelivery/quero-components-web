import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";
import { DropdownForm } from "quero-components-web";
import { DropdownFormProps } from "./Interface";

import "quero-components-web/dist/index.css";

export default {
    title: "Example/DropdownForm",
    component: DropdownForm,
} as Meta;

const Template: Story<DropdownFormProps> = (args) => {
    return <DropdownForm {...args} />;
};

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
    name: "",
    errors: "",
    register: null,
    setValue: () => {},
    validate: () => {},
    required: false,
    clearError: () => {},
    options: options,
    line: true,
};
