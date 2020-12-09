/* eslint-disable react/prop-types */
import React, { TextareaHTMLAttributes } from 'react';

import { Container, LabelError, Label } from './styles';

export interface TextAreaProps
    extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string;
    labelColor?: string;
    textColor?: string;
    errorMessage?: string;
    errorColor?: string;
    containerStyle?: React.CSSProperties;
    labelStyle?: React.CSSProperties;
    width?: string;
    height?: number;
    textAreaRef?: any;
}

const TextArea: React.FC<TextAreaProps> = ({
    containerStyle,
    label,
    labelColor,
    labelStyle,
    errorMessage,
    errorColor,
    width,
    height,
    textColor,
    textAreaRef,
    ...rest
}) => {
    return (
        <div style={{ paddingBottom: errorMessage ? 0 : 20 }}>
            {label && (
                <Label errorMessage={errorMessage} labelColor={labelColor}>
                    {label}
                </Label>
            )}
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
                <textarea
                    {...rest}
                    placeholder={rest.placeholder}
                    ref={textAreaRef}
                />
            </Container>
            <LabelError errorColor={errorColor}>{errorMessage}</LabelError>
        </div>
    );
};

export default TextArea;
