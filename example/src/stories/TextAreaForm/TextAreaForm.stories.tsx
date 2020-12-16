import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";
import { TextAreaForm } from "quero-components-web";
import { TextAreaFormProps } from "./Interface";

import "quero-components-web/dist/index.css";

export default {
    title: "Example/TextAreaForm",
    component: TextAreaForm,
} as Meta;

const Template: Story<TextAreaFormProps> = (args) => {
    return <TextAreaForm {...args} />;
};

export const Default = Template.bind({});
Default.args = {
    label: "teste",
    name: "",
    errors: "",
    register: null,
    validate: () => {},
    required: false,

    limit: 100,
    minimum: 1,
};
