import styled, { css } from 'styled-components';
import { colors } from '../../styles/colors';

interface CheckboxProps {
    disabled?: boolean;
}

export const Container = styled.div<CheckboxProps>`

    > input {
        display: none;
    }

    label{
        cursor: ${props => (props.disabled ? 'default' : 'pointer')};
        opacity: ${props => (props.disabled ? 0.5 : 1)}
    }

    > input + div {
        position: relative;
        padding-left: 25px;
        cursor: ${props => (props.disabled ? 'default' : 'pointer')};
        opacity: ${props => (props.disabled ? 0.5 : 1)};

        &:before {
            content: '';
            position: absolute;
            left: 0;
            top: 1px;
            width: 17px;
            height: 17px;
            border: 1px solid ${colors.default20};
            background: ${colors.default20};
            border-radius: 5px;
        }
        &:after {
            content: ' ';
            position: absolute;
            left: 0;
            top: 1px;
            width: 17px;
            height: 17px;
            border: 1px solid ${colors.brandDark};
            background: ${colors.brandDark};
            border-radius: 5px;
            color: ${colors.white};
            text-align: center;
            font-size: 12px;
        }
    }
    > input:not(:checked) + div {
        &:after {
            opacity: 0;
            transform: scale(0);
        }
    }
    > input:checked + div {
        &:after {
            opacity: 1;
            transform: scale(1);
        }
    }

    span{
        display: absolute;
        margin-left: -23px;
        margin-top: 1px;
        position: absolute;
        font-size: 14px;
        color: ${colors.white};
        z-index: 1;
    }
`;
