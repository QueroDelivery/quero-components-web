import { sizesTypes } from '../../helpers/FnUtil';
interface IButtonProps {
    active?: boolean;
}
interface IContainerProps {
    disabledAll?: boolean;
    size: sizesTypes;
}
export declare const ContainerPagination: import("styled-components").StyledComponent<"div", any, IContainerProps, never>;
export declare const Button: import("styled-components").StyledComponent<"button", any, IButtonProps, never>;
export {};
