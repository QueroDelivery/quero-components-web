import React from 'react';
import { IconDefinition } from '@fortawesome/pro-light-svg-icons';
interface AccordionProps {
    title: string;
    colorTitle?: string;
    subtitle?: string;
    colorSubtitle?: string;
    value?: string;
    colorValue?: string;
    open: boolean;
    onChange: () => void;
    secundary?: boolean;
    width?: number;
    icon?: IconDefinition;
    colorIcon?: string;
    fontSizeTitle?: number;
}
declare const Accordion: React.FC<AccordionProps>;
export default Accordion;
