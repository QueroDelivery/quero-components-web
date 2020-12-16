import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";
import { Loader } from "quero-components-web";
import { LoaderProps } from "./Interface";
import "quero-components-web/dist/index.css";

export default {
    title: "Example/Loader",
    component: Loader,
    argTypes: {
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
        position: {
            control: {
                type: "inline-radio",
                options: [
                    'left',
                    'center',
                    'right'
                ],
            },
        },
        color: {
            control: {
                type: "color",
            },
        },
    },
} as Meta;

const Template: Story<LoaderProps> = (args) => <Loader {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Position = Template.bind({});
Position.args = {
    position: "left",
};

export const Size = Template.bind({});
Size.args = {
    size: "small",
};

export const Color = Template.bind({});
Color.args = {
    color: "blue",
};
