import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";
import { action } from "@storybook/addon-actions";
import { ButtonMain } from "quero-components-web";
import { ButtonProps } from "./Interface";
import "quero-components-web/dist/index.css";
import { faPhone, faTimes } from "@fortawesome/pro-solid-svg-icons";

export default {
  title: "Example/ButtonMain",
  component: ButtonMain,
  argTypes: {
    onClick: {
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
    colorText: {
      control: "color",
    },
    colorBackground: {
      control: "color",
    },
    colorIcon: {
      control: "color",
    },
    hoverBackgroundColor: {
      control: "color",
    },
    hoverTextColor: {
      control: "color",
    },
    typeContent: {
      control: {
        type: "inline-radio",
        options: ["icon", "notification", "button"],
      },
    },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => <ButtonMain {...args} />;

export const Default = Template.bind({});
Default.args = {
  textFirst: "Clique",
  textEnd: "aqui",
  onClick: action("click"),
};

export const Secondary = Template.bind({});
Secondary.args = {
  textFirst: "Clique",
  textEnd: "aqui",
  onClick: action("click"),
  secondary: true,
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  textFirst: "Clique",
  textEnd: "aqui",
  onClick: action("click"),
  tertiary: true,
};

export const FirstStrong = Template.bind({});
FirstStrong.args = {
  textFirst: "Clique",
  textEnd: "aqui",
  onClick: action("click"),
  firstStrong: true,
};

export const Strong = Template.bind({});
Strong.args = {
  textFirst: "Clique",
  textEnd: "aqui",
  onClick: action("click"),
  strong: true,
};

export const NotStrong = Template.bind({});
NotStrong.args = {
  textFirst: "Clique",
  textEnd: "aqui",
  onClick: action("click"),
  notStrong: true,
};

export const Loading = Template.bind({});
Loading.args = {
  textFirst: "Clique",
  textEnd: "aqui",
  loading: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  textFirst: "Clique",
  textEnd: "aqui",
  disabled: true,
};

export const BackPurple = Template.bind({});
BackPurple.args = {
  textFirst: "Clique",
  textEnd: "aqui",
  backPurple: true,
};

export const NoBorder = Template.bind({});
NoBorder.args = {
  textFirst: "Clique",
  textEnd: "aqui",
  noBorder: true,
};

export const Size = Template.bind({});
Size.args = {
  textFirst: "Clique",
  textEnd: "aqui",
  size: "mini",
};

export const ColorText = Template.bind({});
ColorText.args = {
  textFirst: "Clique",
  textEnd: "aqui",
  colorText: "black",
};

export const ColorBackground = Template.bind({});
ColorBackground.args = {
  textFirst: "Clique",
  textEnd: "aqui",
  colorText: "white",
  colorBackground: "black",
};

export const HoverColor = Template.bind({});
HoverColor.args = {
  textFirst: "Clique",
  textEnd: "aqui",
  secondary: true,
  hoverBackgroundColor: "black",
  hoverTextColor: "white",
};

export const Icon = Template.bind({});
Icon.args = {
  textFirst: "Clique",
  textEnd: "aqui",
  icon: faPhone,
};

export const Width = Template.bind({});
Width.args = {
  textFirst: "Clique",
  textEnd: "aqui",
  width: 50,
};

export const Notification = Template.bind({});
Notification.args = {
  textFirst: "Clique",
  textEnd: "aqui",
  notification: true,
  amount: 2,
};

export const Rectangular = Template.bind({});
Rectangular.args = {
  textFirst: "Clique",
  textEnd: "aqui",
  secondary: true,
  tertiary: false,
  rectangular: true,
};

export const TypeContent = Template.bind({});
TypeContent.args = {
  typeContent: "icon",
  colorBackground: "red",
  colorIcon: "black",
  icon: faTimes,
  rectangular: true,
  width: 10,
};
