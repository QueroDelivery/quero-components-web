/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { InputProps } from "./InputLine";

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
  msgErrorValidate?: string;
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
  msgErrorValidate,
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
    if (rest.onBlur) {
      setImmediate(rest.onBlur);
    }
  };

  const validadeRegister = (valueRegister: string) => {
    let result = true;
    let mensagem = "";

    if (validate) {
      if (validate(valueRegister)) {
        mensagem = validate(valueRegister);
        result = false;
      }
    }

    if (limit) {
      if (valueRegister.length > limit) {
        mensagem = msgErrorValidate
          ? `${msgErrorValidate}`
          : `${limit} caracteres permitidos.`;
        result = false;
      }
    }

    if (minimum) {
      if (valueRegister.length < minimum) {
        mensagem = msgErrorValidate
          ? `${msgErrorValidate}`
          : `${rest.label || name} deve ter ${minimum} ou mais caracteres.`;
        result = false;
      }
    }

    setMessage(mensagem);
    return result;
  };

  return (
    <div
      style={{
        paddingBottom: message || errors ? 0 : 20,
      }}
    >
      <Container
        isFieldActive={isFieldActive}
        requiredText={!!(errors && errors.type === "required")}
        errorMessage={errors}
        // action={rest.action?.icon ? true : false}
        containerStyle={rest.containerStyle}
        width={rest.width}
        disabled={rest.disabled}
        style={rest.containerStyle}
        textColor={rest.textColor}
        icon={!!rest.icon}
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
                  required,
                  validate: validadeRegister,
                })
              : null
          }
        />
        <label>
          <span style={rest.labelStyle}>{rest.label}</span>
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
