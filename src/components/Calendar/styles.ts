import styled from 'styled-components';
import { colors } from '../../styles/colors';

interface CalendarProps {
    labelColor?: string;
    brand?: boolean;
}

export const Container = styled.div<CalendarProps>`
    display: flex;
    flex-direction: column;

    input {
        outline: none;
        padding: 7px 15px;
        border-radius: 20px;
        border: 1px solid
            ${props => (props.brand ? colors.brandLight : colors.gray10)};
        color: ${props => (props.brand ? colors.brand10 : colors.gray20)};
        cursor: pointer;

        background-color: ${props =>
            props.brand ? colors.brandLight : colors.white};

        font-weight: bold;

        &::placeholder {
            color: ${props =>
                props.brand ? colors.brandTransparent : colors.default10};
        }
    }

    span {
        font-size: 14px;
        color: ${props => {
            if (props.labelColor) {
                return props.labelColor;
            }

            return colors.brand10;
        }};
        margin-left: 15px;
        margin-bottom: 3px;
    }
`;
