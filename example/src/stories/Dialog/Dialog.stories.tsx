import React, { useState } from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";
import { ButtonMain, Dialog } from "@quero-delivery/quero-components-web";
import { DialogProps } from "./Interface";
import "@quero-delivery/quero-components-web/dist/index.css";
import { action } from "@storybook/addon-actions";

export default {
    title: "Components/Dialog",
    component: Dialog,
    argTypes: {
      open: {
        control: "boolean",
        description: "Abre o Dialog",
        table: {
          type: {
            summary: "required | boolean",
          },
        },
      },
      onClose: {
        control: "function",
        action: "clicked",
        description: "Fecha o Dialog",
        table: {
          type: {
            summary: "required | function",
          },
        },
      },
      loading: {
        control: "boolean",
        description: "Esta carregando?",
        table: {
          type: {
            summary: "boolean",
          },
        },
      },
      maxHeight: {
        control: "text",
        description: "Altura máxima do Dialog",
        table: {
          defaultValue: {
            summary: "Opções",
            detail: "String | Number (definido como px)",
          },
          type: {
            summary: "number | string",
          },
        },
      },
    }
} as Meta;


const Template: Story<DialogProps> = (args) => {
    const [isOpen, setIsOpen] = useState(false)
    return (
      <>
        <ButtonMain textFirst='Abrir' onClick={() => setIsOpen(!isOpen)} />
        {isOpen &&
          <Dialog {...args} open={isOpen} onClose={() => setIsOpen(!isOpen)}>
          Lorem Ipsum
          "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
          "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."
        </Dialog>}
      </>
    )
};

export const Default = Template.bind({});
Default.args = {
    open: false,
    onClose: action("fechar"),
};

Default.parameters = {
  docs: {
    source:{
      code:`<Dialog
      open={false}
      onClose={() => {}}
    />`
    }
  }
};

export const Loading = Template.bind({});
Loading.args = {
    open: false,
    loading: true,
    onClose: action("fechar"),
};

Loading.parameters = {
  docs: {
    source:{
      code:`<Dialog
      open={false}
      loading={true}
      onClose={() => {}}
    />`
    }
  }
};

export const MaxHeight = Template.bind({});
MaxHeight.args = {
  open: false,
  maxHeight:'80%',
  onClose: action("fechar"),
};

MaxHeight.parameters = {
  docs: {
    source:{
      code:`<Dialog
      open={false}
      maxHeight='80%
      onClose={() => {}}
    />`
    }
  }
};

export const Title = Template.bind({});
Title.args = {
  open: false,
  title: 'Olá',
  onClose: action("fechar"),
};

Title.parameters = {
  docs: {
    source:{
      code:`<Dialog
      open={false}
      title='Olá'
      onClose={() => {}}
    />`
    }
  }
};
