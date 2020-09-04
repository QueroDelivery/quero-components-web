/* eslint-disable react/prop-types */
import '../../styles/default.css';

import React, { useState, TextareaHTMLAttributes } from 'react';

import { Container, LabelError } from './styles';

export interface TextAreaProps
    extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string;
    textColor?: string;
    errorMessage?: string;
    errorColor?: string;
    containerStyle?: React.CSSProperties;
    labelStyle?: React.CSSProperties;
    width?: string;
    height?: number;
}

const InputLine: React.FC<TextAreaProps> = ({
    containerStyle,
    label,
    labelStyle,
    errorMessage,
    errorColor,
    width,
    height,
    textColor,
    ...rest
}) => {
    return (
        <div style={{ paddingBottom: errorMessage ? 0 : 20 }}>
            <Container
                errorMessage={errorMessage}
                errorColor={errorColor}
                labelStyle={labelStyle}
                containerStyle={containerStyle}
                width={width}
                style={containerStyle}
                disabled={rest.disabled}
                textColor={textColor}
                height={height}
            >
                <textarea {...rest} placeholder={rest.placeholder} />
            </Container>
            <LabelError errorColor={errorColor}>{errorMessage}</LabelError>
        </div>
    );
};

export default InputLine;
