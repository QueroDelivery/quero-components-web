import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";
import { ButtonMain, Modal } from "quero-components-web";
import { ModalProps } from "./Interface";
import "quero-components-web/dist/index.css";
import { action } from "@storybook/addon-actions";
import { useState } from "@storybook/client-api";

export default {
    title: "Components/Modal",
    component: Modal,
    argTypes: {
        title: {
          control: "text", 
          description: "Titulo do Modal",
          table: {
            type: {
              summary: "string",
            },
          },
        },
        actions: {
          control: "string",
          description: "Ações que o Modal pode ter quando esta aberto",
          table: {
            type: {
              summary: "React.ReactNode",
            },
          },
        },
        loading: {
          control: "boolean",
          description: "Recurso visual de carregamento",
          table: {
            type: {
              summary: "boolean",
            },
          },
        },
        open: {
          control: "boolean",
          description: "Informa se o Modal esta aberto ou fechado",
          table: {
            type: {
              summary: "required | boolean",
            },
          },
        },
        closeIcon: {
          control: "boolean",
          description: "Icone de fechar o Modal",
          table: {
            type: {
              summary: "boolean",
            },
          },
        },
        closeOnDimerClick: {
          control: "boolean",
          description: "Fecha o Modal quando clica fora da sua area",
          table: {
            type: {
              summary: "boolean",
            },
          },
        },
        onClose: {
          control: "string",
          description: "Função de fechar o Modal",
          table: {
            type: {
              summary: "required | function",
            },
          },
        },
        onBack: {
          control: "string",
          description: "Função de voltar a pagina anterior",
          table: {
            type: {
              summary: "function",
            },
          },
        },
        size: {
            control: {
                type: "inline-radio",
                options: ["mini", "tiny", "small", "large", "fullscreen"],
            },
            description: "Alterar o tamanho do Modal",
            table: {
              type: {
                summary:
                  "mini | tiny | small | large | fullscreen",
              },
            },
        },
        width: {
          control: "text",
          description: "Largura do Modal",
          table: {
            defaultValue: {
              summary: "Opções",
              detail: "String | Number (definido como px)",
            },
            type: {
              summary: "number | string ",
            },
          },
        },
    },
} as Meta;

const Template: Story<ModalProps> = (args) => {
  const [isOpen, setIsOpen] = useState(false) 
  return (
    <>
      <ButtonMain textFirst='Abrir' onClick={() => setIsOpen(!isOpen)} />  
      {isOpen &&
      <Modal {...args} open={isOpen} onClose={() => setIsOpen(!isOpen)}  closeOnDimerClick> 
          Lorem Ipsum
          "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
          "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."


          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac tincidunt libero. Nullam nec egestas neque. Sed vehicula dolor sed consectetur tempus. Morbi imperdiet enim id hendrerit ullamcorper. Proin porta urna a lobortis imperdiet. Nullam dolor nisl, suscipit id pharetra non, sagittis ut lacus. Quisque et metus ultrices, pellentesque tellus eget, interdum tellus. In dictum, nunc at hendrerit cursus, nulla sapien efficitur velit, sed aliquam nulla urna in turpis. Nulla id elit vitae orci bibendum ultricies a sed augue. Aliquam erat volutpat. Vestibulum sapien metus, cursus elementum mauris vitae, tempus aliquam massa.

          Quisque eu cursus tortor. Sed sed scelerisque purus. Ut mauris nulla, sodales non hendrerit eu, scelerisque ut augue. Aenean rhoncus nisi at suscipit consequat. Quisque eleifend sit amet nunc sed consequat. Nunc iaculis nunc ut felis iaculis, ac malesuada nisi congue. Maecenas dapibus laoreet tempus. Ut et nibh ut nulla vehicula cursus. Ut euismod tincidunt odio ut accumsan. Ut placerat ultricies arcu, vitae finibus lorem congue sit amet.

          Phasellus bibendum sem ex, vel aliquet libero cursus et. Nunc tristique metus vel massa sagittis, nec imperdiet tellus luctus. Maecenas ultrices eget ipsum eget lobortis. Fusce ante risus, dignissim vitae ullamcorper eget, blandit ac ipsum. Nullam eu fermentum risus, vel pellentesque nisi. Vestibulum porttitor sed risus eu imperdiet. Vivamus molestie ipsum ipsum, at faucibus quam ornare sit amet. Nulla facilisi. Nulla tempor sem erat, at molestie enim facilisis sed. In lobortis massa sit amet varius volutpat. Praesent tincidunt, ex ut consectetur accumsan, ipsum nibh euismod turpis, eget tincidunt urna libero sit amet diam.

          Proin lectus eros, congue ut consequat eu, iaculis a ex. Proin ut eros nibh. Quisque eu iaculis ligula. Nunc non imperdiet orci. Pellentesque pellentesque, enim eu vestibulum porttitor, justo nibh facilisis tortor, ac blandit purus purus id nibh. Vestibulum venenatis ante massa, nec placerat nisi euismod a. Nulla rhoncus ligula id risus venenatis auctor. Vestibulum eu suscipit purus. Mauris imperdiet risus nibh, sed sodales dui aliquam in. Aenean tincidunt sem sit amet enim convallis aliquet.

          Suspendisse vel justo suscipit, accumsan ex a, feugiat velit. Phasellus lobortis metus at lorem mattis placerat. Maecenas convallis et elit vel convallis. Phasellus vel sapien imperdiet, posuere elit sed, ullamcorper nunc. Curabitur nec dolor ac felis viverra dapibus nec a velit. Suspendisse efficitur in lorem a sollicitudin. Sed malesuada velit ut condimentum sagittis. Nullam laoreet porttitor elit. In hac habitasse platea dictumst. Quisque dictum mattis magna a semper. Phasellus orci lectus, interdum sit amet lacinia sit amet, placerat quis nisi.

          Generated 5 paragraphs, 408 words, 2753 bytes of Lorem Ipsum
      </Modal> }
    </> 
  )
};

export const Default = Template.bind({});
Default.args = {
    open: true,
    title: "teste",
    closeOnDimerClick: false,
    onClose: action("fechar"),
};

export const Actions = Template.bind({});
Actions.args = {
    open: true,
    title: "teste",
    actions: (
        <div>
            <ButtonMain textFirst="click aqui" />{" "}
        </div>
    ),
    onClose: action("fechar"),
};

export const Loading = Template.bind({});
Loading.args = {
    open: true,
    loading: true,
    title: "teste",
    onClose: action("fechar"),
};

export const CloseIcon = Template.bind({});
CloseIcon.args = {
    open:true,
    title: 'teste',
    onClose: action("fechar"),
    closeIcon: false,
}

export const OnBack = Template.bind({});
OnBack.args = {
    open: true,
    title: "teste",
    onBack: action("voltar"),
    onClose: action("fechar"),
};

export const Size = Template.bind({});
Size.args = {
    open: true,
    size: "small",
    title: "teste",
    onClose: action("fechar"),
};

export const Width = Template.bind({});
Width.args = {
    open: true,
    width: '50',
    title: "teste",
    onClose: action("fechar"),
};
