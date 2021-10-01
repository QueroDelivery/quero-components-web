import React from 'react';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
export interface AccordionProps {
    title: string;
    colorTitle?: string;
    subtitle?: string;
    colorSubtitle?: string;
    value?: string;
    colorValue?: string;
    open: boolean;
    onClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
    secondary?: boolean;
    width?: number | string;
    icon?: IconDefinition;
    customIcon?: React.ReactNode;
    colorIcon?: string;
    fontSizeTitle?: number | string;
}
declare const Accordion: React.FC<AccordionProps>;
export default Accordion;
