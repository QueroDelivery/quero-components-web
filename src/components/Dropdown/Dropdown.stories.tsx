import React, { useState } from 'react';
import Dropdown from './Dropdown';

export default {
    title: 'Dropdown',
    component: Dropdown,
};

export const Default = () => {
    const [text, setText] = useState('');
    return (
        <div style={{ margin: 50 }}>
            <Dropdown
                value={text}
                onChange={value => setText(value)}
                placeholder="selecione um numero"
                search
                options={[
                    { id: 1, text: '123', value: 123 },
                    { id: 2, text: '234', value: 234 },
                    { id: 3, text: '345', value: 345 },
                    { id: 4, text: '456', value: 456 },
                    { id: 5, text: '567', value: 567 },
                    { id: 6, text: '678', value: 678 },
                    { id: 7, text: '12', value: 12 },
                    { id: 8, text: '13', value: 13 },
                    { id: 9, text: '14', value: 14 },
                    { id: 10, text: '15', value: 15 },
                    { id: 11, text: '16', value: 16 },
                    { id: 12, text: '17', value: 17 },
                    { id: 13, text: '18', value: 18 },
                    { id: 14, text: '19', value: 19 },
                ]}
            />
        </div>
    );
};

export const Brand = () => {
    const [text, setText] = useState('');
    return (
        <div style={{ margin: 50 }}>
            <Dropdown
                brand
                value={text}
                onChange={value => setText(value)}
                placeholder="selecione um numero"
                textAlign="center"
                options={[
                    { id: 1, text: '123', value: 123 },
                    { id: 2, text: '234', value: 234 },
                    { id: 3, text: '345', value: 345 },
                    { id: 4, text: '456', value: 456 },
                    { id: 5, text: '567', value: 567 },
                    { id: 6, text: '678', value: 678 },
                    { id: 7, text: '12', value: 12 },
                    { id: 8, text: '13', value: 13 },
                    { id: 9, text: '14', value: 14 },
                    { id: 10, text: '15', value: 15 },
                    { id: 11, text: '16', value: 16 },
                    { id: 12, text: '17', value: 17 },
                    { id: 13, text: '18', value: 18 },
                    { id: 14, text: '19', value: 19 },
                ]}
            />
        </div>
    );
};
