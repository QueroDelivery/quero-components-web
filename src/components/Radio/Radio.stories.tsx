import React, { useState } from 'react';
import Radio from './Radio';

export default {
    title: 'Radio',
    component: Radio,
};

export const Default = () => {
    const [value, setValue] = useState(true);

    return (
        <div style={{ margin: 50 }}>
            <Radio
                checked={value}
                onChange={() => setValue(!value)}
                sizeBox="mini"
                label="text"
            />
            <br />
            <br />
            <br />
            <Radio
                checked={value}
                onChange={() => setValue(!value)}
                sizeBox="tiny"
                label="text"
            />
            <br />
            <br />
            <br />
            <Radio
                checked={value}
                onChange={() => setValue(!value)}
                sizeBox="small"
                label="text"
            />
            <br />
            <br />
            <br />
            <Radio
                checked={value}
                onChange={() => setValue(!value)}
                sizeBox="medium"
                label="text"
            />
            <br />
            <br />
            <br />
            <Radio
                checked={value}
                onChange={() => setValue(!value)}
                sizeBox="large"
                label="text"
            />
            <br />
            <br />
            <br />
            <Radio
                checked={value}
                onChange={() => setValue(!value)}
                sizeBox="big"
                label="text"
            />
            <br />
            <br />
            <br />
            <Radio
                checked={value}
                onChange={() => setValue(!value)}
                sizeBox="huge"
                label="text"
            />
            <br />
            <br />
            <br />
            <Radio
                checked={value}
                onChange={() => setValue(!value)}
                sizeBox="massive"
                label="text"
            />
        </div>
    );
};
