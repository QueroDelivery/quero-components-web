import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleUp,
  faAngleDown,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons';

import { Container, Body, Title, Subtitle, Value } from './styles';
import { colors } from '../../styles/colors';

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
  // eslint-disable-next-line no-unused-vars
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

const Accordion: React.FC<AccordionProps> = ({
  className,
  style,
  title,
  titleClassName,
  titleStyle,
  subtitle,
  subtitleClassName,
  subtitleStyle,
  value,
  valueClassName,
  valueStyle,
  children,
  secondary,
  open,
  onClick,
  width,
  icon,
  iconClassName,
  iconStyle,
  customIcon,
  bodyClassName,
  bodyStyle,
}) => {
  return (
    <>
      <Container
        role="button"
        className={className}
        style={style}
        secondary={secondary}
        subtitle={subtitle}
        open={open}
        onClick={event => onClick(event)}
        width={width}
        icon={!!(icon || customIcon)}
      >
        <div className="icon-title">
          {customIcon ||
            (icon ? (
              <FontAwesomeIcon
                data-testid="accordion-icon"
                className={iconClassName}
                style={iconStyle}
                icon={icon}
                size="lg"
                color={colors.brand10}
              />
            ) : null)}

          <div className="title-subtitle">
            <Title
              className={titleClassName}
              style={titleStyle}
              subtitle={subtitle}
            >
              {title}
            </Title>
            {subtitle && (
              <Subtitle className={subtitleClassName} style={subtitleStyle}>
                {subtitle}
              </Subtitle>
            )}
          </div>
        </div>

        <div className="value-icon">
          {value && (
            <Value className={valueClassName} style={valueStyle}>
              {value}
            </Value>
          )}
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

      <Body
        className={bodyClassName}
        style={bodyStyle}
        open={open}
        width={width}
      >
        {children}
      </Body>
    </>
  );
};

export default Accordion;
