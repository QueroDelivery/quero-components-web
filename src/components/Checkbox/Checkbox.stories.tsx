import React, { useState } from 'react';
import CheckBox from './Checkbox';

export default {
    title: 'Checkbox',
    component: CheckBox,
};

export const Default = () => {
    const [value, setValue] = useState(false);

    return (
        <div style={{ margin: 50 }}>
            <CheckBox checked={value} onChange={() => setValue(!value)} />
        </div>
    );
};
