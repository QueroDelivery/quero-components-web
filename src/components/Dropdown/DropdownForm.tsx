/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from 'react';

import Dropdown, { DropdownProps } from './Dropdown';

export interface DropdownFormProps
  extends Omit<DropdownProps, 'onChange' | 'value'> {
  required?: boolean;
  name: string;
  errors: any;
  register: any;
  validate?: any;
  setValue: any;
  clearError: any;
  value?: any;
}

function DropdownForm({
  value,
  clearError,
  errors,
  name,
  register,
  required,
  setValue,
  validate,
  ...rest
}: DropdownFormProps) {
  const [valueDefault, setValueDefault] = useState<any>();
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
        { name },
        {
          required,
          validate:
            validate && required
              ? (value: any) => {
                  if (validate(value)) {
                    setMessage(validate(value));
                    return false;
                  }
                  setMessage('');
                  return true;
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
      onChange={(_ev, data) => {
        setValueDefault(data.value);
        setValue(name, value);
        if (errors && clearError) {
          clearError(name);
        }
      }}
      line={rest.line}
      errorMessage={
        errors
          ? errors.type === 'required'
            ? 'Obrigatório'
            : `${message}`
          : ''
      }
    />
  );
}

export default DropdownForm;
