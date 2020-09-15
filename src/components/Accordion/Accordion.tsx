import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp, faAngleDown } from '@fortawesome/pro-light-svg-icons';

import { Container, Body } from './styles';
import { colors } from '../../styles/colors';

interface AccordionProps {
    title: string;
    colorTitle?: string;
    subtitle?: string;
    colorSubtitle?: string;
    value?: string;
    colorValue?: string;
    body: React.ReactNode;
    open: boolean;
    onChange: () => void;
    secundary?: boolean;
    width?: number;
}

const Accordion: React.FC<AccordionProps> = ({
    title,
    colorTitle,
    subtitle,
    colorSubtitle,
    value,
    colorValue,
    body,
    secundary,
    open,
    onChange,
    width,
}) => {
    return (
        <>
            <Container
                colorTitle={colorTitle}
                colorSubtitle={colorSubtitle}
                colorValue={colorValue}
                secundary={secundary}
                subtitle={subtitle}
                open={open}
                onClick={() => onChange()}
                width={width}
            >
                <div className="title-subtitle">
                    <span className="title">{title}</span>
                    {subtitle && <span className="subtitle">{subtitle}</span>}
                </div>
                <div className="value-icon">
                    <span className="value">{value}</span>
                    {secundary ? (
                        <FontAwesomeIcon
                            icon={open ? faAngleUp : faAngleDown}
                            size="lg"
                        />
                    ) : (
                        <FontAwesomeIcon
                            icon={open ? faAngleUp : faAngleDown}
                            size="2x"
                            color={colors.brand10}
                        />
                    )}
                </div>
            </Container>
            {<Body open={open} width={width}>{body}</Body>}
        </>
    );
};

export default Accordion;
