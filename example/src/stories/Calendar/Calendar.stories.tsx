import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";
import { Calendar } from "quero-components-web";
import { CalendarProps } from "./Interface";
import { addDays } from "date-fns";
import "quero-components-web/dist/index.css";

import { registerLocale } from "react-datepicker";
import br from "date-fns/locale/pt-BR";
registerLocale("pt-BR", br);

export default {
  title: "Components/Calendar",
  component: Calendar,
  argTypes: {
    startDate: {
      control: "date",
      description: "Data inicial",
      table: {
        type: {
          summary: "Date",
        },
      },
    },
    selected: {
      control: "date",
      description: "Data selecionada",
      table: {
        type: {
          summary: "date",
        },
      },
    },
    endDate: {
      control: "date",
      description: "Data final",
      table: {
        type: {
          summary: "date",
        },
      },
    },
    otherFormatDate: {
      control: "text",
      description: "Outro formato de exibição de data",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    brand: {
      control: "boolean",
      description: "Alterar para estilo da cor da marca",
      table: {
        type: {
          summary: "boolean",
        },
      },
    },
    label: {
      control: "text",
      description: "Label do calendário",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    labelColor: {
      control: "text",
      description: "Cor da label",
      table: {
        type: {
          summary: "string",
        },
      },
    },
  },
} as Meta;

const Template: Story<CalendarProps> = (args) => (
  <div>
    <Calendar {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  startDate: new Date(),
  endDate: addDays(new Date(), 5),
  selected: new Date(),
};

export const Label = Template.bind({});
Label.args = {
  startDate: new Date(),
  endDate: addDays(new Date(), 5),
  selected: new Date(),
  label: "Label",
};
export const LabelColor = Template.bind({});
LabelColor.args = {
  startDate: new Date(),
  endDate: addDays(new Date(), 5),
  selected: new Date(),
  label: "Label",
  labelColor: "blue",
};

export const Brand = Template.bind({});
Brand.args = {
  startDate: new Date(),
  endDate: addDays(new Date(), 5),
  selected: new Date(),
  brand: true,
};

export const OtherFormat = Template.bind({});
OtherFormat.args = {
  startDate: new Date(),
  endDate: addDays(new Date(), 5),
  selected: new Date(),
  otherFormatDate: "dd/MM/yyyy hh:mm",
};
