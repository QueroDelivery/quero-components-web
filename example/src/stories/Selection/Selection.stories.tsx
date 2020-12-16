import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";
import { action } from "@storybook/addon-actions";
import { Selection } from "quero-components-web";
import { SelectionProps } from "./Interface";
import "quero-components-web/dist/index.css";

export default {
    title: "Example/Selection",
    component: Selection,
    argTypes: {
        onChange: {
            action: "clicked",
        },
        size: {
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

const Template: Story<SelectionProps> = (args) => <Selection {...args} />;

export const Switch = Template.bind({});
Switch.args = {
    checked: true,
    type: "switch",
    onChange: action("checked/notChecked"),
};

export const Toggle = Template.bind({});
Toggle.args = {
    checked: false,
    type: 'toggle',
    onChange: action("checked/notChecked"),
};

export const ActiveInactive = Template.bind({});
ActiveInactive.args = {
    checked: false,
    type: 'activeInactive',
    onChange: action("checked/notChecked"),
};

export const Size = Template.bind({});
Size.args = {
    checked: false,
    type: 'switch',
    size: 'big',
    onChange: action("checked/notChecked"),
};


export const Disabled = Template.bind({});
Disabled.args = {
    checked: false,
    type: 'activeInactive',
    disabled: true,
    onChange: action("checked/notChecked"),
};
