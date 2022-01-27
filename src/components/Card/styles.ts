import styled from 'styled-components';
import { getMeasurement } from '../../helpers/FnUtil';
import { colors } from '../../styles/colors';
import { TTypes } from './Card';

interface CardProps {
  width?: number | string;
  type?: TTypes;
}

export const Shadow = styled.div<CardProps>`
  font-family: MontSerrat !important;
  box-shadow: ${props => {
    if (props.type == 'none' || props.type == 'border') {
      return 'none';
    }

    if (props.type == 'min-shadow') {
      return '0px 0.125rem 0.25rem #00000029';
    }

    return '0 1.25rem 3.125rem 0 rgba(0, 0, 0, 0.16)';
  }};

  border: ${props =>
    props.type == 'border' || props.style?.borderRadius
      ? `1px solid  ${colors.default20}`
      : ''};
  padding: 1.25rem;
  background-color: ${colors.white};
  border-radius: 1.875rem;
  position: relative;

  width: ${props => getMeasurement(props.width, '100%')};
`;

export const Button = styled.a<CardProps>`
  font-family: MontSerrat !important;
  background-color: ${colors.card};
  padding: 0.75rem 1.5625rem;
  border-radius: 1.875rem;
  border: 1px solid ${colors.default30};
  width: ${props => getMeasurement(props.width, '100%')};
  cursor: pointer;
  display: flex;
  align-items: center;
  position: relative;

  :hover {
    background-color: ${colors.default10};
  }

  span {
    margin-left: 0.9375rem;
    font-size: 0.9375rem;
    color: ${colors.brandDark};
  }
`;

export const Complement = styled.div`
  font-family: MontSerrat !important;

  color: ${colors.gray20};
  background-color: ${colors.default10};

  border: 1px solid ${colors.default20};
  text-align: center;
  margin-top: -1.5625rem;
  padding-top: 1.5625rem;
  width: 100%;

  border-bottom-left-radius: 1.875rem;
  border-bottom-right-radius: 1.875rem;
`;

export const LoadingCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.8);
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 30px;
  z-index: 2;
  position: absolute;
`;
