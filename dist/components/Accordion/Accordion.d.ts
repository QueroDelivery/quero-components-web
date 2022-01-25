import React, { ReactNode } from 'react';
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
    children?: ReactNode;
}
declare function Accordion({ className, style, title, titleClassName, titleStyle, subtitle, subtitleClassName, subtitleStyle, value, valueClassName, valueStyle, children, secondary, open, onClick, width, icon, iconClassName, iconStyle, customIcon, bodyClassName, bodyStyle, }: AccordionProps): JSX.Element;
export default Accordion;
