import React, { InputHTMLAttributes, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Container } from './styles';
import { faAddressBook, faCheck } from '@fortawesome/pro-solid-svg-icons';

export interface InputProps
    extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
    label?: string;
    labelStyle?: React.CSSProperties;
    sizeBox?:
        | 'mini'
        | 'tiny'
        | 'small'
        | 'medium'
        | 'large'
        | 'big'
        | 'huge'
        | 'massive';
    onChange?: () => void;
}

const Checkbox: React.FC<InputProps> = ({ label, labelStyle, sizeBox, ...rest }) => {
    return (
        <Container
            onClick={() =>
                !rest.disabled ? (rest.onChange ? rest.onChange() : null) : null
            }
            disabled={rest.disabled}
            sizeBox={sizeBox}
        >
            <input type="checkbox" {...rest} />
            <div>
                {rest.checked && (
                    <span>
                        <FontAwesomeIcon icon={faCheck} />
                    </span>
                )}
                <label style={labelStyle}>{label}</label>
            </div>
        </Container>
    );
};

export default Checkbox;
