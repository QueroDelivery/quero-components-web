/* eslint-disable react/prop-types */
import React, { forwardRef, Ref, TextareaHTMLAttributes } from 'react';

import {
  Container,
  LabelError,
  Label,
  Footer,
  LabelLengthInfo,
} from './styles';

export interface TextAreaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  labelColor?: string;
  labelStyle?: React.CSSProperties;
  labelClassName?: string;

  errorClassName?: string;
  errorStyle?: React.CSSProperties;
  errorMessage?: string;
  errorColor?: string;

  textColor?: string;
  containerStyle?: React.CSSProperties;
  containerClassName?: string;

  lengthInfo?: boolean | number;
  lengthInfoClassName?: string;
  lengthInfoStyle?: React.CSSProperties;

  width?: number | string;
  height?: number | string;
}

function TextArea(
  {
    label,
    labelClassName,
    labelStyle,
    labelColor,

    errorClassName,
    errorStyle,
    errorMessage,
    errorColor,

    containerStyle,
    containerClassName,
    textColor,
    width,
    height,

    lengthInfo,
    lengthInfoClassName,
    lengthInfoStyle,
    ...rest
  }: TextAreaProps,
  ref: Ref<HTMLTextAreaElement>,
) {
  return (
    <div>
      {label && (
        <Label
          style={labelStyle}
          errorMessage={errorMessage}
          labelColor={labelColor}
          className={labelClassName}
          errorColor={errorColor}
        >
          {label}
        </Label>
      )}
      <Container
        errorMessage={errorMessage}
        errorColor={errorColor}
        style={containerStyle}
        className={containerClassName}
        disabled={rest.disabled}
        textColor={textColor}
        width={width}
        height={height}
      >
        <textarea {...rest} ref={ref} />
      </Container>
      <Footer>
        <LabelError
          className={errorClassName}
          style={errorStyle}
          errorColor={errorColor}
        >
          {errorMessage}
        </LabelError>

        {(lengthInfo || typeof lengthInfo == 'number') && rest.maxLength ? (
          <LabelLengthInfo
            className={lengthInfoClassName}
            style={lengthInfoStyle}
          >{`${
            typeof lengthInfo == 'number'
              ? lengthInfo
              : typeof rest.value == 'string'
              ? rest.value.length
              : 0
          }/${rest.maxLength} caracteres`}</LabelLengthInfo>
        ) : null}
      </Footer>
    </div>
  );
}

export default forwardRef(TextArea);
