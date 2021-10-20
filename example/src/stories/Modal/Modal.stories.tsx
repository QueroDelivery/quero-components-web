import React from 'react';
import { useState } from '@storybook/client-api';
import { Story, Meta } from '@storybook/react/types-6-0';
import {
  ButtonMain,
  Modal,
  ModalProps,
} from '@quero-delivery/quero-components-web';
import { action } from '@storybook/addon-actions';
import '@quero-delivery/quero-components-web/dist/index.css';

export default {
  title: 'Components/Modal',
  component: Modal,
  argTypes: {
    title: {
      control: 'text',
      description: 'Título do Modal',
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    actions: {
      control: 'string',
      description: 'Ações que o Modal pode ter quando esta aberto',
      table: {
        type: {
          summary: 'React.ReactNode',
        },
      },
    },
    loading: {
      control: 'boolean',
      description: 'Esta carregando?',
      table: {
        type: {
          summary: 'boolean',
        },
      },
    },
    open: {
      control: 'boolean',
      description: 'Informa se o Modal esta aberto ou fechado',
      table: {
        type: {
          summary: 'required | boolean',
        },
      },
    },
    closeIcon: {
      control: 'boolean',
      description: 'Deseja o icone de fechar o Modal?',
      table: {
        type: {
          summary: 'boolean',
        },
      },
    },
    closeOnDimerClick: {
      control: 'boolean',
      description: 'Deseja fechar o Modal quando clicar fora da sua area?',
      table: {
        type: {
          summary: 'boolean',
        },
      },
    },
    onClose: {
      control: 'string',
      description: 'Função de fechar o Modal',
      table: {
        type: {
          summary: 'required | function',
        },
      },
    },
    onReturnClick: {
      control: 'string',
      description: 'Função de voltar a pagina anterior',
      table: {
        type: {
          summary: 'function',
        },
      },
    },
    size: {
      control: {
        type: 'inline-radio',
        options: ['mini', 'tiny', 'small', 'large', 'fullscreen'],
      },
      description: 'Alterar o tamanho do Modal',
      table: {
        type: {
          summary: 'mini | tiny | small | large | fullscreen',
        },
      },
    },
    width: {
      control: 'text',
      description: 'Largura do Modal',
      table: {
        defaultValue: {
          summary: 'Opções',
          detail: 'String | Number (definido como px)',
        },
        type: {
          summary: 'number | string ',
        },
      },
    },
  },
} as Meta;

const Template: Story<ModalProps> = args => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <ButtonMain textFirst="Abrir" onClick={() => setIsOpen(!isOpen)} />

      <Modal
        {...args}
        open={isOpen}
        onClose={() => setIsOpen(!isOpen)}
        closeOnDimerClick
      >
        Lorem Ipsum "Neque porro quisquam est qui dolorem ipsum quia dolor sit
        amet, consectetur, adipisci velit..." "There is no one who loves pain
        itself, who seeks after it and wants to have it, simply because it is
        pain..." Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac
        tincidunt libero. Nullam nec egestas neque. Sed vehicula dolor sed
        consectetur tempus. Morbi imperdiet enim id hendrerit ullamcorper. Proin
        porta urna a lobortis imperdiet. Nullam dolor nisl, suscipit id pharetra
        non, sagittis ut lacus. Quisque et metus ultrices, pellentesque tellus
        eget, interdum tellus. In dictum, nunc at hendrerit cursus, nulla sapien
        efficitur velit, sed aliquam nulla urna in turpis. Nulla id elit vitae
        orci bibendum ultricies a sed augue. Aliquam erat volutpat. Vestibulum
        sapien metus, cursus elementum mauris vitae, tempus aliquam massa.
        Quisque eu cursus tortor. Sed sed scelerisque purus. Ut mauris nulla,
        sodales non hendrerit eu, scelerisque ut augue. Aenean rhoncus nisi at
        suscipit consequat. Quisque eleifend sit amet nunc sed consequat. Nunc
        iaculis nunc ut felis iaculis, ac malesuada nisi congue. Maecenas
        dapibus laoreet tempus. Ut et nibh ut nulla vehicula cursus. Ut euismod
        tincidunt odio ut accumsan. Ut placerat ultricies arcu, vitae finibus
        lorem congue sit amet. Phasellus bibendum sem ex, vel aliquet libero
        cursus et. Nunc tristique metus vel massa sagittis, nec imperdiet tellus
        luctus. Maecenas ultrices eget ipsum eget lobortis. Fusce ante risus,
        dignissim vitae ullamcorper eget, blandit ac ipsum. Nullam eu fermentum
        risus, vel pellentesque nisi. Vestibulum porttitor sed risus eu
        imperdiet. Vivamus molestie ipsum ipsum, at faucibus quam ornare sit
        amet. Nulla facilisi. Nulla tempor sem erat, at molestie enim facilisis
        sed. In lobortis massa sit amet varius volutpat. Praesent tincidunt, ex
        ut consectetur accumsan, ipsum nibh euismod turpis, eget tincidunt urna
        libero sit amet diam. Proin lectus eros, congue ut consequat eu, iaculis
        a ex. Proin ut eros nibh. Quisque eu iaculis ligula. Nunc non imperdiet
        orci. Pellentesque pellentesque, enim eu vestibulum porttitor, justo
        nibh facilisis tortor, ac blandit purus purus id nibh. Vestibulum
        venenatis ante massa, nec placerat nisi euismod a. Nulla rhoncus ligula
        id risus venenatis auctor. Vestibulum eu suscipit purus. Mauris
        imperdiet risus nibh, sed sodales dui aliquam in. Aenean tincidunt sem
        sit amet enim convallis aliquet. Suspendisse vel justo suscipit,
        accumsan ex a, feugiat velit. Phasellus lobortis metus at lorem mattis
        placerat. Maecenas convallis et elit vel convallis. Phasellus vel sapien
        imperdiet, posuere elit sed, ullamcorper nunc. Curabitur nec dolor ac
        felis viverra dapibus nec a velit. Suspendisse efficitur in lorem a
        sollicitudin. Sed malesuada velit ut condimentum sagittis. Nullam
        laoreet porttitor elit. In hac habitasse platea dictumst. Quisque dictum
        mattis magna a semper. Phasellus orci lectus, interdum sit amet lacinia
        sit amet, placerat quis nisi. Generated 5 paragraphs, 408 words, 2753
        bytes of Lorem Ipsum
      </Modal>
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  open: true,
  title: 'Título do Modal',
  closeOnDimerClick: false,
  onClose: action('fechar'),
};

Default.parameters = {
  docs: {
    source: {
      code: `<Modal
      title="Título do Modal"
      closeOnDimerClick={false}
      onClose={() => {}}
    />`,
    },
  },
};

export const Actions = Template.bind({});
Actions.args = {
  open: true,
  title: 'Título do Modal',
  actions: (
    <div>
      <ButtonMain textFirst="click aqui" />{' '}
    </div>
  ),
  onClose: action('fechar'),
};

Actions.parameters = {
  docs: {
    source: {
      code: `<Modal
      open={true}
      title="Título do Modal"
      actions={ <ButtonMain textFirst="click aqui"/> }
      onClose={() => {}}
    />`,
    },
  },
};

export const Loading = Template.bind({});
Loading.args = {
  open: true,
  loading: true,
  title: 'Título do Modal',
  onClose: action('fechar'),
};

Loading.parameters = {
  docs: {
    source: {
      code: `<Modal
      open={true}
      loading={true}
      title="Título do Modal"
      onClose={() => {}}
    />`,
    },
  },
};

export const CloseIcon = Template.bind({});
CloseIcon.args = {
  open: true,
  title: 'Título do Modal',
  onClose: action('fechar'),
  closeIcon: false,
};

CloseIcon.parameters = {
  docs: {
    source: {
      code: `<Modal
      open={true}
      title="Título do Modal"
      onClose={() => {}}
      closeIcon={false}
    />`,
    },
  },
};

export const onReturnClick = Template.bind({});
onReturnClick.args = {
  open: true,
  title: 'Título do Modal',
  onReturnClick: action('voltar'),
  onClose: action('fechar'),
};

onReturnClick.parameters = {
  docs: {
    source: {
      code: `<Modal
      open={true}
      title="Título do Modal"
      onReturnClick={() => {}}
      onClose={() => {}}
    />`,
    },
  },
};

export const Size = Template.bind({});
Size.args = {
  open: true,
  size: 'small',
  title: 'Título do Modal',
  onClose: action('fechar'),
};

Size.parameters = {
  docs: {
    source: {
      code: `<Modal
      open={true}
      size="small"
      title="Título do Modal"
      onClose={() => {}}
    />`,
    },
  },
};

export const Width = Template.bind({});
Width.args = {
  open: true,
  width: '50',
  title: 'Título do Modal',
  onClose: action('fechar'),
};

Width.parameters = {
  docs: {
    source: {
      code: `<Modal
      open={true}
      width="50"
      title="Título do Modal"
      onClose={() => {}}
    />`,
    },
  },
};
