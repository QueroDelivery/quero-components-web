import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

export interface AccordionProps {
  title: string;
  subtitle?: string;
  width?: number | string;
  icon?: IconDefinition;
  value?: string;
  open: boolean;
  onChange: () => void;
  colorTitle?: string;
  colorSubtitle?: string;
  colorIcon?: string;
  colorValue?: string;
  secondary?: boolean;
  customIcon?: React.ReactNode;
  fontSizeTitle?: number | string;
}
