/* eslint-disable react/prop-types */
import '../../styles/default.css';

import React, { useState, InputHTMLAttributes, useEffect } from 'react';

import { Container, LabelError } from './styles';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    errorMessage?: string;
    containerStyle?: React.CSSProperties;
    labelStyle?: React.CSSProperties;
    width?: string;
    textColor?: string;
    inputRef?: any;
}

const InputLine: React.FC<InputProps> = ({
    containerStyle,
    label,
    labelStyle,
    errorMessage,
    width,
    textColor,
    inputRef,
    name,
    ...rest
}) => {
    const [isFieldActive, setIsFieldActive] = useState(false);

    useEffect(() => {
        if (rest.value) {
            if (!isFieldActive) {
                setIsFieldActive(true);
            }
        }
    }, [rest.value]);

    const handleFocus = () => {
        if (!isFieldActive) {
            setIsFieldActive(true);
        }
    };

    const handleBlur = () => {
        if (isFieldActive && !rest.value) {
            setIsFieldActive(false);
        }
    };

    return (
        <div
            style={{
                paddingBottom: errorMessage ? 0 : 20,
            }}
        >
            <Container
                isFieldActive={isFieldActive}
                errorMessage={errorMessage}
                // labelStyle={labelStyle}
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
                    ref={inputRef}
                />
                <label style={labelStyle}>
                    <span>{label}</span>
                </label>
            </Container>
            {errorMessage ? <LabelError>{errorMessage}</LabelError> : null}
        </div>
    );
};

export default InputLine;
