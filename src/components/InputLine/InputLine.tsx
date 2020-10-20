/* eslint-disable react/prop-types */
import '../../styles/default.css';

import React, { useState, InputHTMLAttributes, useEffect } from 'react';
import { IconDefinition } from '@fortawesome/pro-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Container, LabelError } from './styles';
import { colors } from '../../styles/colors';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    errorMessage?: string;
    containerStyle?: React.CSSProperties;
    labelStyle?: React.CSSProperties;
    width?: string;
    textColor?: string;
    inputRef?: any;
    icon?: IconDefinition;
    iconPosition?: 'left' | 'right';
    iconColor?: string;
    action?: { icon: IconDefinition; iconColor?: string; onClick: () => void };
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
    icon,
    iconPosition,
    iconColor,
    action,
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
                icon={iconPosition !== 'right' ? true : false}
                iconPosition={iconPosition}
                action={action ? true : false}
            >
                {icon && (
                    <div className="icon">
                        <FontAwesomeIcon
                            icon={icon}
                            color={iconColor || colors.brand10}
                        />
                    </div>
                )}

                {action && (
                    <div className="icon-action" onClick={action.onClick}>
                        <FontAwesomeIcon
                            icon={action.icon}
                            color={action.iconColor || colors.brand10}
                        />
                    </div>
                )}
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
