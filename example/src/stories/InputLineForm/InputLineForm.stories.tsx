import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";
import { InputLineForm } from "quero-components-web";
import { InputFormProps } from "./Interface";

import "quero-components-web/dist/index.css";

export default {
    title: "Example/InputLineForm",
    component: InputLineForm,
} as Meta;

const Template: Story<InputFormProps> = (args) => {
    return <InputLineForm {...args} />;
};

export const Default = Template.bind({});
Default.args = {
    label: 'teste',
    name: "",
    errors: "",
    register: null,
    validate: () => {},
    required: false,
    values: () => {},

    limit: 100,
    minimum: 1,
};
