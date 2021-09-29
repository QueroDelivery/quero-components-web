import styled, { css } from 'styled-components';
import { colors } from '../../styles/colors';

interface AccordionProps {
  subtitle?: string;
  colorTitle?: string;
  colorSubtitle?: string;
  colorValue?: string;
  open: boolean;
  secondary?: boolean;
  width?: number | string;
  icon?: boolean;
  fontSizeTitle?: number | string;
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
  padding: 15px 20px;
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

    .title {
      font-size: ${props => {
        if (props.fontSizeTitle) {
          if (typeof props.fontSizeTitle === 'string') {
            return props.fontSizeTitle;
          }
          return `${props.fontSizeTitle}px`;
        }
        return props.subtitle ? '14px' : '16px';
      }};

      color: ${props =>
        props.colorTitle ? props.colorTitle : `${colors.gray20}`};
    }

    .subtitle {
      color: ${props =>
        props.colorSubtitle ? props.colorSubtitle : `${colors.gray10}`};
      font-size: 12px;
    }
  }

  .value-icon {
    display: flex;
    align-items: center;
    flex: 1;
    justify-content: flex-end;

    .value {
      margin-right: 20px;
      color: ${props =>
        props.colorValue ? props.colorValue : `${colors.gray20}`};
    }
  }

  ${props =>
    props.open
      ? css`
          border-top-left-radius: 20px;
          border-top-right-radius: 20px;
        `
      : css`
          border-radius: 30px;
        `}
`;
export const Body = styled.div<BodyProps>`
  font-family: MontSerrat !important;
  width: ${props => (props.width ? `${props.width}%` : '100%')};
  padding: 20px;
  border: 1px solid ${colors.card};
  border-top: 0;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  display: ${props => (props.open ? 'block' : 'none')};
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.16);
`;
