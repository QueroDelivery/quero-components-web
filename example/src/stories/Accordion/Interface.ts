import { IconDefinition } from "@fortawesome/pro-solid-svg-icons";

export interface AccordionProps {
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
