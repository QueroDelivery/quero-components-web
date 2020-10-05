import styled, { css } from 'styled-components';
import { colors } from '../../styles/colors';

interface CardProps {
    width?: number | string;
    isMobile?: boolean;
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

    margin-left: ${props => (props.isMobile ? '-15px' : '0')};
    margin-right: ${props => (props.isMobile ? '-15px' : '0')};
`;
