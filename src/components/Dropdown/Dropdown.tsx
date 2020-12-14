import React from "react";
import { Dropdown as Select, DropdownProps } from "semantic-ui-react";

import { Container } from "./styles";
interface OptionsProps {
    key: string | number;
    text: string;
    value: any;
}
export interface Props extends DropdownProps {
    options?: OptionsProps[];
    brand?: boolean;
    textAlign?: "center";
    errorMessage?: string;
    label?: string;
    colorLabel?: string;
}

const Dropdown: React.FC<Props> = ({
    options,
    brand,
    textAlign,
    errorMessage,
    label,
    colorLabel,
    ...rest
}) => {
    return (
        <Container
            brand={brand}
            textAlign={textAlign}
            error={errorMessage}
            colorLabel={colorLabel}
        >
            {label && <label>{label}</label>}
            <Select
                {...rest}
                selection
                noResultsMessage="Nenhum resultado encontrado"
                error={errorMessage ? true : false}
                options={options}
            />
            {errorMessage && <small>{errorMessage}</small>}
        </Container>
    );
};
export default Dropdown;
