/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import { InputProps } from "./InputLine";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Container, LabelError } from "./styles";
import { colors } from "../../styles/colors";

export interface InputFormProps extends InputProps {
    required?: boolean;
    name: string;
    errors: any;
    register: any;
    validate?: any;
    values: any;

    limit?: number;
    minimum?: number;
}

const InputLineForm: React.FC<InputFormProps> = ({
    register,
    errors,
    validate,
    name,
    required,
    values,
    limit,
    minimum,
    ...rest
}) => {
    const [isFieldActive, setIsFieldActive] = useState(false);

    const [message, setMessage] = useState("");

    const value = values ? values(name) || rest.defaultValue : rest.value;

    useEffect(() => {
        if (value) {
            if (!isFieldActive) {
                setIsFieldActive(true);
            }
        }
    }, [value]);

    const handleFocus = () => {
        if (!isFieldActive) {
            setIsFieldActive(true);
        }
    };

    const handleBlur = () => {
        if (isFieldActive && !value) {
            setIsFieldActive(false);
        }
    };

    return (
        <div
            style={{
                paddingBottom: message || errors ? 0 : 20,
            }}
        >
            <Container
                isFieldActive={isFieldActive}
                requiredText={
                    errors && errors.type === "required" ? true : false
                }
                errorMessage={errors}
                // action={rest.action?.icon ? true : false}
                containerStyle={rest.containerStyle}
                width={rest.width}
                disabled={rest.disabled}
                style={rest.containerStyle}
                textColor={rest.textColor}
                icon={rest.icon ? true : false}
                iconPosition={rest.iconPosition}
                action={rest.action}
                actionPosition={rest.action?.position}
                date={rest.type === "date"}
            >
                {rest.icon && (
                    <div className="icon">
                        <FontAwesomeIcon
                            icon={rest.icon}
                            color={rest.iconColor || colors.brand10}
                        />
                    </div>
                )}

                {rest.action && (
                    <div className="icon-action" onClick={rest.action.onClick}>
                        <FontAwesomeIcon
                            icon={rest.action.icon}
                            color={rest.action.iconColor || colors.brand10}
                        />
                    </div>
                )}

                <input
                    {...rest}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    name={name}
                    placeholder={isFieldActive ? rest.placeholder : ""}
                    ref={
                        register
                            ? register({
                                  required: required,
                                  validate:
                                      validate && required
                                          ? (value: any) => {
                                                if (validate(value)) {
                                                    setMessage(validate(value));
                                                    return false;
                                                } else {
                                                    setMessage("");
                                                    return true;
                                                }
                                            }
                                          : limit && required
                                          ? (value: any) => {
                                                if (value.length > limit) {
                                                    setMessage(
                                                        `${limit} caracteres permitidos.`
                                                    );
                                                    return false;
                                                } else {
                                                    setMessage("");
                                                    return true;
                                                }
                                            }
                                          : minimum && required
                                          ? (value: any) => {
                                                if (value.length < minimum) {
                                                    setMessage(
                                                        `${name} deve ter ${minimum} ou mais caracteres.`
                                                    );
                                                    return false;
                                                } else {
                                                    setMessage("");
                                                    return true;
                                                }
                                            }
                                          : null,
                              })
                            : null
                    }
                />
                <label style={rest.labelStyle}>
                    <span>{rest.label}</span>
                </label>
            </Container>
            {errors ? (
                <LabelError>
                    {errors.type === "required" ? "Obrigatório" : `${message}`}
                </LabelError>
            ) : null}
        </div>
    );
};

export default InputLineForm;
