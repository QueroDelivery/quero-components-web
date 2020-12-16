import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";
import { MoreLess } from "quero-components-web";
import { MoreLessProps } from "./Interface";
import "quero-components-web/dist/index.css";
import { action } from "@storybook/addon-actions";

export default {
    title: "Example/MoreLess",
    component: MoreLess,
    argTypes: {
        size: {
            control: {
                type: "inline-radio",
                options: ["small", "medium", "big"],
            },
        },
    },
} as Meta;

const Template: Story<MoreLessProps> = (args) => <MoreLess {...args} />;

export const Default = Template.bind({});
Default.args = {
    value: 0,
    more: action("adicioar"),
    less: action("remover"),
};

export const OnChange = Template.bind({});
OnChange.args = {
    value: 4,
    more: action("adicioar"),
    less: action("remover"),
    onChange: action("mudar valor"),
};

export const Limit = Template.bind({});
Limit.args = {
    value: 10,
    more: action("adicioar"),
    less: action("remover"),
    limit: 10,
};

export const Minimum = Template.bind({});
Minimum.args = {
    value: 2,
    more: action("adicioar"),
    less: action("remover"),
    minimum: 2,
};

export const Size = Template.bind({});
Size.args = {
    value: 2,
    more: action("adicioar"),
    less: action("remover"),
    size: "medium",
};

export const Disabled = Template.bind({});
Disabled.args = {
    value: 2,
    more: action("adicioar"),
    less: action("remover"),
    disabled: true,
};
