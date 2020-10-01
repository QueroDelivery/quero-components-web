import React, { useState, useEffect } from 'react';
import InputLine from './InputLine';
import { useForm } from 'react-hook-form';

export default {
    title: 'InputLine',
    component: InputLine,
};

export const Default = () => {
    // const [value, setValue] = useState('');
    // const [value2, setValue2] = useState('');
    // const [value3, setValue3] = useState('');
    // const [error, setError] = useState('');

    const {
        register,
        handleSubmit,
        errors,
        clearError,
        getValues,
        setValue,
    } = useForm();

    // useEffect(() => {
    //     setValue('12312312312312');
    // }, []);

    const onSubmitForm = (data: any) => {
        console.log(data);
    };

    // console.log(setData);

    function nomeErrado(nome) {
        if (nome !== 'alan') {
            return 'errrooo';
        }

        return null;
    }

    return (
        <div style={{ margin: 50 }}>
            <form onSubmit={handleSubmit(onSubmitForm)}>
                <InputLine
                    label="Conta"
                    placeholder="Insira sua conta"
                    name="conta"
                    register={register}
                    validate={nomeErrado}
                    onChange={event => setValue('conta', event.target.value)}
                    errors={errors.conta}
                    values={getValues}
                    defaultValue='12312312312312'
                />

                <InputLine
                    label="nome"
                    placeholder="Insira seu nome"
                    name="nome"
                    register={register}

                    errors={errors.nome}
                    values={getValues}
                />

                <InputLine
                    label="Senha"
                    placeholder="Insira sua senha"
                    name="senha"
                    register={register}

                    errors={errors.senha}
                    values={getValues}
                />

                <button type="submit">Enviar</button>
            </form>
        </div>
    );
};
