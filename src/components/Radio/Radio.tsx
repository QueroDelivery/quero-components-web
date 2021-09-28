import React, { InputHTMLAttributes } from "react";

import { Container } from "./styles";

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: string;
  labelStyle?: React.CSSProperties;
  onChange: () => void;
  sizeBox?:
    | "mini"
    | "tiny"
    | "small"
    | "medium"
    | "large"
    | "big"
    | "huge"
    | "massive";
}

const Radio: React.FC<InputProps> = ({
  label,
  labelStyle,
  sizeBox,
  ...rest
}) => {
  return (
    <Container
      onClick={() =>
        !rest.disabled ? (rest.onChange ? rest.onChange() : null) : null
      }
      disabled={rest.disabled}
      sizeBox={sizeBox}
    >
      <input type="radio" {...rest} />
      <div>
        <label style={labelStyle}>{label}</label>
      </div>
    </Container>
  );
};

export default Radio;
