import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";
import { action } from "@storybook/addon-actions";
import { TextArea } from "quero-components-web";
import { TextAreaProps } from "./Interface";
import "quero-components-web/dist/index.css";

export default {
    title: "Example/TextArea",
    component: TextArea,
    argTypes: {
        onChange: {
            action: "changed",
        },
        iconPosition: {
            control: {
                type: "inline-radio",
                options: ["left", "right"],
            },
        },
        textColor: {
            control: "color",
        },
        labelColor: {
            control: "color",
        },
    },
} as Meta;

const Template: Story<TextAreaProps> = (args) => <TextArea {...args} />;

export const Default = Template.bind({});
Default.args = {
    onChange: action("mudar valor"),
};

export const Label = Template.bind({});
Label.args = {
    label: "teste",
    onChange: action("mudar valor"),
};

export const Width = Template.bind({});
Width.args = {
    width: "50%",
    onChange: action("mudar valor"),
};

export const Height = Template.bind({});
Height.args = {
    height: 200,
    onChange: action("mudar valor"),
};

export const Colors = Template.bind({});
Colors.args = {
    label: "teste",
    labelColor: "blue",
    textColor: "green",
    onChange: action("mudar valor"),
};

export const ErrorMessage = Template.bind({});
ErrorMessage.args = {
    errorMessage: "errado",
    onChange: action("mudar valor"),
};

export const InfoLenght = Template.bind({});
InfoLenght.args = {
    maxLength: 400,
    lengthInfo: true,
    value: 'oi',
}
