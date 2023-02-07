/* eslint-disable @typescript-eslint/no-explicit-any */
import { CSSProperties } from 'react';
import {
  Dropdown as Select,
  DropdownProps as SemanticDropdownProps,
} from 'semantic-ui-react';

import { Container } from './styles';

export interface OptionsProps {
  key: string | number;
  text: string;
  value: any;
}
export interface DropdownProps extends SemanticDropdownProps {
  options?: OptionsProps[];
  brand?: boolean;
  textAlign?: 'center';
  errorMessage?: string;
  label?: string;
  line?: boolean;

  containerClassName?: string;
  containerStyle?: CSSProperties;
  errorClassName?: string;
  errorStyle?: CSSProperties;
  labelClassName?: string;
  labelStyle?: CSSProperties;
}

function Dropdown({
  options,
  brand,
  textAlign,
  errorMessage,
  label,
  line,
  containerClassName,
  containerStyle,
  errorClassName,
  errorStyle,
  labelClassName,
  labelStyle,
  noResultsMessage = 'Nenhum resultado encontrado',
  ...rest
}: DropdownProps) {
  return (
    <Container
      brand={brand}
      textAlign={textAlign}
      error={errorMessage}
      line={line}
      className={containerClassName}
      style={containerStyle}
      role="group"
    >
      {label && (
        <label className={labelClassName} style={labelStyle}>
          {label}
        </label>
      )}
      <Select
        {...rest}
        selection
        noResultsMessage={noResultsMessage}
        error={!!errorMessage || rest.error}
        options={options}
      />
      {errorMessage && (
        <small className={errorClassName} style={errorStyle}>
          {errorMessage}
        </small>
      )}
    </Container>
  );
}
export default Dropdown;
