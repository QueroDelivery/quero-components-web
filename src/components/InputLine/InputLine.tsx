/* eslint-disable react/prop-types */
import '../../styles/default.css';

import React, { useState, InputHTMLAttributes, useEffect } from 'react';

import { Container, LabelError } from './styles';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    errorMessage?: string;
    errorColor?: string;
    containerStyle?: React.CSSProperties;
    labelStyle?: React.CSSProperties;
    width?: string;
    textColor?: string;
    required?: boolean;

    name?: string;
    errors?: any;
    register?: any;
    validate?: any;
    inputRef?: any;
    values?: any;

    limit?: number;
    minimum?: number;
}

const InputLine: React.FC<InputProps> = ({
    containerStyle,
    label,
    labelStyle,
    errorMessage,
    errorColor,
    width,
    textColor,
    inputRef,
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

        // if (rest.required && !rest.value) {
        //     setRequiredText(true);
        // } else {
        //     setRequiredText(false);
        // }
    };

    console.log(errors);

    return (
        <div
            style={{
                paddingBottom: message || errors || errorMessage ? 0 : 20,
            }}
        >
            <Container
                isFieldActive={isFieldActive}
                requiredText={
                    (errors && errors.type === 'required') || errorMessage
                        ? true
                        : false
                }
                errorMessage={errors || errorMessage}
                errorColor={errorColor}
                labelStyle={labelStyle}
                containerStyle={containerStyle}
                width={width}
                disabled={rest.disabled}
                style={containerStyle}
                textColor={textColor}
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
                                          : limit
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
                                          : minimum
                                          ? (value: any) => {
                                                if (value.length <= minimum) {
                                                    setMessage(
                                                        `${label} deve ter ${minimum} ou mais caracteres.`,
                                                    );
                                                    return false;
                                                } else {
                                                    setMessage('');
                                                    return true;
                                                }
                                            }
                                          : null,
                              })
                            : inputRef
                    }
                />
                <label style={labelStyle}>
                    <span>{label}</span>
                </label>
            </Container>
            {errors ? (
                <LabelError errorColor={errorColor}>
                    {errors.type === 'required' ? 'Obrigatório' : `${message}`}
                </LabelError>
            ) : errorMessage ? (
                <LabelError errorColor={errorColor}>{errorMessage}</LabelError>
            ) : null}
        </div>
    );
};

export default InputLine;
