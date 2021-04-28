import React from "react";
// also exported from "@storybook/react" if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";
import { Dropdown } from "quero-components-web";
import { Props } from "./Interface";

import "quero-components-web/dist/index.css";

export default {
    title: "Components/Dropdown",
    parameters: {
      component: Dropdown,
      componentSubtitle: "É necessário utilizar a lib Semantic UI React. (https://semantic-ui.com/)", 
    },
    argTypes: {
      label: {
        control: "text",
        description: "Título do Dropdown",
        defaultValue: "Título do Dropdown",
        table: {
          type: {
            summary: "string",
          },
        },
      },
      placeholder: {
        control: "text",
        description: "Texto do Dropdown",
        table: {
          type: {
            summary: "string",
          },
        },
      },
      options: {
        control: "array", 
        description: "Opções do Dropdown",
        table: {
          defaultValue: {
            summary: "Opções",
            detail: "Key | Chave | Value ",
          },
          type: {
            summary: "OptionsProp[]",
          },
        },
      },
      errorMessage: {
        control: "text",
        description: "Mensagem de erro",
        table: {
          type: {
            summary: "string",
          },
        },
      },
      search: {
        control: "boolean", 
        description: "Deseja permitir que pesquise dentro do Dropdown",
        table: {
          type: {
            summary: "boolean",
          },
        },
      },
      clearable: {
        control: "boolean", 
        description: "Deseja remover a seleção dentro do Dropdown?",
        table: {
          type: {
            summary: "boolean",
          },
        },
      },
      disabled: {
        control: "boolean", 
        description: "O Dropdown esta suspenso/desabilitado?",
        table: {
          type: {
            summary: "boolean",
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
      multiple: {
        control: "boolean",
        description: "Deseja permitir varias seleções dentro do Dropdown?",
        table: {
          type: {
            summary: "boolean",
          },
        },
      },
      brand: {
        control: "boolean",
        description: "Deseja o tema da marca no Dropdown?",
        table: {
          defaultValue: {
            summary: "Tem como padrão a cor tema da QueroDelivery"
          },
          type: {
            summary: "boolean",
          },
        },
      },
      onChange: {
        action: "changed",
        description: "Função para manipular o Dropdown",
        table: {
        type: {
          summary: "function",
        },
      },
      },
      textAlign: {
        control: "string",
        description: "Alinhamento do texto",
        table: {
          type: {
            summary: "center",
          },
        },
      },
      line: {
        control: "boolean",
        description: "Deseja o estilo do Dropdown em linha?",
        table: {
          type: {
            summary: "boolean",
          },
        },
      },
      colorLabel: {
        control: "color",
        description: "Cor do título do Dropdown",
        table: {
          type: {
            summary: "string",
          },
        },
      },
      }
} as Meta;

const Template: Story<Props> = (args) => <Dropdown {...args} />;

const options = [
    { key: "1", text: "1", value: "1" },
    { key: "2", text: "2", value: "2" },
    { key: "3", text: "3", value: "3" },
    { key: "4", text: "4", value: "4" },
    { key: "5", text: "5", value: "5" },
    { key: "6", text: "6", value: "6" },
    { key: "7", text: "7", value: "7" },
    { key: "teste", text: "teste", value: "teste" },
];

export const Default = Template.bind({});
Default.args = {
    options: options,
    placeholder: "Selecione",
    onChange: (_ev, data) => {
        console.log(data.value);
    },
};

Default.parameters = {
  docs: {
    source:{
      code:`<Dropdown 
      options={[{
        key: "1",
        text: "1",
        value: "1"
      },
      {
        key: "2",
        text: "2",
        value: "2"
      }]}
      placeholder="Selecione"
      onChange={() => {}}
    />`
    }
  }
};

export const Label = Template.bind({});
Label.args = {
    options: options,
    placeholder: "Selecione",
    brand: true,
    label: "Título do Dropdown",
};

Label.parameters = {
  docs: {
    source:{
      code:`<Dropdown 
      options={[{
        key: "1",
        text: "1",
        value: "1"
      },
      {
        key: "2",
        text: "2",
        value: "2"
      }]}
      placeholder="Selecione"
      brand={true}
      label="Título do Dropdown"
    />`
    }
  }
};

export const Erro = Template.bind({});
Erro.args = {
    options: options,
    placeholder: "Selecione",
    brand: true,
    errorMessage: "Erro",
};

Erro.parameters = {
  docs: {
    source:{
      code:`<Dropdown 
      options={[{
        key: "1",
        text: "1",
        value: "1"
      },
      {
        key: "2",
        text: "2",
        value: "2"
      }]}
      placeholder="Selecione"
      brand={true}
      errorMessage="Erro"
    />`
    }
  }
};

export const Search = Template.bind({});
Search.args = {
    options: options,
    placeholder: "Selecione",
    brand: true,
    search: true,
};

Search.parameters = {
  docs: {
    source:{
      code:`<Dropdown 
      options={[{
        key: "1",
        text: "1",
        value: "1"
      },
      {
        key: "2",
        text: "2",
        value: "2"
      }]}
      placeholder="Selecione"
      brand={true}
      search={true}
    />`
    }
  }
};

export const Clearable = Template.bind({});
Clearable.args = {
    options: options,
    placeholder: "Selecione",
    brand: true,
    clearable: true,
};

Clearable.parameters = {
  docs: {
    source:{
      code:`<Dropdown 
      options={[{
        key: "1",
        text: "1",
        value: "1"
      },
      {
        key: "2",
        text: "2",
        value: "2"
      }]}
      placeholder="Selecione"
      brand={true}
      clearable={true}
    />`
    }
  }
};

export const Disabled = Template.bind({});
Disabled.args = {
    options: options,
    placeholder: "Selecione",
    brand: true,
    disabled: true,
};

Disabled.parameters = {
  docs: {
    source:{
      code:`<Dropdown 
      options={[{
        key: "1",
        text: "1",
        value: "1"
      },
      {
        key: "2",
        text: "2",
        value: "2"
      }]}
      placeholder="Selecione"
      brand={true}
      disabled={true}
    />`
    }
  }
};

export const Loading = Template.bind({});
Loading.args = {
    options: options,
    placeholder: "Selecione",
    brand: true,
    loading: true,
};

Loading.parameters = {
  docs: {
    source:{
      code:`<Dropdown 
      options={[{
        key: "1",
        text: "1",
        value: "1"
      },
      {
        key: "2",
        text: "2",
        value: "2"
      }]}
      placeholder="Selecione"
      brand={true}
      loading={true}
    />`
    }
  }
};

export const Multiple = Template.bind({});
Multiple.args = {
    options: options,
    placeholder: "Selecione",
    brand: true,
    multiple: true,
};

Multiple.parameters = {
  docs: {
    source:{
      code:`<Dropdown 
      options={[{
        key: "1",
        text: "1",
        value: "1"
      },
      {
        key: "2",
        text: "2",
        value: "2"
      }]}
      placeholder="Selecione"
      brand={true}
      multiple={true}
    />`
    }
  }
};

export const Brand = Template.bind({});
Brand.args = {
    options: options,
    placeholder: "Selecione",
    brand: true,
};

Brand.parameters = {
  docs: {
    source:{
      code:`<Dropdown 
      options={[{
        key: "1",
        text: "1",
        value: "1"
      },
      {
        key: "2",
        text: "2",
        value: "2"
      }]}
      placeholder="Selecione"
      brand={true}
    />`
    }
  }
};

export const TextAlign = Template.bind({});
TextAlign.args = {
    options: options,
    placeholder: "Selecione",
    brand: true,
    textAlign: "center",
};

TextAlign.parameters = {
  docs: {
    source:{
      code:`<Dropdown 
      options={[{
        key: "1",
        text: "1",
        value: "1"
      },
      {
        key: "2",
        text: "2",
        value: "2"
      }]}
      placeholder="Selecione"
      brand={true}
      textAlign="center"
    />`
    }
  }
};

export const Line = Template.bind({});
Line.args = {
    options: options,
    placeholder: "Selecione",
    line: true,
    label: "Título do Dropdown",
    errorMessage: "Erro"
};

Line.parameters = {
  docs: {
    source:{
      code:`<Dropdown 
      options={[{
        key: "1",
        text: "1",
        value: "1"
      },
      {
        key: "2",
        text: "2",
        value: "2"
      }]}
      placeholder="Selecione"
      line={true}
      label="Título do Dropdown"
      errorMessage="Erro"
    />`
    }
  }
};