/* eslint-disable react/prop-types */
import React, { useState } from 'react';

import TextArea, { TextAreaProps } from './TextArea';

export interface TextAreaFormProps extends TextAreaProps {
    required?: boolean;
    name: string;
    errors: any;
    register: any;
    validate?: any;

    limit?: number;
    minimum?: number;
}

const TextAreaForm: React.FC<TextAreaFormProps> = ({
    register,
    errors,
    validate,
    name,
    required,
    limit,
    minimum,
    ...rest
}) => {
    const [message, setMessage] = useState('');

    return (
        <TextArea
            {...rest}
            name={name}
            errorMessage={
                errors
                    ? errors.type === 'required'
                        ? 'Obrigatório'
                        : `${message}`
                    : ''
            }
            textAreaRef={
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
    );
};

export default TextAreaForm;
