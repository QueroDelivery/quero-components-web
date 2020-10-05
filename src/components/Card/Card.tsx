import React from 'react';

import { Shadow } from './styles';

interface CardProps {
    type: 'shadow';
    width?: number | string;
}

const Types = {
    shadow: 'shadow',
};

const Card: React.FC<CardProps> = ({ children, width, type }) => {
    function renderShadow() {
        return <Shadow width={width}>{children}</Shadow>;
    }

    switch (type) {
        case Types.shadow:
            return renderShadow();
        default:
            return <div />;
    }
};

export default Card;
