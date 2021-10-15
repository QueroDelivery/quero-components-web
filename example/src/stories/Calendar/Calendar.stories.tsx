import React from 'react';
import { useState } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Calendar, CalendarProps } from '@quero-delivery/quero-components-web';
import { addDays } from 'date-fns';
import '@quero-delivery/quero-components-web/dist/index.css';

export default {
  title: 'Components/Calendar',
  component: Calendar,
  parameters: {
    docs: {
      description: {
        component: `Calendario recebendo as propriedades da lib [React Datepicker](https://reactdatepicker.com/).`,
      },
    },
  },
  argTypes: {
    label: {
      control: 'text',
      defaultValue: 'Label do calendário',
      description: 'Label do calendário',
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    brand: {
      control: 'boolean',
      description: 'Deseja alterar para o estilo da cor da marca?',
      table: {
        type: {
          summary: 'boolean',
        },
      },
    },
    otherFormatDate: {
      control: 'text',
      description: 'Outro formato de exibição de data',
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    startDate: {
      control: 'date',
      description: 'Data inicial',
      table: {
        type: {
          summary: 'Date',
        },
      },
    },
    selected: {
      control: 'date',
      description: 'Data selecionada',
      table: {
        type: {
          summary: 'date',
        },
      },
    },
    endDate: {
      control: 'date',
      description: 'Data final',
      table: {
        type: {
          summary: 'date',
        },
      },
    },
    size: {
      control: {
        type: 'inline-radio',
      },
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Alterar o tamanho do botão',
      table: {
        type: {
          summary: 'xs | sm | md | lg | lx',
        },
      },
    },
  },
} as Meta;

const Template: Story<CalendarProps> = args => {
  const [selected, setSelected] = useState<Date | null>(new Date());
  return (
    <Calendar
      {...args}
      selected={selected}
      onChange={(date: Date) => {
        if (date) {
          setSelected(date);
        } else {
          setSelected(null);
        }
      }}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  startDate: new Date(),
  endDate: addDays(new Date(), 5),
  selected: new Date(),
};

Default.parameters = {
  docs: {
    source: {
      code: `<Calendar
      startDate={new Date()}
      endDate={addDays(new Date(), 5)}
      selected={new Date()}
      />`,
    },
  },
};

export const Label = Template.bind({});
Label.args = {
  startDate: new Date(),
  endDate: addDays(new Date(), 5),
  selected: new Date(),
  label: 'Label do calendário',
};

Label.parameters = {
  docs: {
    source: {
      code: `<Calendar
      startDate={new Date()}
      endDate={addDays(new Date(), 5)}
      selected={new Date()}
      label="Label do calendário"
      />`,
    },
  },
};

export const Brand = Template.bind({});
Brand.args = {
  startDate: new Date(),
  endDate: addDays(new Date(), 5),
  selected: new Date(),
  brand: true,
};

Brand.parameters = {
  docs: {
    source: {
      code: `<Calendar
      startDate={new Date()}
      endDate={addDays(new Date(), 5)}
      selected={new Date()}
      brand
      />`,
    },
  },
};

export const OtherFormat = Template.bind({});
OtherFormat.args = {
  startDate: new Date(),
  endDate: addDays(new Date(), 5),
  selected: new Date(),
  otherFormatDate: 'dd/MM/yyyy hh:mm',
};

OtherFormat.parameters = {
  docs: {
    source: {
      code: `<Calendar
      startDate={new Date()}
      endDate={addDays(new Date(), 5)}
      selected={new Date()}
      otherFormatDate="dd/MM/yyyy hh:mm"
      />`,
    },
  },
};

export const Size = Template.bind({});
Size.args = {
  startDate: new Date(),
  endDate: addDays(new Date(), 5),
  selected: new Date(),
  size: 'sm',
};

OtherFormat.parameters = {
  docs: {
    source: {
      code: `<Calendar
      startDate={new Date()}
      endDate={addDays(new Date(), 5)}
      selected={new Date()}
      otherFormatDate="dd/MM/yyyy hh:mm"
      />`,
    },
  },
};
