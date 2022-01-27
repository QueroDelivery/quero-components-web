import styled, { css } from 'styled-components';
import { colors } from '../../styles/colors';

interface AccordionProps {
  subtitle?: string;
  open: boolean;
  secondary?: boolean;
  width?: number | string;
  icon?: boolean;
}

interface TitleProps {
  subtitle?: string;
}

interface BodyProps {
  width?: number | string;
  open: boolean;
}

export const Container = styled.div<AccordionProps>`
  font-family: MontSerrat !important;
  display: flex;
  width: ${props => {
    if (props.width) {
      if (typeof props.width === 'string') {
        return props.width;
      }
      return `${props.width}px`;
    }
    return '100%';
  }};
  justify-content: space-between;
  background-color: ${props => (props.secondary ? colors.card : colors.white)};
  border: 1px solid ${colors.card};
  padding: 0.9375rem 1.25rem;
  align-items: center;
  cursor: pointer;
  box-shadow: 0px 3px 2px 0px rgba(0, 0, 0, 0.16);

  .icon-title {
    display: flex;
    align-items: center;
  }

  .title-subtitle {
    display: flex;
    flex-direction: column;
    flex: 1;
    margin-left: ${props => (props.icon ? '15px' : '0')};
  }

  .value-icon {
    display: flex;
    align-items: center;
    flex: 1;
    justify-content: flex-end;
  }

  ${props =>
    props.open
      ? css`
          border-top-left-radius: 20px;
          border-top-right-radius: 20px;
        `
      : css`
          border-radius: 20px;
        `}
`;

export const Title = styled.span<TitleProps>`
  font-size: ${props => (props.subtitle ? '0.875rem' : '1rem')};
  color: ${colors.gray20};
`;

export const Subtitle = styled.span`
  color: ${colors.gray10};
  font-size: 0.75rem;
`;

export const Value = styled.span<TitleProps>`
  margin-right: 1.25rem;
  color: ${colors.gray20};
`;

export const Body = styled.div<BodyProps>`
  font-family: MontSerrat !important;
  width: ${props => {
    if (typeof props.width === 'string') {
      return props.width;
    }
    return `${props.width}px`;
  }};
  padding: 1.25rem;
  border: 1px solid ${colors.card};
  border-top: 0;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  display: ${props => (props.open ? 'block' : 'none')};
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.16);
`;
