import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

export interface AccordionProps {
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
