import styled, { css } from 'styled-components';
import { colors } from '../../styles/colors';

interface CardProps {
    width?: number | string;
    colorText?: string;
}

export const Shadow = styled.div<CardProps>`
    padding: 20px;
    box-shadow: 0 20px 50px 0 rgba(0, 0, 0, 0.16);
    background-color: ${colors.white};
    border-radius: 30px;

    width: ${props => {
        if (props.width) {
            if (typeof props.width === 'string') {
                return `${props.width.replace('%', '')}%`;
            } else {
                return `${props.width}px`;
            }
        }

        return '100%';
    }};
`;

export const Button = styled.a<CardProps>`
    background-color: ${colors.card};
    padding: 12px 25px;
    border-radius: 30px;
    border: 1px solid ${props => colors.default30};
    width: ${props => {
        if (props.width) {
            if (typeof props.width === 'string') {
                return `${props.width.replace('%', '')}%`;
            } else {
                return `${props.width}px`;
            }
        }

        return '100%';
    }};
    cursor: pointer;
    display: flex;
    align-items: center;

    :hover {
        background-color: ${colors.default10};
    }

    span {
        margin-left: 15px;
        font-size: 15px;
        color: ${props => (props.colorText ? props.colorText : colors.brandDark)};
    }
`;
