import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
// import { action } from '@storybook/addon-actions';
import {
  Pagination,
  PaginationProps,
} from '@quero-delivery/quero-components-web';
import '@quero-delivery/quero-components-web/dist/index.css';

export default {
  title: 'Components/Pagination',
  component: Pagination,
  argTypes: {
    currentPage: {
      control: 'number',
      defaultValue: 'currentPage',
      description: 'currentPage',
      table: {
        type: {
          summary: 'number',
        },
      },
    },
    limitPerPage: {
      control: 'number',
      defaultValue: 'limitPerPage',
      description: 'limitPerPage',
      table: {
        type: {
          summary: 'number',
        },
      },
    },
    totalCount: {
      control: 'number',
      defaultValue: 'Total count',
      description: 'Total count',
      table: {
        type: {
          summary: 'number',
        },
      },
    },
    size: {
      control: {
        type: 'inline-radio',
      },
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Alterar o tamanho da paginação',
      defaultValue: 'md',
      table: {
        type: {
          summary: 'xs | sm | md | lg | lx',
        },
      },
    },
    disabled: {
      control: 'boolean',
      table: {
        type: {
          summary: 'boolean'
        }
      },
      defaultValue: false,
      description: 'Desabilita todo o componente',
    },
    doubleJumpArrow: {
      control: 'boolean',
      table: {
        type: {
          summary: 'boolean'
        }
      },
      defaultValue: false,
      description: 'Mostra botões nas extremidades, utilizados para ir ao início e fim da paginação.',
    },
  },
} as Meta;

const Template: Story<PaginationProps> = args => {
  const [currentPage, setCurrentPage] = useState(1);

  // { lenght: 3 }
  return (
    <Pagination
      {...args}
      currentPage={currentPage}
      onPageChange={page => setCurrentPage(page)}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  limitPerPage: 30,
  currentPage: 1,
  totalCount: 180,
  doubleJumpArrow: true,
  onPageChange: () => {},
  disabled: false,
};

Default.parameters = {
  docs: {
    source: {
      code: `
      <Pagination
        limitPerPage={30}
        currentPage={1}
        totalCount={180}
        doubleJumpArrow={true}
        onPageChange={() => {}}
        disabled={true}
      />`,
    },
  },
};

// export const Label = Template.bind({});
// Label.args = {
//   checked: false,
//   label: 'Título do Radio',
//   labelStyle: { marginRight: 20 },
//   onChange: action('checked/notChecked'),
// };

// Label.parameters = {
//   docs: {
//     source: {
//       code: `<Radio
//       checked={false}
//       label="Título do Radio"
//       labelStyle={{ marginRight: 20 }}
//       onChange={() => {}}
//     />`,
//     },
//   },
// };
