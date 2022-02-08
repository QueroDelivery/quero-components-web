/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import styled, { css } from 'styled-components';
import { getMeasurement } from '../../helpers/FnUtil';
import { colors } from '../../styles/colors';

interface InputProps {
  requiredText?: boolean;
  isFieldActive?: boolean;
  errorMessage?: any;
  errorColor?: string;
  labelStyle?: React.CSSProperties;
  disabled?: boolean;
  width?: string | number;
  textColor?: string;
  icon?: boolean;
  iconPosition?: 'left' | 'right';
  action?: any;
  actionPosition?: 'left' | 'right';
  date?: boolean;
}

interface LabelErrorProps {
  errorColor?: string;
}

export const InputContainer = styled.div<InputProps>`
  font-family: MontSerrat !important;
  position: relative;
  opacity: ${props => (props.disabled ? '0.5' : '1')};
  width: ${props => getMeasurement(props.width, '100%')};

  input {
    font-family: MontSerrat !important;
    color: ${props => props.textColor || colors.gray20};
    width: 100%;
    height: 100%;
    padding-top: 20px;
    padding-left: ${props => {
      if (props.icon && !props.action) {
        if (props.iconPosition === 'right') {
          return '15px';
        }
        return '40px';
      }

      if (props.action && !props.icon) {
        if (props.actionPosition === 'left') {
          return '40px';
        }
        return '15px';
      }

      if (props.action || props.icon) {
        return '40px';
      }

      return '15px';
    }};
    padding-bottom: 5px;
    padding-right: ${props => {
      if (props.icon && !props.action) {
        if (props.iconPosition === 'right') {
          return '40px';
        }
        return '0px';
      }

      if (props.action && !props.icon) {
        if (props.actionPosition === 'left') {
          return '0px';
        }
        return '40px';
      }

      if (props.action && props.icon) {
        return '40px';
      }

      return '0px';
    }};
    border: none;
    outline: none;
    background-color: transparent;

    &::placeholder {
      color: ${colors.default10};
    }
  }

  ${props =>
    props.date && !props.isFieldActive
      ? css`
          input::-webkit-calendar-picker-indicator {
            display: none !important;
          }

          input[type='date']::-webkit-input-placeholder {
            display: none !important;
            visibility: hidden !important;
            -webkit-appearance: none;
          }

          input[type='date']::-webkit-datetime-edit-fields-wrapper,
          input[type='date']::-webkit-datetime-edit-fields-wrapper {
            visibility: hidden;
          }
        `
      : null}

  input:disabled {
    background-color: transparent;
  }

  .label-container {
    font-family: MontSerrat !important;
    position: absolute;
    bottom: 0px;
    top: 0px;
    left: 0px;
    width: 100%;
    right: 100%;
    pointer-events: none;
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${props => {
      if ((props.requiredText || props.errorMessage) && props.errorColor) {
        return props.errorColor;
      }

      if (props.requiredText || props.errorMessage) {
        return colors.danger20;
      }

      return colors.gray10;
    }};

    color: ${props => (props.isFieldActive ? colors.brand10 : colors.gray20)};
  }

  span,
  label {
    font-family: MontSerrat !important;
    position: absolute;
    bottom: 5px;
    left: ${props => {
      if (props.icon && !props.action) {
        if (props.iconPosition === 'right') {
          return '15px';
        }
        return '40px';
      }

      if (props.action && !props.icon) {
        if (props.actionPosition === 'left') {
          return '40px';
        }
        return '15px';
      }

      if (props.action || props.icon) {
        return '40px';
      }

      return '15px';
    }};

    transition: all 0.3s ease;

    ${props =>
      props.isFieldActive
        ? css`
            transform: translateY(-100%);
            font-size: 14px;
            color: ${() => {
              if (
                (props.requiredText || props.errorMessage) &&
                props.errorColor
              ) {
                return props.errorColor;
              }

              if (props.requiredText || props.errorMessage) {
                return colors.danger20;
              }

              return colors.brand10;
            }};
          `
        : css`
            font-size: 16px;
            color: ${() => {
              if (
                (props.requiredText || props.errorMessage) &&
                props.errorColor
              ) {
                return props.errorColor;
              }

              if (props.requiredText || props.errorMessage) {
                return colors.danger20;
              }

              return colors.gray20;
            }};
          `}
  }

  .icon {
    position: absolute;
    bottom: 0;
    padding: 5px 10px;
    ${props => props.iconPosition === 'right' && 'right: 0;'}
  }

  .icon-action {
    position: absolute;
    bottom: 0;
    padding: 5px 10px;
    ${props =>
      props.actionPosition && props.actionPosition === 'left'
        ? 'left: 0;'
        : 'right: 0;'}
  }

  @keyframes onAutoFillStart {
  }

  input:-webkit-autofill {
    animation: onAutoFillStart;
  }

  /* @keyframes onAutoFillCancel {
  }

  input:not(:-webkit-autofill) {
    animation-name: onAutoFillCancel;
  } */
`;

export const LabelError = styled.span<LabelErrorProps>`
  font-family: MontSerrat !important;
  font-size: 10px;
  margin-left: 0;
  color: ${props => {
    if (props.errorColor) {
      return props.errorColor;
    }

    return colors.danger20;
  }};
`;

export const Container = styled.div<{ hasError?: boolean }>`
  padding-bottom: ${props => (props.hasError ? '0' : '1.25rem')};
`;
