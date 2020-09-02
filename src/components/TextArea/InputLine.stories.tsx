import React, { useState } from 'react';
import TextArea from './TextArea';

export default {
    title: 'TextArea',
    component: TextArea,
};

export const Default = () => {
    const [value, setValue] = useState('');
    const [value2, setValue2] = useState('');
    const [value3, setValue3] = useState('');
    const [error, setError] = useState('');

    return (
        <div style={{ margin: 50 }}>
            <TextArea
                label="Nome"
                placeholder="Insira seu nome"
                value={value3}
                onChange={(event: any) => setValue3(event.target.value)}
                errorMessage={error}
            />

            <button
                onClick={() => {
                    if (value3 !== 'alan') {
                        setError('Nome inválido');
                    } else {
                        setError('');
                    }
                }}
            >
                Enviar
            </button>
        </div>
    );
};
