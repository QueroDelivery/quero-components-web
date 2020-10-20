import React, { useState, useEffect } from 'react';
import InputLine from './InputLine';
import { useForm } from 'react-hook-form';
import InputLineForm from './InputLineForm';
import { faSearch, faTimes } from '@fortawesome/pro-solid-svg-icons';

export default {
    title: 'InputLine',
    component: InputLine,
};

export const Default = () => {
    const [value, setValue2] = useState('');
    // const [value2, setValue22] = useState('');
    // const [value3, setValue23] = useState('');
    const [error, setError] = useState('');

    const { register, handleSubmit, errors, getValues, setValue } = useForm();

    useEffect(() => {
        setValue2('12312312312312');
    }, []);

    const onSubmitForm = (data: any) => {
        // console.log(data);
    };

    // console.log(setData);

    function nomeErrado(nome: any) {
        if (nome !== 'alan') {
            return 'errrooo';
        }

        return null;
    }

    return (
        <div style={{ margin: 50 }}>
            <form onSubmit={handleSubmit(onSubmitForm)}>
                <InputLineForm
                    label="Conta"
                    placeholder="Insira sua conta"
                    name="conta"
                    register={register}
                    validate={nomeErrado}
                    errors={errors.conta}
                    values={getValues}
                    defaultValue={value}
                    disabled
                    required
                />

                <InputLineForm
                    label="nome"
                    placeholder="Insira seu nome"
                    name="nome"
                    register={register}
                    errors={errors.nome}
                    values={getValues}
                    width="50%"
                    required
                />

                <InputLineForm
                    label="Senha"
                    placeholder="Insira sua senha"
                    name="senha"
                    register={register}
                    errors={errors.senha}
                    values={getValues}
                    onChange={event =>
                        setValue('senha', `${event.target.value} + 11esda`)
                    }
                    type="email"
                    required
                    icon={faSearch}
                />

                <InputLine
                    value={value}
                    onChange={event => setValue2(event.target.value)}
                    label="aaaaa"
                />

                <button type="submit">Enviar</button>
            </form>
        </div>
    );
};

export const Icon = () => {
    const [value, setValue] = useState(
        'asdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasda',
    );
    return (
        <div style={{ width: '500px' }}>
            <InputLine
                placeholder="aaa"
                label="Testeee"
                value={value}
                onChange={event => setValue(event.target.value)}
                action={
                    value.length > 0
                        ? {
                              icon: faTimes,
                              onClick: () => alert('aaaa'),
                                // position: 'left',
                          }
                        : null
                }
                // icon={faSearch}
                // iconPosition="right"
            />
        </div>
    );
};
