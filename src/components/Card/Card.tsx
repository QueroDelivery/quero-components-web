import React from 'react';

import { Shadow } from './styles';

interface CardProps {
    type: 'shadow';
    width?: number | string;
    style?: React.CSSProperties;
    isMobile?: boolean;
}

const Types = {
    shadow: 'shadow',
};

const Card: React.FC<CardProps> = ({
    children,
    width,
    type,
    style,
    isMobile,
}) => {
    function renderShadow() {
        return (
            <Shadow width={width} style={style} isMobile={isMobile}>
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
