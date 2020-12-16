import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";
import { action } from "@storybook/addon-actions";
import { Radio } from "quero-components-web";
import { InputProps } from "./Interface";
import "quero-components-web/dist/index.css";

export default {
    title: "Example/Radio",
    component: Radio,
    argTypes: {
        onChange: {
            action: "clicked",
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
        },
    },
} as Meta;

const Template: Story<InputProps> = (args) => <Radio {...args} />;

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
