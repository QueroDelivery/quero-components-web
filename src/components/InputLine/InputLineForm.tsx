/* eslint-disable react/prop-types */
import '../../styles/default.css';

import React, { useState, InputHTMLAttributes, useEffect } from 'react';
import InputLine, { InputProps } from './InputLine';

import { Container, LabelError } from './styles';

export interface InputFormProps extends InputProps {
    required?: boolean;
    name: string;
    errors: any;
    register: any;
    validate?: any;
    values: any;

    limit?: number;
    minimum?: number;
}

const InputLineForm: React.FC<InputFormProps> = ({
    register,
    errors,
    validate,
    name,
    required,
    values,
    limit,
    minimum,
    ...rest
}) => {
    const [isFieldActive, setIsFieldActive] = useState(false);

    const [message, setMessage] = useState('');

    const value = values ? values(name) || rest.defaultValue : rest.value;

    useEffect(() => {
        if (value) {
            if (!isFieldActive) {
                setIsFieldActive(true);
            }
        }
    }, [value]);

    const handleFocus = () => {
        if (!isFieldActive) {
            setIsFieldActive(true);
        }
    };

    const handleBlur = () => {
        if (isFieldActive && !value) {
            setIsFieldActive(false);
        }
    };

    return (
        <div
            style={{
                paddingBottom: message || errors ? 0 : 20,
            }}
        >
            <Container
                isFieldActive={isFieldActive}
                requiredText={
                    errors && errors.type === 'required' ? true : false
                }
                errorMessage={errors}
                {...rest}
            >
                <input
                    {...rest}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    name={name}
                    placeholder={isFieldActive ? rest.placeholder : ''}
                    ref={
                        register
                            ? register({
                                  required: required,
                                  validate:
                                      validate && required
                                          ? (value: any) => {
                                                if (validate(value)) {
                                                    setMessage(validate(value));
                                                    return false;
                                                } else {
                                                    setMessage('');
                                                    return true;
                                                }
                                            }
                                          : limit && required
                                          ? (value: any) => {
                                                if (value.length > limit) {
                                                    setMessage(
                                                        `${limit} caracteres permitidos.`,
                                                    );
                                                    return false;
                                                } else {
                                                    setMessage('');
                                                    return true;
                                                }
                                            }
                                          : minimum && required
                                          ? (value: any) => {
                                                if (value.length < minimum) {
                                                    setMessage(
                                                        `${name} deve ter ${minimum} ou mais caracteres.`,
                                                    );
                                                    return false;
                                                } else {
                                                    setMessage('');
                                                    return true;
                                                }
                                            }
                                          : null,
                              })
                            : null
                    }
                />
                <label style={rest.labelStyle}>
                    <span>{rest.label}</span>
                </label>
            </Container>
            {errors ? (
                <LabelError>
                    {errors.type === 'required' ? 'Obrigatório' : `${message}`}
                </LabelError>
            ) : null}
        </div>
    );
};

export default InputLineForm;
