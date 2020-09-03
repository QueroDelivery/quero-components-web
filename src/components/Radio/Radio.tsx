import React, { InputHTMLAttributes, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Container } from './styles';
import { faAddressBook, faCheck } from '@fortawesome/pro-solid-svg-icons';

export interface InputProps
    extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
    label?: string;
    labelStyle?: React.CSSProperties;
    onChange: () => void;
}

const Radio: React.FC<InputProps> = ({ label, labelStyle, ...rest }) => {
    return (
        <Container
            onClick={() => (!rest.disabled ? rest.onChange() : null)}
            disabled={rest.disabled}
        >
            <input type="radio" {...rest} />
            <div>
                <label style={labelStyle}>{label}</label>
            </div>
        </Container>
    );
};

export default Radio;
