import React, { useState, useEffect } from 'react';
import Dropdown from './Dropdown';
import { useForm } from 'react-hook-form';
import DropdownForm from './DropdownForm';

export default {
    title: 'Dropdown',
    component: Dropdown,
};

export const Default = () => {
    const [text, setText] = useState(0);
    // const [err, setErr] = useState('');

    const {
        register,
        handleSubmit,
        errors,
        clearErrors,
        getValues,
        setValue,
        watch
    } = useForm();

    useEffect(() => {
        setText(345);
    }, []);

    function submit(data: any) {
        console.log(data);
    }

    const test = watch('teste')
    console.log(test)

    return (
        <>
            <div>
                <form onSubmit={handleSubmit(submit)}>
                    <DropdownForm
                        name="teste"
                        label="Teste"
                        register={register}
                        value={text}
                        options={[
                            { id: 1, text: 'aaa', value: 123 },
                            { id: 2, text: 'bbb', value: 234 },
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
                        setValue={setValue}
                        errors={errors.teste}
                        clearError={clearErrors}
                        placeholder="Selecione aqui"
                        search
                        required
                        // value={text}
                        // onChange={value => {
                        //     if (value !== 345) setErr('obrigátorio');
                        //     setText(value);
                        // }}
                        // placeholder="selecione um numero"
                        // search
                        // errorMessage={err}
                        // options={}
                    />

                    <DropdownForm
                        name="teste2"
                        label="Teste2"
                        register={register}
                        options={[
                            { id: 1, text: 'aaa', value: 123 },
                            { id: 2, text: 'bbb', value: 234 },
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
                        setValue={setValue}
                        errors={errors.teste2}
                        clearError={clearErrors}
                        placeholder="Selecione aqui"
                        textAlign="center"
                        brand
                        required
                        // value={text}
                        // onChange={value => {
                        //     if (value !== 345) setErr('obrigátorio');
                        //     setText(value);
                        // }}
                        // placeholder="selecione um numero"
                        // search
                        // errorMessage={err}
                        // options={}
                    />

                    <button type="submit">Enviar</button>
                </form>
            </div>
        </>
    );
};

export const Brand = () => {
    const [text, setText] = useState('');
    const [err, setErr] = useState('');

    return (
        <div style={{ margin: 50 }}>
            <Dropdown
                brand
                value={text}
                onChange={value => {
                    if (value !== 345) setErr('obrigátorio');
                    setText(value);
                }}
                search
                placeholder="selecione um numero"
                textAlign="center"
                errorMessage={err}
                options={[
                    { id: 1, text: 'aaa', value: 123 },
                    { id: 2, text: 'bbb', value: 234 },
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
