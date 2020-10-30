import styled, { css } from 'styled-components';
import { colors } from '../../styles/colors';

const Sizes = {
    mini: 'mini',
    tiny: 'tiny',
    small: 'small',
    medium: 'medium',
    large: 'large',
    big: 'big',
    huge: 'huge',
    massive: 'massive',
};

interface LoaderProps {
    color?: string;
    size?: string | number;
    position?: 'left' | 'center' | 'right';
}

const widthLoader = (size: string | number) => {
    switch (size) {
        case Sizes.mini:
            return '1em';
        case Sizes.tiny:
            return '1.5em';
        case Sizes.small:
            return '2em';
        case Sizes.medium:
            return '2.5em';
        case Sizes.large:
            return '3em';
        case Sizes.big:
            return '3.5em';
        case Sizes.huge:
            return '4em';
        case Sizes.massive:
            return '4.5em';
        default:
            return size;
    }
};

const widthBorder = (size: string | number) => {
    switch (size) {
        case Sizes.mini:
            return '2px';
        case Sizes.tiny:
            return '2.5px';
        case Sizes.small:
            return '3px';
        case Sizes.medium:
            return '3.5px';
        case Sizes.large:
            return '4px';
        case Sizes.big:
            return '4.5px';
        case Sizes.huge:
            return '5px';
        case Sizes.massive:
            return '5.5px';
        default:
            return size;
    }
};

export const Container = styled.div<LoaderProps>`
    width: 100%;
    display: flex;
    justify-content: ${props =>
        props.position === 'left'
            ? 'flex-end'
            : props.position === 'right'
            ? 'flex-end'
            : 'center'};
`;

export const Load = styled.div<LoaderProps>`
    border-width: ${props => {
        if (props.size) {
            return widthBorder(props.size);
        }

        return '3.5px';
    }};
    border-style: solid;
    border-color: ${colors.default20};
    border-top-width: ${props => {
        if (props.size) {
            return widthBorder(props.size);
        }

        return '3.5px';
    }};
    border-top-style: solid;
    border-top-color: ${props => {
        if (props.color) {
            return props.color;
        }

        return colors.brand10;
    }};

    border-radius: 50%;
    width: ${props => {
        if (props.size) {
            return widthLoader(props.size);
        }

        return '2.5em';
    }};
    height: ${props => {
        if (props.size) {
            if (props.size) {
                return widthLoader(props.size);
            }
        }

        return '2.5em';
    }};
    animation: spin 0.6s linear infinite;

    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`;
