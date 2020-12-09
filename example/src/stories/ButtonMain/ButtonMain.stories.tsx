import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions'
import { ButtonMain } from 'quero-components-web';
import { ButtonProps } from './Interface'
import 'quero-components-web/dist/index.css'
import { faPhone } from '@fortawesome/pro-solid-svg-icons';

export default {
    title: 'Example/ButtonMain',
    component: ButtonMain,
    argTypes: {
        onClick: {
            action: 'clicked'
        },
        size: {
            control: {
                type: 'inline-radio',
                options: ['mini', 'tiny', 'small', 'medium', 'large', 'big', 'huge', 'massive']
            }
        },
        colorText: {
            control: 'color'
        },
        colorIcon: {
            control: 'color'
        }
    }
} as Meta;

const Template: Story<ButtonProps> = (args) => <ButtonMain {...args} />;

export const Default = Template.bind({});
Default.args = {
    textFirst: 'Clique',
    textEnd: 'aqui',
    onClick: action('click'),
};

export const Secondary = Template.bind({});
Secondary.args = {
    textFirst: 'Clique',
    textEnd: 'aqui',
    onClick: action('click'),
    secundary: true
};

export const Tertiary = Template.bind({});
Tertiary.args = {
    textFirst: 'Clique',
    textEnd: 'aqui',
    onClick: action('click'),
    tertiary: true
};

export const FirstStrong = Template.bind({});
FirstStrong.args = {
    textFirst: 'Clique',
    textEnd: 'aqui',
    onClick: action('click'),
    firstStrong: true
};

export const Strong = Template.bind({});
Strong.args = {
    textFirst: 'Clique',
    textEnd: 'aqui',
    onClick: action('click'),
    strong: true
};

export const NotStrong = Template.bind({});
NotStrong.args = {
    textFirst: 'Clique',
    textEnd: 'aqui',
    onClick: action('click'),
    notStrong: true
};

export const Loading = Template.bind({});
Loading.args = {
    textFirst: 'Clique',
    textEnd: 'aqui',
    loading: true
};

export const Disabled = Template.bind({});
Disabled.args = {
    textFirst: 'Clique',
    textEnd: 'aqui',
    disabled: true
};

export const BackPurple = Template.bind({});
BackPurple.args = {
    textFirst: 'Clique',
    textEnd: 'aqui',
    backPurple: true
};

export const NoBorder = Template.bind({});
NoBorder.args = {
    textFirst: 'Clique',
    textEnd: 'aqui',
    noBorder: true
};

export const Size = Template.bind({});
Size.args = {
    textFirst: 'Clique',
    textEnd: 'aqui',
    size: 'mini'
};

export const ColorText = Template.bind({});
ColorText.args = {
    textFirst: 'Clique',
    textEnd: 'aqui',
    colorText: 'black'
};

export const Icon = Template.bind({});
Icon.args = {
    textFirst: 'Clique',
    textEnd: 'aqui',
    icon: faPhone
};

export const Width = Template.bind({});
Width.args = {
    textFirst: 'Clique',
    textEnd: 'aqui',
    width: 50
};

export const Notification = Template.bind({});
Notification.args = {
    textFirst: 'Clique',
    textEnd: 'aqui',
    notification: true,
    amount: 2
};
