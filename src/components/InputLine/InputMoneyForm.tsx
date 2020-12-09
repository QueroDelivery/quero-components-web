/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { InputProps } from './InputLine';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import NumberFormat from 'react-number-format';

import { Container, LabelError } from './styles';
import { colors } from '../../styles/colors';

export interface InputFormProps extends InputProps {
    required?: boolean;
    name: string;
    errors: any;
    register?: any;
    validate?: any;
    values: any;
    onChange(value: any): void;
    setError: any;
    isSubmitted: boolean;

    limit?: number;
    minimum?: number;
}

const InputMoneyForm: React.FC<InputFormProps> = ({
    register,
    errors,
    validate,
    name,
    required,
    values,
    limit,
    minimum,
    setError,
    onChange,
    isSubmitted,
    ...rest
}) => {
    const [isFieldActive, setIsFieldActive] = useState(false);
    const [formattedValue, setFormattedValue] = useState<any>();
    const [floatValue, setFloatValue] = useState<any>();

    const [message, setMessage] = useState('');

    const value = values ? values(name) || rest.defaultValue : rest.value;

    useEffect(() => {
        if (value) {
            if (!isFieldActive) {
                setIsFieldActive(true);
            }
        }
    }, [value]);

    useEffect(() => {
        if (isSubmitted && !value && required) {
            setError(name, { type: 'required' });
        }
    }, [isSubmitted, value]);

    useEffect(() => {
        setFormattedValue(value);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if (value != floatValue || value == 0) {
            setFormattedValue(value);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
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

    function onChanged(values: any) {
        if (values.floatValue === 0) {
            onChange(parseFloat(`${values.formattedValue}`));
        } else {
            onChange(values.floatValue);
        }

        setFloatValue(values.floatValue);
        setFormattedValue(values.formattedValue);
    }

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
                containerStyle={rest.containerStyle}
                width={rest.width}
                disabled={rest.disabled}
                style={rest.containerStyle}
                textColor={rest.textColor}
                icon={rest.icon ? true : false}
                iconPosition={rest.iconPosition}
                action={rest.action}
                actionPosition={rest.action?.position}
            >
                {rest.icon && (
                    <div className="icon">
                        <FontAwesomeIcon
                            icon={rest.icon}
                            color={rest.iconColor || colors.brand10}
                        />
                    </div>
                )}

                {rest.action && (
                    <div className="icon-action" onClick={rest.action.onClick}>
                        <FontAwesomeIcon
                            icon={rest.action.icon}
                            color={rest.action.iconColor || colors.brand10}
                        />
                    </div>
                )}

                <NumberFormat
                    value={formattedValue}
                    decimalSeparator=","
                    thousandSeparator="."
                    onValueChange={onChanged}
                    decimalScale={2}
                    inputMode="decimal"
                    prefix="R$"
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    placeholder={isFieldActive ? rest.placeholder : ''}
                    name={name}
                    getInputRef={
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

export default InputMoneyForm;
