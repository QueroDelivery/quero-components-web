import React, { useState, useEffect } from 'react';

import Dropdown, { DropdownProps } from './Dropdown';

interface DropdownFormProps extends Omit<DropdownProps, 'onChange' | 'value'> {
    required?: boolean;
    name: string;
    errors: any;
    register: any;
    validate?: any;
    setValue: any;
    clearError: any;
    value?: any;
}

const DropdownForm: React.FC<DropdownFormProps> = ({
    value,
    clearError,
    errors,
    name,
    register,
    required,
    setValue,
    validate,
    ...rest
}) => {
    const [valueDefault, setValueDefault] = useState();
    const [message, setMessage] = useState('');

    useEffect(() => {
        if (!valueDefault) {
            setValue(name, value);
        } else {
            setValue(name, valueDefault);
        }
    }, [valueDefault]);

    useEffect(() => {
        setValueDefault(value);
    }, [value]);

    useEffect(() => {
        if (register) {
            register(
                { name: name },
                {
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
                            : null,
                },
            );
        }
    }, [register]);

    return (
        <Dropdown
            {...rest}
            value={valueDefault}
            onChange={value => {
                setValueDefault(value);
                setValue(name, value);
                if (errors && clearError) {
                    clearError(name);
                }
            }}
            errorMessage={
                errors
                    ? errors.type === 'required'
                        ? 'Obrigatório'
                        : `${message}`
                    : ''
            }
        />
    );
};

export default DropdownForm;