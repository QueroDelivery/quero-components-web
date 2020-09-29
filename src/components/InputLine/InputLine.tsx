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
}

const InputLine: React.FC<InputProps> = ({
    containerStyle,
    label,
    labelStyle,
    errorMessage,
    errorColor,
    width,
    textColor,
    ...rest
}) => {
    const [isFieldActive, setIsFieldActive] = useState(false);
    const [requiredText, setRequiredText] = useState(false);

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

        if (rest.required && !rest.value) {
            setRequiredText(true);
        } else {
            setRequiredText(false);
        }
    };

    return (
        <div style={{ paddingBottom: errorMessage || requiredText ? 0 : 20 }}>
            <Container
                isFieldActive={isFieldActive}
                requiredText={requiredText}
                errorMessage={errorMessage}
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
                    placeholder={isFieldActive ? rest.placeholder : ''}
                />
                <label style={labelStyle}>
                    <span>{label}</span>
                </label>
            </Container>
            {requiredText ? (
                <LabelError errorColor={errorColor}>Obrigatório</LabelError>
            ) : (
                <LabelError errorColor={errorColor}>{errorMessage}</LabelError>
            )}
        </div>
    );
};

export default InputLine;
