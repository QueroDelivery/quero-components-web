import React from 'react';

import { Shadow } from './styles';

interface CardProps {
    type: 'shadow';
    width?: number | string;
    style?: React.CSSProperties;
}

const Types = {
    shadow: 'shadow',
};

const Card: React.FC<CardProps> = ({ children, width, type, style }) => {
    function renderShadow() {
        return (
            <Shadow width={width} style={style}>
                {children}
            </Shadow>
        );
    }

    switch (type) {
        case Types.shadow:
            return renderShadow();
        default:
            return <div />;
    }
};

export default Card;
