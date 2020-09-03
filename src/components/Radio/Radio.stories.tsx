import React, { useState } from 'react';
import Radio from './Radio';

export default {
    title: 'Radio',
    component: Radio,
};

export const Default = () => {
    const [value, setValue] = useState(false);

    return (
        <div style={{ margin: 50 }}>
            <Radio checked={value} onChange={() => setValue(!value)} label='eita'/>
        </div>
    );
};
