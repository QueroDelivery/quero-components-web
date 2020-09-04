import React, { useState } from 'react';
import CheckBox from './Checkbox';

export default {
    title: 'Checkbox',
    component: CheckBox,
};

export const Default = () => {
    const [value, setValue] = useState(true);

    return (
        <div style={{ margin: 50 }}>
            <CheckBox
                checked={value}
                onChange={() => setValue(!value)}
                sizeBox="mini"
                label='text'
            />
            <br />
            <br />
            <br />
            <CheckBox
                checked={value}
                onChange={() => setValue(!value)}
                sizeBox="tiny"
                label='text'
            />
            <br />
            <br />
            <br />
            <CheckBox
                checked={value}
                onChange={() => setValue(!value)}
                sizeBox="small"
                label='text'
            />
            <br />
            <br />
            <br />
            <CheckBox
                checked={value}
                onChange={() => setValue(!value)}
                sizeBox="medium"
                label='text'
            />
            <br />
            <br />
            <br />
            <CheckBox
                checked={value}
                onChange={() => setValue(!value)}
                sizeBox="large"
                label='text'
            />
            <br />
            <br />
            <br />
            <CheckBox
                checked={value}
                onChange={() => setValue(!value)}
                sizeBox="big"
                label='text'
            />
            <br />
            <br />
            <br />
            <CheckBox
                checked={value}
                onChange={() => setValue(!value)}
                sizeBox="huge"
                label='text'
            />
            <br />
            <br />
            <br />
            <CheckBox
                checked={value}
                onChange={() => setValue(!value)}
                sizeBox="massive"
                label='text'
            />
        </div>
    );
};
