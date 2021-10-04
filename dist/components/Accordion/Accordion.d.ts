import React from 'react';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
export interface AccordionProps {
    className?: string;
    style?: React.CSSProperties;
    title: string;
    titleClassName?: string;
    titleStyle?: React.CSSProperties;
    subtitle?: string;
    subtitleClassName?: string;
    subtitleStyle?: React.CSSProperties;
    value?: string;
    valueClassName?: string;
    valueStyle?: React.CSSProperties;
    open: boolean;
    onClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
    secondary?: boolean;
    width?: number | string;
    icon?: IconDefinition;
    iconClassName?: string;
    iconStyle?: React.CSSProperties;
    customIcon?: React.ReactNode;
    bodyClassName?: string;
    bodyStyle?: React.CSSProperties;
}
declare const Accordion: React.FC<AccordionProps>;
export default Accordion;
