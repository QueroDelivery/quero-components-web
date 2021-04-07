import React from 'react';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
interface AccordionProps {
    title: string;
    colorTitle?: string;
    subtitle?: string;
    colorSubtitle?: string;
    value?: string;
    colorValue?: string;
    open: boolean;
    onChange: () => void;
    secondary?: boolean;
    width?: number | string;
    icon?: IconDefinition;
    customIcon?: React.ReactNode;
    colorIcon?: string;
    fontSizeTitle?: number;
}
declare const Accordion: React.FC<AccordionProps>;
export default Accordion;
