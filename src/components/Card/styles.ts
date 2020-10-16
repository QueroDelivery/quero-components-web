import styled, { css } from 'styled-components';
import { colors } from '../../styles/colors';

interface CardProps {
    width?: number | string;
    colorText?: string;
    loading?: boolean;
}

export const Shadow = styled.div<CardProps>`
    padding: 20px;
    box-shadow: 0 20px 50px 0 rgba(0, 0, 0, 0.16);
    background-color: ${colors.white};
    border-radius: 30px;
    position: relative;

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

    .loading-card {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgba(255,255,255,.8);
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        border-radius: 30px;
        z-index: 2;
        position: absolute;
    }
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
        color: ${props =>
            props.colorText ? props.colorText : colors.brandDark};
    }
`;
