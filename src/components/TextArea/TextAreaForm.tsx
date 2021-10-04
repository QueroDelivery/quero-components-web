/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/prop-types */
import { useState } from 'react';

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

function TextAreaForm({
  register,
  errors,
  validate,
  name,
  required,
  limit,
  minimum,
  ...rest
}: TextAreaFormProps) {
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
      {...register({
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
            : limit && required
            ? (value: any) => {
                if (value.length > limit) {
                  setMessage(`${limit} caracteres permitidos.`);
                  return false;
                }
                setMessage('');
                return true;
              }
            : minimum && required
            ? (value: any) => {
                if (value.length < minimum) {
                  setMessage(`${name} deve ter ${minimum} ou mais caracteres.`);
                  return false;
                }
                setMessage('');
                return true;
              }
            : null,
      })}
    />
  );
}

export default TextAreaForm;
