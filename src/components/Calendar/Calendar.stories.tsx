import React, { useState } from 'react';
import Calendar from './Calendar';

export default {
    title: 'Calendar',
    component: Calendar,
};

export const Default = () => {
    const [startDate, setStateDate] = useState(new Date());
    return (
        <Calendar
            selected={startDate}
            placeholderText="aaa"
            onChange={date => setStateDate(date)}
            // brand
            // label="testeee"
        />
    );
};
