import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleUp,
  faAngleDown,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons';

import { Container, Body } from './styles';
import { colors } from '../../styles/colors';

export interface AccordionProps {
  title: string;
  colorTitle?: string;
  subtitle?: string;
  colorSubtitle?: string;
  value?: string;
  colorValue?: string;
  open: boolean;
  // eslint-disable-next-line no-unused-vars
  onClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  secondary?: boolean;
  width?: number | string;
  icon?: IconDefinition;
  customIcon?: React.ReactNode;
  colorIcon?: string;
  fontSizeTitle?: number | string;
}

const Accordion: React.FC<AccordionProps> = ({
  title,
  colorTitle,
  subtitle,
  colorSubtitle,
  value,
  colorValue,
  children,
  secondary,
  open,
  onClick,
  width,
  icon,
  customIcon,
  colorIcon,
  fontSizeTitle,
}) => {
  return (
    <React.Fragment>
      <Container
        data-testid="accordion-component"
        colorTitle={colorTitle}
        colorSubtitle={colorSubtitle}
        colorValue={colorValue}
        secondary={secondary}
        subtitle={subtitle}
        open={open}
        onClick={event => onClick(event)}
        width={width}
        icon={!!(icon || customIcon)}
        fontSizeTitle={fontSizeTitle}
      >
        <div className="icon-title">
          {customIcon ||
            (icon ? (
              <FontAwesomeIcon
                data-testid="accordion-icon"
                icon={icon}
                size="lg"
                color={colorIcon || colors.brand10}
              />
            ) : null)}

          <div className="title-subtitle">
            <span className="title">{title}</span>
            {subtitle && <span className="subtitle">{subtitle}</span>}
          </div>
        </div>

        <div className="value-icon">
          {value && <span className="value">{value}</span>}
          {secondary ? (
            <FontAwesomeIcon
              icon={open ? faAngleUp : faAngleDown}
              style={{ fontSize: 20 }}
            />
          ) : (
            <FontAwesomeIcon
              icon={open ? faAngleUp : faAngleDown}
              style={{ fontSize: 20 }}
              color={colors.brand10}
            />
          )}
        </div>
      </Container>

      <Body open={open} width={width}>
        {children}
      </Body>
    </React.Fragment>
  );
};

export default Accordion;
