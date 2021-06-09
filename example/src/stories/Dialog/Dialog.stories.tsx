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
        defaultValue: "100%",
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
          <Dialog {...args} open={isOpen} onClose={() => setIsOpen(!isOpen)} maxHeight="50%" title="ola worlds">
          Lorem Ipsum
          "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
          "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac tincidunt libero. Nullam nec egestas neque. Sed vehicula dolor sed consectetur tempus. Morbi imperdiet enim id hendrerit ullamcorper. Proin porta urna a lobortis imperdiet. Nullam dolor nisl, suscipit id pharetra non, sagittis ut lacus. Quisque et metus ultrices, pellentesque tellus eget, interdum tellus. In dictum, nunc at hendrerit cursus, nulla sapien efficitur velit, sed aliquam nulla urna in turpis. Nulla id elit vitae orci bibendum ultricies a sed augue. Aliquam erat volutpat. Vestibulum sapien metus, cursus elementum mauris vitae, tempus aliquam massa.
          Quisque eu cursus tortor. Sed sed scelerisque purus. Ut mauris nulla, sodales non hendrerit eu, scelerisque ut augue. Aenean rhoncus nisi at suscipit consequat. Quisque eleifend sit amet nunc sed consequat. Nunc iaculis nunc ut felis iaculis, ac malesuada nisi congue. Maecenas dapibus laoreet tempus. Ut et nibh ut nulla vehicula cursus. Ut euismod tincidunt odio ut accumsan. Ut placerat ultricies arcu, vitae finibus lorem congue sit amet.
          Phasellus bibendum sem ex, vel aliquet libero cursus et. Nunc tristique metus vel massa sagittis, nec imperdiet tellus luctus. Maecenas ultrices eget ipsum eget lobortis. Fusce ante risus, dignissim vitae ullamcorper eget, blandit ac ipsum. Nullam eu fermentum risus, vel pellentesque nisi. Vestibulum porttitor sed risus eu imperdiet. Vivamus molestie ipsum ipsum, at faucibus quam ornare sit amet. Nulla facilisi. Nulla tempor sem erat, at molestie enim facilisis sed. In lobortis massa sit amet varius volutpat. Praesent tincidunt, ex ut consectetur accumsan, ipsum nibh euismod turpis, eget tincidunt urna libero sit amet diam.
          Proin lectus eros, congue ut consequat eu, iaculis a ex. Proin ut eros nibh. Quisque eu iaculis ligula. Nunc non imperdiet orci. Pellentesque pellentesque, enim eu vestibulum porttitor, justo nibh facilisis tortor, ac blandit purus purus id nibh. Vestibulum venenatis ante massa, nec placerat nisi euismod a. Nulla rhoncus ligula id risus venenatis auctor. Vestibulum eu suscipit purus. Mauris imperdiet risus nibh, sed sodales dui aliquam in. Aenean tincidunt sem sit amet enim convallis aliquet.
          Suspendisse vel justo suscipit, accumsan ex a, feugiat velit. Phasellus lobortis metus at lorem mattis placerat. Maecenas convallis et elit vel convallis. Phasellus vel sapien imperdiet, posuere elit sed, ullamcorper nunc. Curabitur nec dolor ac felis viverra dapibus nec a velit. Suspendisse efficitur in lorem a sollicitudin. Sed malesuada velit ut condimentum sagittis. Nullam laoreet porttitor elit. In hac habitasse platea dictumst. Quisque dictum mattis magna a semper. Phasellus orci lectus, interdum sit amet lacinia sit amet, placerat quis nisi.
          Generated 5 paragraphs, 408 words, 2753 bytes of Lorem Ipsum
          Lorem Ipsum
          "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
          "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac tincidunt libero. Nullam nec egestas neque. Sed vehicula dolor sed consectetur tempus. Morbi imperdiet enim id hendrerit ullamcorper. Proin porta urna a lobortis imperdiet. Nullam dolor nisl, suscipit id pharetra non, sagittis ut lacus. Quisque et metus ultrices, pellentesque tellus eget, interdum tellus. In dictum, nunc at hendrerit cursus, nulla sapien efficitur velit, sed aliquam nulla urna in turpis. Nulla id elit vitae orci bibendum ultricies a sed augue. Aliquam erat volutpat. Vestibulum sapien metus, cursus elementum mauris vitae, tempus aliquam massa.
          Quisque eu cursus tortor. Sed sed scelerisque purus. Ut mauris nulla, sodales non hendrerit eu, scelerisque ut augue. Aenean rhoncus nisi at suscipit consequat. Quisque eleifend sit amet nunc sed consequat. Nunc iaculis nunc ut felis iaculis, ac malesuada nisi congue. Maecenas dapibus laoreet tempus. Ut et nibh ut nulla vehicula cursus. Ut euismod tincidunt odio ut accumsan. Ut placerat ultricies arcu, vitae finibus lorem congue sit amet.
          Phasellus bibendum sem ex, vel aliquet libero cursus et. Nunc tristique metus vel massa sagittis, nec imperdiet tellus luctus. Maecenas ultrices eget ipsum eget lobortis. Fusce ante risus, dignissim vitae ullamcorper eget, blandit ac ipsum. Nullam eu fermentum risus, vel pellentesque nisi. Vestibulum porttitor sed risus eu imperdiet. Vivamus molestie ipsum ipsum, at faucibus quam ornare sit amet. Nulla facilisi. Nulla tempor sem erat, at molestie enim facilisis sed. In lobortis massa sit amet varius volutpat. Praesent tincidunt, ex ut consectetur accumsan, ipsum nibh euismod turpis, eget tincidunt urna libero sit amet diam.
          Proin lectus eros, congue ut consequat eu, iaculis a ex. Proin ut eros nibh. Quisque eu iaculis ligula. Nunc non imperdiet orci. Pellentesque pellentesque, enim eu vestibulum porttitor, justo nibh facilisis tortor, ac blandit purus purus id nibh. Vestibulum venenatis ante massa, nec placerat nisi euismod a. Nulla rhoncus ligula id risus venenatis auctor. Vestibulum eu suscipit purus. Mauris imperdiet risus nibh, sed sodales dui aliquam in. Aenean tincidunt sem sit amet enim convallis aliquet.
          Suspendisse vel justo suscipit, accumsan ex a, feugiat velit. Phasellus lobortis metus at lorem mattis placerat. Maecenas convallis et elit vel convallis. Phasellus vel sapien imperdiet, posuere elit sed, ullamcorper nunc. Curabitur nec dolor ac felis viverra dapibus nec a velit. Suspendisse efficitur in lorem a sollicitudin. Sed malesuada velit ut condimentum sagittis. Nullam laoreet porttitor elit. In hac habitasse platea dictumst. Quisque dictum mattis magna a semper. Phasellus orci lectus, interdum sit amet lacinia sit amet, placerat quis nisi.
          Generated 5 paragraphs, 408 words, 2753 bytes of Lorem Ipsum
          Lorem Ipsum
          "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
          "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac tincidunt libero. Nullam nec egestas neque. Sed vehicula dolor sed consectetur tempus. Morbi imperdiet enim id hendrerit ullamcorper. Proin porta urna a lobortis imperdiet. Nullam dolor nisl, suscipit id pharetra non, sagittis ut lacus. Quisque et metus ultrices, pellentesque tellus eget, interdum tellus. In dictum, nunc at hendrerit cursus, nulla sapien efficitur velit, sed aliquam nulla urna in turpis. Nulla id elit vitae orci bibendum ultricies a sed augue. Aliquam erat volutpat. Vestibulum sapien metus, cursus elementum mauris vitae, tempus aliquam massa.
          Quisque eu cursus tortor. Sed sed scelerisque purus. Ut mauris nulla, sodales non hendrerit eu, scelerisque ut augue. Aenean rhoncus nisi at suscipit consequat. Quisque eleifend sit amet nunc sed consequat. Nunc iaculis nunc ut felis iaculis, ac malesuada nisi congue. Maecenas dapibus laoreet tempus. Ut et nibh ut nulla vehicula cursus. Ut euismod tincidunt odio ut accumsan. Ut placerat ultricies arcu, vitae finibus lorem congue sit amet.
          Phasellus bibendum sem ex, vel aliquet libero cursus et. Nunc tristique metus vel massa sagittis, nec imperdiet tellus luctus. Maecenas ultrices eget ipsum eget lobortis. Fusce ante risus, dignissim vitae ullamcorper eget, blandit ac ipsum. Nullam eu fermentum risus, vel pellentesque nisi. Vestibulum porttitor sed risus eu imperdiet. Vivamus molestie ipsum ipsum, at faucibus quam ornare sit amet. Nulla facilisi. Nulla tempor sem erat, at molestie enim facilisis sed. In lobortis massa sit amet varius volutpat. Praesent tincidunt, ex ut consectetur accumsan, ipsum nibh euismod turpis, eget tincidunt urna libero sit amet diam.
          Proin lectus eros, congue ut consequat eu, iaculis a ex. Proin ut eros nibh. Quisque eu iaculis ligula. Nunc non imperdiet orci. Pellentesque pellentesque, enim eu vestibulum porttitor, justo nibh facilisis tortor, ac blandit purus purus id nibh. Vestibulum venenatis ante massa, nec placerat nisi euismod a. Nulla rhoncus ligula id risus venenatis auctor. Vestibulum eu suscipit purus. Mauris imperdiet risus nibh, sed sodales dui aliquam in. Aenean tincidunt sem sit amet enim convallis aliquet.
          Suspendisse vel justo suscipit, accumsan ex a, feugiat velit. Phasellus lobortis metus at lorem mattis placerat. Maecenas convallis et elit vel convallis. Phasellus vel sapien imperdiet, posuere elit sed, ullamcorper nunc. Curabitur nec dolor ac felis viverra dapibus nec a velit. Suspendisse efficitur in lorem a sollicitudin. Sed malesuada velit ut condimentum sagittis. Nullam laoreet porttitor elit. In hac habitasse platea dictumst. Quisque dictum mattis magna a semper. Phasellus orci lectus, interdum sit amet lacinia sit amet, placerat quis nisi.
          Generated 5 paragraphs, 408 words, 2753 bytes of Lorem Ipsum
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
  maxHeight: 200,
  onClose: action("fechar"),
  title: 'ola humados',
};

MaxHeight.parameters = {
  docs: {
    source:{
      code:`<Dialog
      open={false}
      maxHeight={100}
      onClose={() => {}}
    />`
    }
  }
};
