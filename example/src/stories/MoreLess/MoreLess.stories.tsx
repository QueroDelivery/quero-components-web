import React, { useState } from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";
import { MoreLess } from "quero-components-web";
import { MoreLessProps } from "./Interface";
import "quero-components-web/dist/index.css";
import { action } from "@storybook/addon-actions";

export default {
    title: "Components/MoreLess",
    component: MoreLess,
    argTypes: {
        size: {
            control: {
                type: "inline-radio",
                options: ["small", "medium", "big"],
            },
            description: "Tamanho do MoreLess",
            defaultValue: {
              summary: 'O tamanho padrão é o medium',
            },
            type: {
              summary: "small | medium | big",
            },
        },
        disabled: {
          control: "boolean", 
          description: "O MoreLess esta suspenso/desabilitado?",
          table: {
            type: {
              summary: "boolean",
            },
          },
        },
        minimum: {
          control: "number",
          description: "Menor valor do MoreLess", 
          table: {
            type: {
              summary: "number",
            },
          },
        },
        limit: {
          control: "number",
          description: "Maior valor do MoreLess",
          table: {
            type: {
              summary: "number",
            },
          },
        },
        value: {
          control: "number",
          description: "O valor do MoreLess",
          table: {
            type: {
              summary: "requered | number",
            },
          },
        },
        more: {
          control: "string",
          description: "Função para aumentar o valor do MoreLess",
          table: {
            type: {
              summary: "requered |function",
            },
          },
        },
        less: {
          control: "string",
          description: "Função para diminuir o valor do MoreLess",
          table: {
            type: {
              summary: "requered | function",
            },
          },
        },
        onChange: {
          control: "string",
          description: "Função responsavel por manipular o MoreLess",
          table: {
            defaultValue: {
              summary: "Recebe o valor do MoreLess"
            },
            type: {
              summary: "function",
            },
          },
        },
    },
} as Meta;

const Template: Story<MoreLessProps> = (args) => {
  const [value, setValue] = useState (args.value)
  return <MoreLess {...args} value={value} more={() => setValue(value+1)} 
  less={() => setValue(value-1)}
  />
};

export const Default = Template.bind({});
Default.args = {
    value: 0,
    more: action("adicioar"),
    less: action("remover"),
 };

 Default.parameters = {
  docs: {
    source:{
      code:`<MoreLess 
      value={0}
      more={() => {}}
      less={() => {}}
    />`
    }
  }
}

export const Size = Template.bind({});
Size.args = {
    value: 2,
    more: action("adicioar"),
    less: action("remover"),
    size: "medium",
};

Size.parameters = {
  docs: {
    source:{
      code:`<MoreLess 
      value={2}
      more={() => {}}
      less={() => {}}
      size="medium"
    />`
    }
  }
}

export const Disabled = Template.bind({});
Disabled.args = {
    value: 2,
    more: action("adicioar"),
    less: action("remover"),
    disabled: true,
};

Disabled.parameters = {
  docs: {
    source:{
      code:`<MoreLess 
      value={2}
      more={() => {}}
      less={() => {}}
      disabled={true}
    />`
    }
  }
}

export const Minimum = Template.bind({});
Minimum.args = {
    value: 2,
    more: action("adicioar"),
    less: action("remover"),
    minimum: 2,
};

Minimum.parameters = {
  docs: {
    source:{
      code:`<MoreLess 
      value={2}
      more={() => {}}
      less={() => {}}
      minimum={2}
    />`
    }
  }
}


export const Limit = Template.bind({});
Limit.args = {
    value: 10,
    more: action("adicioar"),
    less: action("remover"),
    limit: 10,
};

Limit.parameters = {
  docs: {
    source:{
      code:`<MoreLess 
      value={10}
      more={() => {}}
      less={() => {}}
      limit={10}
    />`
    }
  }
}

export const OnChange = Template.bind({});
OnChange.args = {
    value: 4,
    more: action("adicioar"),
    less: action("remover"),
    onChange: action("mudar valor"),
};

OnChange.parameters = {
  docs: {
    source:{
      code:`<MoreLess 
      value={4}
      more={() => {}}
      less={() => {}}
      onChange={() => {}}
    />`
    }
  }
}