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
    title: "Example/Calendar",
    component: Calendar,
    argTypes: {
        startDate: {
            control: "date",
        },
        selected: {
            control: "date",
        },
        endDate: {
            control: "date",
        },
    },
} as Meta;

const Template: Story<CalendarProps> = (args) => <Calendar {...args} />;

export const Default = Template.bind({});
Default.args = {
    startDate: new Date(),
    endDate: addDays(new Date(), 5),
    selected: new Date(),
};
